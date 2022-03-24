/* 
---------------------------------------------------------------------
======================================= 3 - Bob 2 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Funktsiya natija --->> */

// Funktsiya natijani qaytarishi mumkin. Buning uchun return iborasidan foydalaning, shundan so'ng qaytarish qiymati ko'rsatiladi:

// function menu(n) {

//     if (n == 1) return function (x, y) { return x + y; }
//     else if (n == 2) return function (x, y) { return x - y; }
//     else if (n == 3) return function (x, y) { return x * y; }
//     return function () { return 0; }
// }

// const action = menu(1);         // birinchi elementni tanlang - qo'shish
// const result = action(2, 5);    // funktsiyani bajaramiz va natijani const o'zgarmasda olamiz
// console.log(result);

// Xuddi shunday, biz yana bir qaytarish funktsiyasini olishimiz mumkin:

// function menu(n) {

//     if (n == 1) return function (x, y) { return x + y; }
//     else if (n == 2) return function (x, y) { return x - y; }
//     else if (n == 3) return function (x, y) { return x * y; }
//     return function () { return 0; };
// }

// let action = menu(1);
// console.log(action(2, 5));          // 7

// action = menu(2);
// console.log(action(2, 5));          // -3

// action = menu(3);
// console.log(action(2, 5));          // 10

// action = menu(190);
// console.log(action(2, 5));          // 0