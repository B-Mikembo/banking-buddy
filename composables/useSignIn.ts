export default async function ({ email, password }: signInProps) {
  try {
    const client = useSupabaseClient();
    const { data, error } = await client.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) throw error;
    const user = await useGetUserInfo({ userId: data.user.id });
    if (user) useRouter().push('/');
  } catch (error) {
    console.error(error);
  }
}
