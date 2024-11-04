import { createClient } from '@supabase/supabase-js';
import { CONFIGS } from '../configs/config';

export const supabase = createClient(
  CONFIGS.SUPABASE_URL,
  CONFIGS.SUPABASE_KEY
);
