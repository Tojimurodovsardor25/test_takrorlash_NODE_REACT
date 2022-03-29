/*
---------------------------------------------------------------------
======================================= 4 - Bob 8 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Inkapsulyatsiya--->> */

// Inkapsulyatsiya ob'ektga yo'naltirilgan dasturlashning asosiy tushunchalaridan biri bo'lib, ob'ekt holatini tashqi tomondan to'g'ridan-to'g'ri kirishdan yashirishni anglatadi. Odatiy bo'lib, barcha ob'ekt xususiyatlari ochiq, foydalanish mumkin va biz ularga dasturning istalgan joyidan kirishimiz mumkin.

// function User(pName, pAge) {
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function () {
//         document.write("Isim: " + this.name + "; yoshi: " + this.age);
//     };
// };
// var tom = new User("Abdulloh", 20);
// tom.name = 34;
// console.log(tom.name);

// Lekin biz mahalliy o'zgaruvchilarni xossalarni qilish orqali ularni tashqi kirishdan yashirishimiz mumkin:

// function User(name, age) {
//     this.name = name;
//     var _age = age;
//     this.displayInfo = function () {
//         document.write("Isim: " + this.name + "; yoshi: " + _age + "<br>");
//     };
//     this.getAge = function () {
//         return _age;
//     }
//     this.setAge = function (age) {
//         if (typeof age === "raqam" && age > 0 && age < 110) {
//             _age = age;
//         } else {
//             console.log("Qiymat noto‘g‘ri");
//         }
//     }
// }

// var tom = new User("Abdulloh", 20);
// console.log(tom._age); // undefined - (aniqlanmagan) - _age - mahalliy o'zgaruvchi
// console.log(tom.getAge()); // 20
// tom.setAge(32);
// console.log(tom.getAge()); // 32
// tom.setAge("54"); // Qiymat noto‘g‘ri

// User - (Foydalanuvchi) konstruktori age xususiyati oʻrniga _age mahalliy oʻzgaruvchisini eʼlon qiladi. Qoidaga ko'ra, konstruktorlardagi mahalliy o'zgaruvchilarning nomlari pastki chiziq bilan boshlanadi.

// Foydalanuvchining yoshi bilan tashqi tomondan ishlash uchun ikkita usul aniqlanadi. getAge() usuli _age o'zgaruvchisining qiymatini olish uchun mo'ljallangan. Bu usul getter deb ham ataladi. Ikkinchi usul - setAge, uni sozlash (setter) deb ham ataladi, _age o'zgaruvchisining qiymatini belgilash uchun mo'ljallangan.

// Ushbu yondashuvning afzalligi shundaki, biz _age qiymatiga kirishni ko'proq nazorat qilamiz. Misol uchun, biz ba'zi hamroh bo'lgan shartlarni tekshirishimiz mumkin, chunki bu holda turdagi qiymat tekshiriladi (u raqamni ifodalashi kerak), qiymatning o'zi (yosh 0 dan kam bo'lishi mumkin emas).

