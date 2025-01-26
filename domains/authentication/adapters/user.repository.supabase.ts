import { SupabaseFactory } from '../../../supabase.factory';
import type { AuthUser, UserRepository } from '../ports/user.repository';

export class UserRepositorySupabase implements UserRepository {
  async getCurrentUser(): Promise<AuthUser> {
    const supabaseInstance = SupabaseFactory.getSupabaseClient();
    const {
      data: { user },
    } = await supabaseInstance.auth.getUser();
    return {
      id: user.id,
      email: user.email as string,
    };
  }
  async signInUser(email: string, password: string): Promise<void> {
    const supabaseInstance = SupabaseFactory.getSupabaseClient();
    const { data, error } = await supabaseInstance.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }
}
