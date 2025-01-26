import { createClient } from '@supabase/supabase-js';

export class SupabaseFactory {
  public static getSupabaseClient() {
    const config = useRuntimeConfig();
    return createClient(config.public.supabaseUrl, config.public.supabaseKey);
  }
}
