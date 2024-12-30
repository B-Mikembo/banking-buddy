import { SessionRepository } from "@/domains/authentication/authenticate-user.usecase";
import { User } from "@/domains/authentication/ports/user.repository";

export class SpySaveUserSessionRepository implements SessionRepository {
  private _user: User = {
    id: "",
    lastname: "",
    firstname: "",
    email: "",
    onboardingDone: false,
  };

  get user(): User {
    return this._user;
  }

  static withOnboardingDone(user?: Partial<User>): SpySaveUserSessionRepository {
    const repository = new SpySaveUserSessionRepository();
    repository.saveUser({onboardingDone: true, ...user});
    return repository;
  }

  static withoutOnboardingDone(): SpySaveUserSessionRepository {
    const repository = new SpySaveUserSessionRepository();
    repository.saveUser({onboardingDone: false});
    return repository;
  }

  saveUser(user: Partial<User>): void {
    this._user = {
      ...this._user,
      ...user,
    };
  }
}
