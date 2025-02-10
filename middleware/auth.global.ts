export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath === '/auth/sign-in' || to.fullPath === '/auth/sign-up') {
    return;
  }
  const user = useSupabaseUser();
  if (!user.value) {
    useRouter().push('/auth/sign-in');
  }
  else if (to.path === "/" || !useRouter().getRoutes().some(route => route.path == to.path)) {
    return navigateTo('/home', {replace: true});
  }
});
