export default function () {
  const router = useRouter();
  const signUp = async (userData: SignUpParams) => {
    const { email, password } = userData;
    let newUserAccount;
    try {
      const client = useSupabaseClient();
      newUserAccount = await client.auth.signUp({
        email: userData.email,
        password: userData.password,
      });
      if (newUserAccount.error) throw newUserAccount.error;
      await client.auth.signInWithPassword({
        email: email,
        password: password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async ({ email, password }: signInProps) => {
    try {
      const client = useSupabaseClient();
      const { error } = await client.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

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
    signUp,
    signIn,
    signOut,
  };
}
