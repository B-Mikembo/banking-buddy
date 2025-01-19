export default async function ({ password, ...userData }: SignUpParams) {
  const { email } = userData;
  try {
    const client = useSupabaseClient();
    const signUpResponse = await client.auth.signUp({
      email: userData.email,
      password: password,
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
}
