/*
---------------------------------------------------------------------
======================================= 4 - Bob 6 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Ob'ekt konstruktorlari --->> */


// Yangi ob'ektlarni yaratishdan tashqari, JavaScript bizga konstruktorlar yordamida yangi turdagi ob'ektlarni yaratish imkoniyatini beradi. Shunday qilib, ob'ektni yaratishning bir usuli Object - (Ob'ekt) tipidagi konstruktordan foydalanishdir:

// var tom = new Object();

// tom o'zgaruvchisi yaratilgandan so'ng, u Object tipidagi ob'ekt kabi harakat qiladi.

// Konstruktor yangi turdagi ob'ektni aniqlash imkonini beradi. Tur - ob'ektning mavhum tavsifi yoki shablonidir. Quyidagi o'xshashlikni ham chizishingiz mumkin. Har birimiz inson haqida qandaydir tasavvurga egamiz - ikki qo'li, ikki oyog'i, boshi, ovqat hazm qilish tizimi, asab tizimi va boshqalar. Ba'zi shablon mavjud - bu shablonni tur deb atash mumkin. Haqiqatan ham mavjud bo'lgan shaxs bu turdagi ob'ektdir.

// Tur ta'rifi konstruktor funktsiyasi, usullari va xususiyatlaridan iborat bo'lishi mumkin.

// Birinchidan, konstruktorni aniqlaymiz:

// function User(pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.write("Abdulloh: " + this.name + "; yoshi: " + this.age + "<br/>");
//     };
// }

// Konstruktor oddiy funktsiyadir, faqat biz unda xususiyatlar va usullarni o'rnatishimiz mumkin. this kalit so'zi xususiyatlar va usullarni o'rnatish uchun ishlatiladi:

// this.name = pName;

// Bu holda ikkita xususiyat nomi va yoshi va bitta displayInfo usuli o'rnatiladi

// Qoida tariqasida, konstruktorlarning nomlari oddiy funktsiyalar nomlaridan farqli o'laroq, bosh harf bilan boshlanadi.

// Shundan so'ng, dasturda biz User tipidagi ob'ektni aniqlashimiz va uning xossalari va usullaridan foydalanishimiz mumkin:

// var tom = new User("Abdulloh", 20);
// console.log(tom.name); // Abdulloh
// tom.displayInfo();

// Konstruktorni chaqirish uchun, ya'ni User tipidagi ob'ektni yaratish uchun new kalit so'zidan foydalanish kerak.

// Xuddi shunday, biz boshqa turlarni aniqlashimiz va ularni birgalikda ishlatishimiz mumkin:

// // Avtomobil turidagi konstruktor
// function Car(mName, mYear) {
//     this.name = mName;
//     this.year = mYear;
//     this.getCarInfo = function () {
//         document.write("Model: " + this.name + " Chiqarilgan yili: " + this.year + "<br/>");
//     };
// };
// // User turidagi konstruktorr
// function User(pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.driveCar = function (car) {
//         document.write(this.name + " mashina haydash " + car.name + "<br/>");
//     };
//     this.displayInfo = function () {
//         document.write("Abdulloh: " + this.name + "; yoshi: " + this.age + "<br/>");
//     };
// };

// var tom = new User("Abdulloh", 20);
// tom.displayInfo();
// var bently = new Car("Ford", 2001);
// tom.driveCar(bently);

// instanceof operatori

// instanceof operatori ob'ekt qaysi konstruktor yordamida yaratilganligini tekshirish imkonini beradi. Agar ob'ekt ma'lum bir konstruktor yordamida yaratilgan bo'lsa, operator true qiymatini qaytaradi:

// var tom = new User("Abdulloh", 20);
// var isUser = tom instanceof User;
// var isCar = tom instanceof Car;
// console.log(isUser);    // true
// console.log(isCar);     // false