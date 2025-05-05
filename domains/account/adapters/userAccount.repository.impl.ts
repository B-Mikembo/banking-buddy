import { UserAccountRepository, UserAccountToCreate } from '../ports/userAccount.repository';
import { AxiosFactory, type AxiosError } from '~/axios.factory';
import { RepositoryError } from '~/shell/repositoryError';

export class UserAccountRepositoryImpl implements UserAccountRepository {
  async createUserAccount(userAccountToCreate: UserAccountToCreate): Promise<void> {
    try {
      const axiosInstance = AxiosFactory.getAxios();
      await axiosInstance.post('/users', {
        firstName: userAccountToCreate.firstName,
        email: userAccountToCreate.email,
        password: userAccountToCreate.password,
      });
    } catch (e) {
      const error = e as AxiosError;
      if (error.status === 400) {
        throw new RepositoryError((error.data as RepositoryError).code, (error.data as RepositoryError).message);
      } else if (!error.data) {
        throw new RepositoryError(
          'NETWORK_ERROR',
          'Erreur de connexion. Vérifiez votre connexion ou les bloqueurs de contenu.'
        );
      } else {
        throw new RepositoryError('UNKNOWN_ERROR', 'Une erreur inattendu est survenue.');
      }
    }
  }
}
