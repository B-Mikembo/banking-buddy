import {
  CreateUserAccountUsecase,
  UserInput,
} from "@/domains/account/create-user-account.usecase";
import {
  TemporaryAccount,
  UserAccount,
  UserAccountRepository,
  UserAccountToCreate,
} from "@/domains/account/ports/user-account.repository";
import { describe, expect, it } from "vitest";
import { SpySaveUserSessionRepository } from "./sessionRepository.saveUser.spy";
import { CreateAccountPresenterImpl } from "@/domains/account/adapters/create-account.presenter.impl";
import { User } from "@/domains/authentication/ports/user.repository";

class UserAccountForTest implements UserAccountRepository {
  createUserAccount(
    userAccountToCreate: UserAccountToCreate
  ): Promise<TemporaryAccount> {
    return Promise.resolve({
      email: userAccountToCreate.email,
    });
  }
}

describe("Test file for creating a user account", () => {
  it("must create a temporary account and save only the email in session", async () => {
    //  GIVEN
    const accountToCreate: UserInput = {
      email: "john@skynet.com",
      password: "password",
    };
    const sessionRepository =
      SpySaveUserSessionRepository.withoutOnboardingDone();
    const userAccountRepository = new UserAccountForTest();
    //  WHEN
    const usecase = new CreateUserAccountUsecase(
      userAccountRepository,
      sessionRepository
    );
    await usecase.execute(
      new CreateAccountPresenterImpl((viewModel) => {
        expect(viewModel.route).toBe("account-validation");
      }),
      accountToCreate
    );
    //  THEN
    expect(sessionRepository.user).toStrictEqual<Partial<User>>({
      id: "",
      email: "john@skynet.com",
      lastname: "",
      firstname: "",
      onboardingDone: false,
    });
  });
});
