// سكربت اختبار نظام المصادقة المحلي
const { authenticateUser } = require('../inventory-management-system/lib/enhanced-auth');

const testUsers = [
  { username: 'ممر1', password: '311', expected: true },
  { username: 'ممر2', password: '342', expected: true },
  { username: 'ممر3', password: '353', expected: true },
  { username: 'ممر4', password: '364', expected: true },
  { username: 'ممر5', password: '375', expected: true },
  { username: 'ممر6', password: '386', expected: true },
  { username: 'ممر7', password: '397', expected: true },
  { username: 'ممر8', password: '408', expected: true },
  { username: 'ممر9', password: '419', expected: true },
  { username: 'ممر10', password: '420', expected: true },
  { username: 'المخزن', password: '932', expected: true },
  { username: 'hr', password: '237', expected: true },
  // اختبارات خاطئة
  { username: 'ممر1', password: '123', expected: false },
  { username: 'ممر2', password: '999', expected: false },
  { username: 'غيرموجود', password: '123', expected: false },
];

function testAuthentication() {
  console.log('🧪 اختبار نظام المصادقة المحلي...\n');
  
  let passedTests = 0;
  let totalTests = testUsers.length;
  
  testUsers.forEach((test, index) => {
    const result = authenticateUser(test.username, test.password);
    const success = (result !== null) === test.expected;
    
    if (success) {
      passedTests++;
      console.log(`✅ اختبار ${index + 1}: ${test.username} - ${test.password} (${result ? 'نجح' : 'فشل كما هو متوقع'})`);
    } else {
      console.log(`❌ اختبار ${index + 1}: ${test.username} - ${test.password} (فشل)`);
    }
  });
  
  console.log(`\n📊 النتائج: ${passedTests}/${totalTests} اختبارات نجحت`);
  
  if (passedTests === totalTests) {
    console.log('🎉 جميع الاختبارات نجحت! نظام المصادقة يعمل بشكل صحيح.');
  } else {
    console.log('⚠️ بعض الاختبارات فشلت. يرجى مراجعة إعدادات المصادقة.');
  }
}

// تشغيل الاختبار
testAuthentication(); 