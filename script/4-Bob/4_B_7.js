/*
---------------------------------------------------------------------
======================================= 4 - Bob 7 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Ob'ekt kengaytmasi. Prototype - (prototip)--->> */

// Konstruktorda xossa va usullarni bevosita belgilashdan tashqari, biz prototip xususiyatidan ham foydalanishimiz mumkin. Har bir funktsiya prototip xususiyatiga ega bo'lib, u funksiya prototipini ifodalaydi. Ya'ni User.prototype xossasi User ob'yektlarining prototipini ifodalaydi. User.prototype da belgilangan har qanday xususiyat va usullar barcha Foydalanuvchi ob'ektlari uchun umumiy bo'ladi.

// Masalan, User ob'ektini aniqlagandan so'ng, biz unga usul va xususiyatni qo'shishimiz kerak edi:

// function User(pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function () {
//         document.write("Abdulloh: " + this.name + "; yoshi: " + this.age + "<br/>");
//     };
// };

// User.prototype.hello = function () {
//     document.write(this.name + " gapiriyapti: 'Salom!'<br/>");
// };
// User.prototype.maxAge = 110;

// var tom = new User("Abdulloh", 20);
// tom.hello();
// var john = new User("Mirjalol", 20);
// john.hello();
// console.log(tom.maxAge); // 110
// console.log(john.maxAge); // 110

// Bu erda hello - (salom) usuli va maxAge xossasi qo'shiladi va har bir Foydalanuvchi ob'ekti ulardan foydalanishi mumkin. Ammo shuni ta'kidlash kerakki, maxAge xususiyatining qiymati barcha ob'ektlar uchun bir xil bo'ladi, bu umumiy statik xususiyatdir. Aytaylik, ma'lum bir ob'ekt uchun qiymatni saqlaydigan this.name xususiyatidan farqli o'laroq.

// Shu bilan birga, ob'ektda prototipning xususiyati bilan bir xil nomlanadigan xususiyatni aniqlashimiz mumkin. Bunday holda, ob'ektning o'z mulki prototip xususiyatidan ustun bo'ladi:

// User.prototype.maxAge = 110;
// var tom = new User("Abdulloh", 20);
// var john = new User("Mirjalol", 20);
// tom.maxAge = 99;
// console.log(tom.maxAge); // 99
// console.log(john.maxAge); // 110

// Va maxAge xususiyatiga kirishda javascript birinchi navbatda ob'ektning xossalari orasidan ushbu xususiyatni qidiradi va agar u topilmagan bo'lsa, u prototipning xususiyatlariga kiradi. Xuddi shu narsa usullarga ham tegishli.z