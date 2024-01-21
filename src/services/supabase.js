import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://jpsivszomqoqcigyyceh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwc2l2c3pvbXFvcWNpZ3l5Y2VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTE1MjAsImV4cCI6MjAxODA2NzUyMH0.VwRTZ7MKShUUgsy2agj3hslOh6BwYRjaDJpISiBQFP4'

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;