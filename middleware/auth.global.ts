import { AuthUserPresenterImpl } from '@/domains/authentication/adapters/auth-user.presenter.impl';
import { UserRepositorySupabase } from '@/domains/authentication/adapters/user.repository.supabase';
import { GetCurrentUserUsecase } from '@/domains/authentication/get-current-user.usecase';

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath === '/auth/sign-in' || to.fullPath === '/auth/sign-up') {
    return;
  }
  const usecase = new GetCurrentUserUsecase(new UserRepositorySupabase());
  usecase
    .execute(
      new AuthUserPresenterImpl(route => {
        console.log(route);
        useRouter().push(to.fullPath || route);
      })
    )
    .catch(reason => {
      console.error(reason);
      abortNavigation();
    });
});
