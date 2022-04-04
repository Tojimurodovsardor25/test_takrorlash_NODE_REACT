/*
---------------------------------------------------------------------
======================================= 6 - Bob 1 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Massivlar --->> */

// Massiv va massiv obyektini yaratish

// Massivlar JavaScript-da ma'lumotlar to'plamini saqlash uchun ishlatiladi. JavaScript-dagi massivlar Array obyekti bilan ifodalanadi. Massiv obyekti massiv va uning elementlarini boshqarishimiz mumkin bo‘lgan bir qancha xususiyatlar va usullarni taqdim etadi.

// Massiv yaratish

// Kvadrat qavslar yoki Array konstruktori yordamida bo'sh massiv yaratishingiz mumkin:

// const users = new Array();
// const people = [];

// console.log(users); // Array[0]
// console.log(people); // Array[0]

// Siz darhol bir qator elementlarga ega massivni ishga tushirishingiz mumkin:

// const users = new Array("Abdulloh", "Bekzod", "Ramziy");
// const people = ["Sardor", "Abduraxmon", "Go'zal"];

// console.log(users); // ["Abdulloh", "Bekzod", "Ramziy"]
// console.log(people); // ["Sardor", "Abduraxmon", "Go'zal"]

// Massivlarni ishga tushirishning yana bir usuli Array.of() usulidir - u elementlarni oladi va ular bilan massivni ishga tushiradi:

// const people = Array.of("Abdulloh", "Bekzod", "Sardor");
// console.log(people); // ["Abdulloh", "Bekzod", "Sardor"]

// Siz massivni belgilashingiz va unga yangi elementlarni kiritishingiz mumkin:

// const users = [];
// users[1] = "Abdulloh";
// users[2] = "Go'zal";
// console.log(users[1]); // "Abdulloh"
// console.log(users[0]); // undefined

// Sukut bo'yicha massiv nol uzunlik bilan yaratilganligi muhim emas. Indekslar yordamida biz massivdagi ma'lum bir indeks o'rniga u yoki bu elementni almashtirishimiz mumkin.

// Array.from

// Va boshqa yo'l Array.from() funktsiyasi bilan ifodalanadi. U juda ko'p variantlarga ega, eng keng tarqalganini ko'rib chiqing:

// Array.from(arrayLike)
// Array.from(arrayLike, function mapFn(element) {  })
// Array.from(arrayLike, function mapFn(element, index) {  })

// Birinchi parametr sifatida arrayLike funksiyasi nisbatan “massivga o‘xshab ketadigan”, ya’ni elementlar to‘plami sifatida ko‘rsatilishi mumkin bo‘lgan obyektni oladi. Bu boshqa massiv bo'lishi mumkin, u asosan belgilar to'plamini ta'minlaydigan satr bo'lishi mumkin. Umuman olganda, massivga aylantirilishi mumkin bo'lgan ba'zi elementlar to'plami. Bundan tashqari, bu uzunlik xususiyati aniqlangan ba'zi bir ob'ekt bo'lishi mumkin. Misol uchun:

// const array = Array.from("Hello");
// console.log(array); // ["H", "e", "l", "l", "o"]

// Bunda funksiyaga satr uzatiladi va massiv qaytariladi, uning har bir elementi shu qatordagi belgilardan birini ifodalaydi.

// Ikkinchi parametr sifatida birinchi parametr orqali to'plamning joriy elementini qabul qiladigan va uni o'zgartirishning qandaydir natijasini qaytaradigan transformatsiya funktsiyasi o'tkaziladi. Misol uchun:

// const numbers = [1, 2, 3, 4];
// const array = Array.from(numbers, n => n * n);
// console.log(array); // [1, 4, 9, 16]

// Bunda Array.from() funksiyasiga raqamlar massivi uzatiladi. Ikkinchi parametr funksiya (bu holda lambda ifodasi uning rolini bajaradi) ushbu massivdagi har bir raqam uchun ishga tushiriladi va bu raqamni n parametr orqali oladi. Lambda ifodasining o'zida biz bu raqamning kvadratini qaytaramiz. Natijada, Array.from() yangi massivni qaytaradi, u raqamlar massividagi raqamlar kvadratlarini o'z ichiga oladi.

// Array.from() funksiyasining yana bir versiyasi ikkinchi parametr sifatida konvertatsiya funksiyasini oladi, unga takrorlangan to‘plamdagi elementdan tashqari ushbu elementning indeksi ham uzatiladi: Array.from(arrayLike, function mapFn). (element, indeks) { ... }) . Biz ushbu versiyadan foydalanamiz va funktsiyaga length xususiyatiga ega ob'ektni o'tkazamiz:

// const array = Array.from({ length: 3 }, (element, index) => {
//     console.log(element);   // undefined
//     return index;
// });
// console.log(array); // [0, 1, 2]

// Bu yerda uzunlik xossasi 3 ga teng boʻlgan obyekt funksiyaga uzatiladi. Array.from funksiyasi uchun bu qaytarilgan massiv uchta elementga ega boʻlishi kerakligi haqidagi signal boʻladi. Ikkinchi parametrdan konvertatsiya funktsiyasi to'plamning elementini (element parametri) olishi muhim emas - bu holda u har doim aniqlanmagan bo'ladi, ammo uzunligi: 3 qiymati qaytarilgan massivda uchta elementga ega bo'lishini ko'rsatadi. mos ravishda 0 dan 2 gacha bo'lgan indekslar Va transformatsiya funktsiyasining ikkinchi parametri - indeks parametri orqali biz elementning joriy indeksini olishimiz mumkin.

// Biroq, biz indekslar xususiyat nomlari sifatida ishlatiladigan ob'ektga o'tishimiz mumkin. Bunday holda, ob'ekt massivga o'xshash ob'ektga aylanadi, uni takrorlash mumkin:

// const array = Array.from({ length: 3, "0": "Abdulloh", "1": "Sardor", "2": "Mirjalol" }, (element) => {
//     console.log(element);
//     return element;
// });
// console.log(array); // ["Abdulloh", "Sardor", "Mirjalol"]

// length

// Massiv uzunligini bilish uchun length xususiyatidan foydalaning:

// const fruit = [];
// fruit[0] = "olma";
// fruit[1] = "nok";
// fruit[2] = "olxo'ri";

// console.log("Massivda fruit ", fruit.length, " Qiymat bor");
// for (let i = 0; i < fruit.length; i++)
//     console.log(fruit[i]);

// Darhaqiqat, massivning uzunligi oxirgi elementning indeksi plyus bitta bo'ladi. Misol uchun:

// const users = []; // massivda 0 qiymatlar
// users[0] = "Abdulloh";
// users[1] = "Go'zal";
// users[4] = "Sardor";
// for (let i = 0; i < users.length; i++)
//     console.log(users[i]);

// Brauzerga chiqishi:

/*
Abdulloh
Go'zal
undefined
undefined
Sardor
*/

// Biz 2 va 3 indekslar uchun elementlarni qo'shmaganimizga qaramay, bu holda massiv uzunligi 5 raqami bo'ladi. Faqat 2 va 3 indeksli elementlar aniqlanmagan qiymatga ega bo'ladi.