/*
---------------------------------------------------------------------
======================================= 4 - Bob 5 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Funktsiyalardagi ob'ektlar --->> */

// Funktsiyalar qiymatlarni qaytarishi mumkin. Ammo bu qiymatlar ibtidoiy ma'lumotlarni - raqamlarni, satrlarni ifodalashi shart emas, balki murakkab ob'ektlar ham bo'lishi mumkin.

// Masalan, foydalanuvchi ob'ektini yaratishni alohida funktsiyaga o'tkazamiz:

// function createUser(pName, pAge) {
//     return {
//         name: pName,
//         age: pAge,
//         displayInfo: function () {
//             document.write("Ism: " + this.name + " yoshi: " + this.age + "<br/>");
//         }
//     };
// };
// var tom = createUser("Abdulloh", 20);
// tom.displayInfo();
// var alice = createUser("Hadicha", 20);
// alice.displayInfo();

// Bu erda createUser() funktsiyasi pName va pAge qiymatlarini oladi va ulardan yangi ob'ektni yaratadi, bu qaytarilgan natijadir.

// Ob'ekt yaratishni funktsiyaga o'tkazishning afzalligi shundaki, biz bir xil turdagi bir nechta ob'ektlarni turli qiymatlarga ega bo'lishimiz mumkin.

// Bundan tashqari, ob'ekt funksiyaga parametr sifatida o'tkazilishi mumkin:

// function createUser(pName, pAge) {
//     return {
//         name: pName,
//         age: pAge,
//         displayInfo: function () {
//             document.write("Ism: " + this.name + " yoshi: " + this.age + "<br/>");
//         },
//         driveCar: function (car) {
//             document.write(this.name + " mashina haydash" + car.name + "<br/>");
//         }
//     };
// };

// function createCar(mName, mYear) {
//     return {
//         name: mName,
//         year: mYear
//     };
// };
// var tom = createUser("Abdulloh", 20);
// tom.displayInfo();
// var bently = createCar("Ford", 2001);
// tom.driveCar(bently);

// Bu yerda foydalanuvchilar va mashina obyektini yaratish uchun ikkita funksiyadan foydalaniladi. Foydalanuvchi obyektining driveCar() usuli parametr sifatida avtomobil obyektini oladi.

// Natijada, brauzer quyidagilarni ko'rsatadi:

/* 

Имя: Abdulloh yoshi: 20
Abdulloh mashina haydash Ford

*/