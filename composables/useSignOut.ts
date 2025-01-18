export default async function () {
  try {
    const client = useSupabaseClient();
    const { error } = await client.auth.signOut();
    if (error) throw error;
    useRouter().push('/auth/sign-in');
  } catch (error) {
    console.error(error);
  }
}
