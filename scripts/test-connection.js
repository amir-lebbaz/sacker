const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env.local' });

// Initialize Supabase client with service role key
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function testConnection() {
  console.log('اختبار الاتصال بـ Supabase...');
  
  // Check if environment variables are set
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.error('❌ NEXT_PUBLIC_SUPABASE_URL غير محدد');
    return;
  }
  
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('❌ SUPABASE_SERVICE_ROLE_KEY غير محدد');
    return;
  }
  
  console.log('✅ متغيرات البيئة محددة');
  
  try {
    // Test connection by querying user_profiles table
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('❌ خطأ في الاتصال:', error.message);
      console.log('تأكد من:');
      console.log('1. صحة Service Role Key');
      console.log('2. إنشاء الجداول في Supabase');
      console.log('3. صحة URL');
      return;
    }
    
    console.log('✅ الاتصال ناجح!');
    console.log('✅ الجداول موجودة');
    
    // Test auth admin access
    const { data: authTest, error: authError } = await supabase.auth.admin.listUsers();
    
    if (authError) {
      console.error('❌ خطأ في اختبار Auth Admin:', authError.message);
      return;
    }
    
    console.log('✅ Auth Admin يعمل بشكل صحيح');
    console.log(`عدد المستخدمين الحاليين: ${authTest.users.length}`);
    
    console.log('\n🎉 كل شيء جاهز لتشغيل سكربت إنشاء المستخدمين!');
    console.log('يمكنك الآن تشغيل: npm run create-users');
    
  } catch (error) {
    console.error('❌ خطأ غير متوقع:', error.message);
  }
}

// Run the test
testConnection().catch(console.error); 