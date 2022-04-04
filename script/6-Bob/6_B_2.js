/*
---------------------------------------------------------------------
======================================= 6 - Bob 2 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Massivlar va spread - (tarqalish) operatori --->> */

// spread - (tarqalish) operatori (operator ...) massivni alohida qiymatlarga yoyish imkonini beradi. Buning uchun massiv oldiga ko'p nuqta - (uch nuqda kabi) nuqta qo'yiladi:

// Misol uchun:

/*
...massiv
*/

// Eng oddiy misol:

// const users = ["Abdulloh", "Sardor", "Mirjalol"];
// console.log(...users);  // Abdulloh Sardor Mirjalol

// Va ushbu operatorni qo'llash orqali biz bir massivni boshqa massivdagi qiymatlar bilan to'ldirishimiz mumkin:

// const users = ["Abdulloh", "Sardor", "Mirjalol"];
// console.log(users);     //  ["Abdulloh", "Sardor", "Mirjalol"]
// const people1 = [...users];
// const people2 = new Array(...users);
// const people3 = Array.of(...users);
// console.log(people1);     //  ["Abdulloh", "Sardor", "Mirjalol"]
// console.log(people2);     //  ["Abdulloh", "Sardor", "Mirjalol"]
// console.log(people3);     //  ["Abdulloh", "Sardor", "Mirjalol"]

// Massivlar birligi

// Spred operatoridan foydalanib, yangi massiv yaratishda unga bir vaqtning o'zida bir nechta massivlarning qiymatlarini o'tkazishingiz mumkin. Misol uchun:

// const men = ["Abdulloh", "Sardor", "Mirjalol"];
// const women = ["Go'zal", "Ramzy", "Mohichexra"];
// const people = [...men, "Toxir", ...women];

// console.log(people);     //  ["Abdulloh", "Sardor", "Mirjalol", "Toxir", "Go'zal", "Ramzy", "Mohichexra"]

// Bunday holda, man, women massivlaridan olingan qiymatlar people massiviga o'tkaziladi va qo'shimcha ravishda biz ushbu massivlarga kiritilmagan individual qiymatlarni qo'shimcha ravishda o'tkazishimiz mumkin.

// Funktsiya argumentlarini uzatish

// Xuddi shunday, siz qiymatlarni massivdan funktsiya parametrlariga o'tkazishingiz mumkin:

// const people = ["Abdulloh", "Sardor", "Mirjalol"];

// function print(first, second, third) {
//     console.log(first);
//     console.log(second);
//     console.log(third);
// }
// print(...people);
// // Abdulloh
// // Sardor
// // Mirjalol

// Bu holda print() funksiyasi uchta parametrni oladi. Funktsiyani chaqirishda ...people operatsiyasi people massivini ushbu funktsiya parametrlariga o'tkaziladigan alohida qiymatlarga ajratish imkonini beradi.

// Shuni ta'kidlash kerakki, bu funktsiyani chaqirganda massivni o'tkazish bilan bir xil emas:

// print(people);

// Bunday holda, butun massiv funksiyaning birinchi parametriga, first parametrga o'tkaziladi, qolganlari esa undefined - (aniqlanmagan) bo'ladi.

// Qiymatlarni massivdan parametrlarga o'tkazishning yana bir misoli:

// function sum(a, b, c) {
//     const d = a + b + c;
//     console.log(d);
// }
// sum(1, 2, 3);
// const nums = [4, 5, 6];
// sum(...nums);

// Ikkinchi holda, nums massividagi raqamlar funktsiyaga uzatiladi. Lekin faqat massivni emas, balki aynan shu massivdagi raqamlarni o'tkazish uchun tarqalish operatori (ellipsis - (ko'p nuqta yoki uch nuqta)...) ishlatiladi.

// Agar funktsiya parametrlari soni massiv elementlari sonidan kam bo'lsa, qolgan massiv elementlari shunchaki o'chiriladi. Agar parametrlar soni massiv elementlari sonidan ko'p bo'lsa, qiymatlari bo'lmagan parametrlar undefined - (aniqlanmagan) qilib o'rnatiladi:

// const people1 = ["Abdulloh", "Sardor", "Mirjalol", "Murod"];
// const people2 = ["Aziz", "Bekzod"];
// function print(first, second, third) {
//     console.log(`${first}, ${second}, ${third}`);
// }
// print(...people1);  // Abdulloh, Sardor, Mirjalol
// print(...people2);  // Aziz, Bekzod, undefined

// Massivlarni nusxalash

// spread - (operatori) bir massivning elementlarini boshqasiga nusxalashning eng oson usulini taqdim etadi. Biroq, bu erda ehtiyot bo'lish kerak. Bir misolni ko'rib chiqing:

// const people = ["Sardor", "Abdulloh", "Mirjalol"];
// const employees = [...people];
// employees[0] = "Teshavoy";
// console.log(employees);     // ["Teshavoy", "Abdulloh", "Mirjalol"]
// console.log(people);        //  ["Sardor", "Abdulloh", "Mirjalol"]

// Bu yerda ikkita massiv yaratilgan. Bunda odamlar massivining elementlari xodimlar massiviga uzatiladi. Keyinchalik, xodimlar massivining birinchi elementini o'zgartiramiz. Konsol chiqishidan biz bir massivni o'zgartirish boshqa massivga ta'sir qilmaganini ko'rishimiz mumkin.

// Biroq, ob'ektlar qatoridan nusxa olsak nima bo'ladi:

// const people = [{ name: "Sardor" }, { name: "Abdulloh" }, { name: "Mirjalol" }];
// const employees = [...people];
// //employees[0] = {name: "Teshavoy"};
// employees[0].name = "Teshavoy";
// console.log(employees);     //  [{name:"Teshavoy"}, {name:"Tom"}, {name:"Bob"}]
// console.log(people);        //  [{name:"Teshavoy"}, {name:"Tom"}, {name:"Bob"}]

// Endi people massivi ob'ektlar massivini taqdim etadi, bu erda har bir ob'ekt bitta xususiyatga ega - nom. Keyinchalik, birinchi elementdagi name xususiyatining qiymatini o'zgartiramiz.

// Va konsol chiqishi bizga bitta massivning o'zgarishi ikkinchi massivning o'zgarishiga olib kelganligini ko'rsatadi. Ob'ektlar mos yozuvlar turini ifodalaganligi sababli va yangi massivga nusxalashda ob'ektning nusxasi (satrlarda bo'lgani kabi) emas, balki ob'ektning o'zi uzatiladi. Shunday qilib, bitta massivning birinchi elementi va ikkinchi massivning birinchi elementi aslida bir xil ob'ektni ifodalaydi.

// const people = [{ name: "Sardor" }, { name: "Abdulloh" }, { name: "Mirjalol" }];
// const employees = [...people];
// employees[0] = { name: "Teshavoy" };
// console.log(employees);     //  [{name:"Teshavoy"}, {name:"Abdulloh"}, {name:"Mirjalol"}]
// console.log(people);        //  [{name:"Sardor"}, {name:"Abdulloh"}, {name:"Mirjalol"}]

// Bunday holda, xodimlar massivining birinchi elementi yangi ob'ektga havola bilan almashtiriladi, people massivining birinchi elementi esa eski ob'ektga havolani saqlab qoladi.