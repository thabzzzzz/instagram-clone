
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ltcrbbizovznmsumftbb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0Y3JiYml6b3Z6bm1zdW1mdGJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NDQ5MTYsImV4cCI6MjAzOTEyMDkxNn0.XLBfSoaSzhaiSEZv_VUOP2nSHueH7pP_SPPjgXIi8Cc'
const supabase = createClient(supabaseUrl, supabaseKey)