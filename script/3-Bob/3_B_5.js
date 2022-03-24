/*
---------------------------------------------------------------------
======================================= 3 - Bob 5 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Shakl - (naqish) moduli --->> */

// Funktsiya natijani qaytarishi mumkin. Buning uchun return iborasidan foydalaning, shundan so'ng qaytarish qiymati ko'rsatiladi:

// "Modul" namunasi yopilishlarga asoslanadi va ikkita komponentdan iborat: leksik muhitni belgilaydigan tashqi funktsiya va ushbu muhitga kirish huquqiga ega bo'lgan ichki funktsiyalarning qaytish to'plami.

// Eng oddiy modulni aniqlaymiz:

// let foo = (function(){
//     let obj = {greeting: "salom"};
     
//     return {
//         display: function(){
//             console.log(obj.greeting);
//         }
//     }
// })();
// foo.display();  // salom

// Bu yerda foo oʻzgaruvchisi aniqlanadi, u anonim funksiya natijasini ifodalaydi. Bunday funktsiyaning ichida obj ob'ekti ba'zi ma'lumotlar bilan aniqlanadi.

// Anonim funksiyaning o'zi displey funktsiyasini belgilaydigan ob'ektni qaytaradi. Qaytarilgan ob'ekt umumiy APIni belgilaydi, bu orqali biz modul ichida aniqlangan ma'lumotlarga kirishimiz mumkin.

// return {
//     display: function(){
//         console.log(obj.greeting);
//     }
// }

// Ushbu dizayn modul funktsiyasi ichidagi ma'lum bir ma'lumotlar to'plamini yopish va ma'lum bir API - qaytarilgan ichki funktsiyalar orqali ularga kirishda vositachilik qilish imkonini beradi.

// Keling, biroz murakkabroq misolni ko'rib chiqaylik:

// let calculator = (function(){
//     let data = { number: 0};
     
//     return {
//         sum: function(n){
//             data.number += n;
//         },
//         subtract: function(n){
//             data.number -= n;
//         },
//         display: function(){
//             console.log("Natija: ", data.number);
//         }
//     }
// })();

// calculator.sum(10);
// calculator.sum(3);
// calculator.display();   // Natija: 13
// calculator.subtract(4);
// calculator.display();   // Natija: 9

// Bu modul ibtidoiy kalkulyator bo'lib, uchta amalni bajaradi: qo'shish, ayirish va chiqarish.

// Barcha ma'lumotlar operatsiya natijasini saqlaydigan ma'lumotlar ob'ektida inkapsullanadi. Barcha operatsiyalar uchta qaytarish funktsiyasi bilan ifodalanadi: yig'indi, ayirish va ko'rsatish. Bu funksiyalar orqali biz kalkulyator natijasini tashqaridan nazorat qilishimiz mumkin.