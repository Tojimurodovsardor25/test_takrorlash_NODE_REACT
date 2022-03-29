/*
---------------------------------------------------------------------
======================================= 2 - Bob 7 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Shartli tuzilmalar --->> */

/*
Shartli konstruksiyalar muayyan shartlarga qarab muayyan harakatlarni bajarishga imkon beradi.
*/

/*
======================================= if..else ni qurish (dizayn) -->
*/

// If..else konstruksiyasi (qurish yoki dizayn) ba'zi shartlarni tekshiradi va agar bu shart rost bo'lsa, ba'zi amallarni bajaradi. if..else konstruktsiyasining eng oddiy shakli:

// const income = 100;
// const age = 19;
// if(income > 50 && age > 18){

//     console.log("Qiymat katta 50");
//     console.log("Qiymat katta 18");
// }

// Qiymat mavjudligini tekshirish

/*
If konstruktsiyasi qiymat mavjudligini tekshirish imkonini beradi. Misol uchun:
*/

// let myVar = 89;
// if(myVar){

//     console.log(`myVar qiymatiga ega: ${myVar}`);
// }

// Bu erda myVar o'zgaruvchisi hech qanday qiymatga ega emas. (Haqiqatda u aniqlanmaganga teng) Shuning uchun if konstruktsiyasidagi shart noto'g'ri qiymatni qaytaradi va if construct blokidagi amallar bajarilmaydi.

// Ammo ko'pincha o'zgaruvchining qiymatini tekshirish uchun ular muqobil variantdan foydalanadilar - ular aniqlanmagan va null qiymatini tekshiradilar:

// if (myVar !== undefined && myVar !== null) {
//     console.log(`myVar qiymatiga ega: ${myVar}`);
// }

//  ================================== else ifodasi

// Yuqorida if dan keyingi shart rost bo'lsa, bajariladigan amallarni qanday aniqlashni ko'rib chiqdik.

// if (harakatlar) {
//     // harakatlar, agar shart to'g'ri bo'lsa
// }
// else {
//     // harakatlar, agar shart noto'g'ri bo'lsa
// }

//  True yoki fasle

// JavaScript-da har qanday o'zgaruvchidan shartli ifodalarda foydalanish mumkin, lekin hech qanday o'zgaruvchi boolean turiga kirmaydi.Shu munosabat bilan savol tug'iladi, u yoki bu o'zgaruvchi nimani qaytaradi - rostmi yoki noto'g'ri? Ko'p narsa o'zgaruvchi ko'rsatadigan ma'lumotlar turiga bog'liq:

// undefined
// Noto'g'ri qaytaradi

// null
// Noto'g'ri qaytaradi

// Boolean
// Agar doimiy/o'zgaruvchi noto'g'ri bo'lsa, u holda false qaytariladi. Shunga ko'ra, agar doimiy / o'zgaruvchi rost bo'lsa, u holda true qaytariladi

// Number
// Agar raqam 0 yoki NaN (raqam emas) bo'lsa, noto'g'ri, aks holda rost qaytaradi

// Misol uchun, quyidagi o'zgaruvchi false qaytaradi:

// let x = NaN;
// if(x){  // false
 
// }

// String
// Agar doimiy/o'zgaruvchi bo'sh satrga teng bo'lsa, noto'g'ri qaytaradi, ya'ni uning uzunligi 0 bo'lsa, aks holda rost qaytaradi

// const emptyText = "";   // false - bo'sh qator sifatida
// const someText = "javascript";  // true - qator bo'sh emas

// Object

// Har doim true qaytaradi

// const user = {name:"Tom"};  // true
// const car = {}; // true

// const income = 300;
// switch(income){
 
//     case 100 : 
//         console.log("Qiymat teng 100 ga");
//         break;
//     case 200 : 
//         console.log("Qiymat teng 200 ga");
//         break;
//     case 300 : 
//         console.log("Qiymat teng 300 ga");
//         break;
//     default: 
//         console.log("Nomalum qiymat miqdori");
//         break;
// }