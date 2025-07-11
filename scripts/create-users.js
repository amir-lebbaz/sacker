const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// Initialize Supabase client with service role key
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const users = [
  // الممرات (10 ممرات)
  {
    username: 'ممر1',
    password: '311',
    role: 'worker',
    name: 'ممر 1',
    department: 'التمريض'
  },
  {
    username: 'ممر2',
    password: '342',
    role: 'worker',
    name: 'ممر 2',
    department: 'التمريض'
  },
  {
    username: 'ممر3',
    password: '353',
    role: 'worker',
    name: 'ممر 3',
    department: 'التمريض'
  },
  {
    username: 'ممر4',
    password: '364',
    role: 'worker',
    name: 'ممر 4',
    department: 'التمريض'
  },
  {
    username: 'ممر5',
    password: '375',
    role: 'worker',
    name: 'ممر 5',
    department: 'التمريض'
  },
  {
    username: 'ممر6',
    password: '386',
    role: 'worker',
    name: 'ممر 6',
    department: 'التمريض'
  },
  {
    username: 'ممر7',
    password: '397',
    role: 'worker',
    name: 'ممر 7',
    department: 'التمريض'
  },
  {
    username: 'ممر8',
    password: '408',
    role: 'worker',
    name: 'ممر 8',
    department: 'التمريض'
  },
  {
    username: 'ممر9',
    password: '419',
    role: 'worker',
    name: 'ممر 9',
    department: 'التمريض'
  },
  {
    username: 'ممر10',
    password: '420',
    role: 'worker',
    name: 'ممر 10',
    department: 'التمريض'
  },
  // المخزن
  {
    username: 'المخزن',
    password: '932',
    role: 'warehouse',
    name: 'مدير المخزن',
    department: 'المستودع'
  },
  // الموارد البشرية
  {
    username: 'hr',
    password: '237',
    role: 'hr',
    name: 'مسؤول الموارد البشرية',
    department: 'الموارد البشرية'
  }
];

async function createUsers() {
  console.log('بدء إنشاء المستخدمين...');
  
  for (const user of users) {
    try {
      console.log(`إنشاء المستخدم: ${user.username}`);
      
      // Create user in Supabase Auth with username as email
      const email = `${user.username}@inventory.com`;
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: email,
        password: user.password,
        email_confirm: true,
        user_metadata: {
          username: user.username
        }
      });
      
      if (authError) {
        console.error(`خطأ في إنشاء المستخدم ${user.username}:`, authError.message);
        continue;
      }
      
      console.log(`تم إنشاء المستخدم في Auth: ${user.username}`);
      
      // Insert user profile
      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          user_id: authData.user.id,
          name: user.name,
          role: user.role,
          department: user.department,
          username: user.username,
          email: email
        });
      
      if (profileError) {
        console.error(`خطأ في إنشاء الملف الشخصي للمستخدم ${user.username}:`, profileError.message);
        continue;
      }
      
      console.log(`تم إنشاء الملف الشخصي للمستخدم: ${user.username}`);
      console.log(`البيانات: اسم المستخدم: ${user.username}, كلمة المرور: ${user.password}, الدور: ${user.role}`);
      console.log('---');
      
    } catch (error) {
      console.error(`خطأ غير متوقع للمستخدم ${user.username}:`, error.message);
    }
  }
  
  console.log('انتهى إنشاء المستخدمين!');
  console.log('\n📋 ملخص المستخدمين:');
  console.log('10 ممرات (ممر1 إلى ممر10)');
  console.log('المخزن - كلمة المرور: 932');
  console.log('HR - كلمة المرور: 237');
}

// Run the script
createUsers().catch(console.error); 