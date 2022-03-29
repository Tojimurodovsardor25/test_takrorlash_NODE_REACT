/*
---------------------------------------------------------------------
======================================= 2 - Bob 6 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Massivlarga kirish --->> */

/*
Massivlar ma'lumotlar to'plami bilan ishlash uchun mo'ljallangan. Kvadrat qavslar [] massiv yaratish uchun ishlatiladi. Kvadrat qavslar ichida massivning elementlari aniqlanadi.
*/

/*
(Keyinroq massivlar haqidagi alohida bobda biz massivlar yaratish va umuman massivlar bilan ishlashning qo‘shimcha usullarini batafsilroq ko‘rib chiqamiz)
*/

// Eng oddiy massiv ta'rifi:

// const myArray = [];

/*
Bunday holda, biz myArray deb nomlangan massivni yaratamiz. U bo'sh, chunki kvadrat qavslar ichida hech qanday element belgilanmagan. Ammo siz unga dastlabki ma'lumotlarni ham qo'shishingiz mumkin:
*/

// const people = ["Tom", "Alice", "Sam"];
// console.log(people);    // ["Tom", "Alice", "Sam"];

// Bu holda myArray massivi uchta elementga ega bo'ladi. Grafik jihatdan uni quyidagicha ifodalash mumkin:

/*

0	Tom
1	Alice
2	Sam

*/

/* 
Indekslar massivning alohida elementlariga kirish uchun ishlatiladi. Hisob noldan boshlanadi, ya'ni birinchi elementning indeksi 0, oxirgisi esa 2 indeksiga ega bo'ladi:
*/

// Bundan tashqari, C# yoki Java kabi boshqa tillardan farqli o'laroq, siz dastlab o'rnatilmagan elementni o'rnatishingiz mumkin:

// const people = ["Tom", "Alice", "Sam"];
// console.log(people[7]); // undefined - в массиве только три элемента
// people[7] = "Bob";
// console.log(people[7]); // Bob

// Shuni ham ta'kidlash joizki, bir qator dasturlash tillaridan farqli o'laroq, JavaScript massivlari qattiq yozilmagan, bitta massiv har xil turdagi ma'lumotlarni saqlashi mumkin:

// const objects = ["Tom", 12, true, 3.14, false];
// console.log(objects);

/* ==================================== Ko'p o'lchovli massivlar --->> */

/* 
Massivlar bir o'lchovli yoki ko'p o'lchovli bo'lishi mumkin. Ko'p o'lchovli massivdagi har bir element alohida massiv bo'lishi mumkin. Yuqorida biz bir o'lchovli massivni ko'rib chiqdik, endi biz ko'p o'lchovli massivni yaratamiz:
*/

// const numbers1 = [0, 1, 2, 3, 4, 5 ]; // bir o'lchovli massiv
// const numbers2 = [[0, 1, 2], [3, 4, 5] ]; // ikki o'lchovli massiv

// Vizual ravishda ikkala massivni quyidagicha ko'rsatish mumkin:

// Bir o'lchovli massiv numbers1

//  [1][2][3][4][5]

// Boshqa ikki o'lchovli massivni ko'rib chiqing:

// const people = [
//     ["Tom", 25, false],
//     ["Bill", 38, true],
//     ["Alice", 21, false]
// ];

// console.log(people[0]); // ["Tom", 25, false]
// console.log(people[1]); // ["Bill", 38, true]

/* 
Shuningdek, biz topshiriqni bajarishimiz mumkin:
*/

// const people = [
//     ["Tom", 25, false],
//     ["Bill", 38, true],
//     ["Alice", 21, false]
// ];
// people[0][1] = 56; // alohida qiymat belgilang
// console.log(people[0][1]); // 56
 
// people[1] = ["Bob", 29, false]; // massivni tayinlang
// console.log(people[1][0]); // Bob

// Ko'p o'lchovli massivlarni yaratishda biz faqat ikki o'lchovli massivlar bilan cheklanmaymiz, balki katta o'lchamli massivlardan ham foydalanishimiz mumkin:

// const numbers = [];
// numbers[0] = []; // Endi numbers ikki o'lchovli massivdir
// numbers[0][0]=[]; // Endi numbers uch o'lchovli massivdir
// numbers[0][0][0] = 5; //uch o'lchovli massivning birinchi elementi 5 ga teng

// console.log(numbers[0][0][0]);