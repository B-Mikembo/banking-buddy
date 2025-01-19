export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath === '/auth/sign-in' || to.fullPath === '/auth/sign-up') {
    return;
  }
  const user = useSupabaseUser();
  if (!user.value) {
    useRouter().push('/auth/sign-in');
  }
});
