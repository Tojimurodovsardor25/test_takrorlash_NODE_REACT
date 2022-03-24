/*
---------------------------------------------------------------------
======================================= 3 - Bob 6 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Rekursiv funksiya --->> */

/* Vikipediya */

// Rekursiya (sifat: rekursiv) narsa o'zi yoki uning turi bo'yicha aniqlanganda paydo bo'ladi. Rekursiya turli xil fanlarda qo'llaniladi tilshunoslik ga mantiq. Rekursiyaning eng keng tarqalgan qo'llanilishi matematika va Kompyuter fanlari, qaerda a funktsiya belgilanishi o'z ta'rifi doirasida qo'llaniladi. Ko'rinib turibdiki, bu cheksiz sonli misollarni (funktsiya qiymatlari) aniqlasa-da, u ko'pincha hech qanday cheksiz pastadir yoki cheksiz zikrlar zanjiri yuzaga kelmaydigan tarzda amalga oshiriladi.

// Funktsiyalar orasida rekursiv funktsiyalarni alohida ajratib ko'rsatish mumkin. Ularning mohiyati shundaki, funktsiya o'zini o'zi chaqiradi.

// Masalan, sonning faktorialini aniqlaydigan funktsiyani ko'rib chiqing:

// function getFactorial(n){
//     if (n === 1){
//         return 1;
//     }
//     else{
         
//         return n * getFactorial(n - 1);
//     }
// }
// var result = getFactorial(4); 
// console.log(result); // 24

// getFactorial() funksiyasi, agar n parametri 1 ga teng bo'lsa, 1 qiymatini qaytaradi yoki getFactorial funksiyasi natijasini yana qaytarsa, unga n-1 qiymati uzatiladi. Masalan, 4 raqamidan o'tayotganda bizda quyidagi qo'ng'iroqlar zanjiri mavjud:

// var result = 4 * getFactorial(3);
// var result = 4 * 3 * getFactorial(2);
// var result = 4 * 3 * 2 * getFactorial(1);
// var result = 4 * 3 * 2 * 1; // 24

// Yana bir misolni ko'rib chiqing - Fibonachchi raqamlarining ta'rifi:

// function getFibonachi(n)
// {
//     if (n === 0){
//         return 0;
//     }
//     if (n === 1){
//         return 1;
//     }
//     else{
//         return getFibonachi(n - 1) + getFibonachi(n - 2);
//     }
// }
// var result = getFibonachi(8); //21 
// console.log(result); // 21