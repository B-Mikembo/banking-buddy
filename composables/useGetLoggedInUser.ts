export default async function () {
  const supabaseUser = useSupabaseUser();
  if (supabaseUser.value) {
    const user = await useGetUserInfo({ userId: supabaseUser.value.id });
    return user
  }
  return null;
}
