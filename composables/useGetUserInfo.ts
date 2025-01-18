import type { Database } from '~/types/database.types';

export default async function ({ userId }: getUserInfoProps) {
  const client = useSupabaseClient<Database>();
  const { data } = await useAsyncData('users', async () => {
    const { data } = await client.from('users').select().eq('user_id', userId).single();
    return data;
  });
  return data.value;
}
