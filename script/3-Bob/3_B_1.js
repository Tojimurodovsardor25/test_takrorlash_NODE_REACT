/* 
OGOHLANTIRISH 2_B_4 Tushunchasi quyidagicha 3 - Bob 1 - dars. Ma'roqli dars! :)
*/

/* 
---------------------------------------------------------------------
======================================= 3 - Bob 1 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Funktsiya parametrlari --->> */

// JavaScript-dagi funksiya parametrlarni qabul qilishi mumkin. Parametrlar ma'lumotlarning funktsiyaga uzatilishini ifodalaydi. Parametrlar funksiya nomidan keyin qavs ichida ko'rsatilgan.

// Ixtiyoriy parametrlar va standart qiymatlar


// Funktsiya ko'p parametrlarni qabul qilishi mumkin, lekin parametrlarning bir qismi yoki barchasi ixtiyoriy bo'lishi mumkin. Parametrlar uchun hech qanday qiymat o'tkazilmasa, ular sukut bo'yicha "undefined" bo'ladi. Biroq, ba'zida parametrlar ba'zi qiymatlarga ega bo'lishi kerak, masalan, standart qiymatlar. ES6 standartidan oldin parametr qiymatlarini aniqlanmaganligini tekshirish kerak edi:

// function sum(x, y){
 
//     if(y === undefined) y = 5;
//     if(x === undefined) x = 8;
//     const z = x + y;
//     console.log(z);
// }
// sum();          // 13
// sum(6);         // 11
// sum(6, 4)       // 10

// Bu yerda sum() funksiyasi ikkita parametrni oladi. Funksiyani chaqirganda biz ularning qiymatlarini tekshirishimiz mumkin. Shu bilan birga, funktsiyani chaqirganda, ushbu parametrlar uchun qiymatlarni o'tkazish shart emas. Parametr qiymatining mavjudligini tekshirish uchun aniqlanmagan qiymat bilan taqqoslash qo'llaniladi.

// Shuningdek, biz to'g'ridan-to'g'ri parametrlar uchun standart qiymatlarni belgilashimiz mumkin:

// function sum(x = 8, y = 5){
 
//     const z = x + y;
//     console.log(z);
// }
// sum();      // 13
// sum(6);     // 11
// sum(6, 4)   // 10

// Agar x va y parametrlariga hech qanday qiymat o'tkazilmasa, ular mos ravishda 5 va 10 raqamlarining qiymatlari sifatida qabul qilinadi. Bu usul undefined bilan solishtirishdan ko'ra qisqaroq va intuitivdir.