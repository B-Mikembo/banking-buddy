import type { Database } from '~/types/database.types';

export default function () {
  const router = useRouter();
  const signUp = async (userData: SignUpParams) => {
    const { email, password } = userData;
    let newUserAccount;
    try {
      const client = useSupabaseClient<Database>();
      const signUpResponse = await client.auth.signUp({
        email: userData.email,
        password: userData.password,
      });
      if (signUpResponse.error) throw signUpResponse.error;

      const newUser = await client
        .from('users')
        .insert({ firstname: userData.firstname, lastname: userData.lastname, email: userData.email })
        .select()
        .single();

      const signInResponse = await client.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (signInResponse.error) throw signInResponse.error;
      return newUser.data;
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
    signOut,
  };
}
