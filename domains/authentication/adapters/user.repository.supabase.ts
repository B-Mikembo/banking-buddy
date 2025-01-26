import { SupabaseFactory } from '../../../supabase.factory';
import type { UserRepository } from '../ports/user.repository';

export class UserRepositorySupabase implements UserRepository {
  async signInUser(email: string, password: string): Promise<void> {
    const supabaseInstance = SupabaseFactory.getSupabaseClient();
    const { data, error } = await supabaseInstance.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }
}
