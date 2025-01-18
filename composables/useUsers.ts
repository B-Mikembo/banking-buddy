export default function () {
  const router = useRouter();
  const signOut = async () => {
    try {
      const client = useSupabaseClient();
      const { error } = await client.auth.signOut();
      if (error) throw error;
      router.push('/auth/sign-in');
    } catch (error) {
      console.error(error);
    }
  };

  return {
    signOut,
  };
}
