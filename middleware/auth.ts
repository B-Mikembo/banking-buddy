export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();
  if (!user.value) {
    useRouter().push('/auth/sign-in');
  }
});
