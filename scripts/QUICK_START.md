# دليل التشغيل السريع

## خطوات سريعة لإنشاء المستخدمين:

### 1. إنشاء ملف .env.local
في مجلد `inventory-management-system/` أنشئ ملف `.env.local` وأضف:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 2. تثبيت المكتبات
```bash
cd scripts
npm install
```

### 3. اختبار الاتصال
```bash
npm run test-connection
```

### 4. إنشاء المستخدمين
```bash
npm run create-users
```

## المستخدمين الذين سيتم إنشاؤهم:

### الممرات (10 ممرات):
| اسم المستخدم | كلمة المرور | الدور |
|-------------|-------------|-------|
| ممر1 | 311 | worker |
| ممر2 | 342 | worker |
| ممر3 | 353 | worker |
| ممر4 | 364 | worker |
| ممر5 | 375 | worker |
| ممر6 | 386 | worker |
| ممر7 | 397 | worker |
| ممر8 | 408 | worker |
| ممر9 | 419 | worker |
| ممر10 | 420 | worker |

### الإدارة:
| اسم المستخدم | كلمة المرور | الدور |
|-------------|-------------|-------|
| المخزن | 932 | warehouse |
| hr | 237 | hr |

## في حالة حدوث خطأ:

1. تأكد من صحة Service Role Key
2. تأكد من إنشاء الجداول في Supabase
3. تأكد من وجود ملف .env.local في المجلد الصحيح
4. تحقق من رسائل الخطأ في وحدة التحكم 