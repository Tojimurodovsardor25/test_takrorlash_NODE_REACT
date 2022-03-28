/*
OGOHLANTIRISH 2_B_4 Tushunchasi quyidagicha 2 - Bob 4 - dars. Ma'roqli dars! :)
*/

/*
---------------------------------------------------------------------
======================================= 2 - Bob 4 - dars ---> Start :)
---------------------------------------------------------------------
*/

// Siz atamsi - Senga o'zgardi...

/* ==================================== Shartli operatorlar ?: va ?? --->> */

/*
Shartli bayonotlar ma'lum bir shartni tekshirish va tekshirish natijasiga qarab, muayyan harakatlarni bajarish imkonini beradi. Bu erda operator ?: yoki uchlik operator deb ataladigan va ?? operatsiyasini ko'rib chiqamiz.
*/

// --- Uchlik operatsiya --->

// [birinchi operand - shart]? [ikkinchi operand]: [uchinchi operand]
/*
Birinchi operanddagi shartga qarab, uchlik operatsiya ikkinchi yoki uchinchi operandni qaytaradi. Agar birinchi operanddagi shart rost bo'lsa, ikkinchi operand qaytariladi; agar shart noto'g'ri bo'lsa, uchinchisi. Misol uchun:
*/

// const a = 1;
// const b = 2;
// const result = a < b ? a : b;
// console.log(result); // 1

/*
Bu yerda birinchi operand keyingi a < b shartni ifodalaydi. Agar a doimiyning qiymati b doimiysi qiymatidan kichik bo'lsa, ikkinchi operand qaytariladi - a, ya'ni doimiy natija a ga teng bo'ladi.
*/

/*
Agar a doimiysining qiymati b doimiy qiymatidan katta yoki unga teng bo'lsa, uchinchi operand qaytariladi - b, shuning uchun doimiy natija b qiymatiga teng bo'ladi.
*/

/*
Ifodalar operand sifatida ham harakat qilishi mumkin:
*/

// const a = 1;
// const b = 2;
// const result = a < b ? a + b : a - b;
// console.log(result); // 3

/*
Ushbu kod misolida birinchi operand avvalgi misoldagi kabi shartni ifodalaydi, lekin ikkinchi va uchinchi operandlar arifmetik amallarni ifodalaydi. Agar a doimiyning qiymati b doimiysi qiymatidan kichik bo'lsa, u holda ikkinchi operand qaytariladi - a + b. Shunga ko'ra, natija konstantasi a va b yig'indisiga teng bo'ladi.
*/

/*
Agar a doimiysining qiymati b doimiysi qiymatidan katta yoki unga teng bo'lsa, uchinchi operand a - b qaytariladi. Shunga ko'ra, doimiy natija a va b o'rtasidagi farqga teng bo'ladi.
*/

/*
========== --- Operator?? --- =========
*/

/*
Operator ?? (nullish coalescing operatori) null va undefined uchun qiymatni tekshirish imkonini beradi. U ikkita operandni qabul qiladi:
*/
/*
chap_operand ?? o'ng_operand
*/

/*
Operator chap operandning qiymatini qaytaradi, agar u null EMAS va aniqlanmagan bo'lsa. Aks holda, to'g'ri operandning qiymati qaytariladi. Misol uchun:
*/

// const result1 = "hello" ?? "world";
// console.log(result1);   // hello

// const result2 = 0 ?? 5;
// console.log(result2);   // 0

// const result3 = "" ?? "javascript";
// console.log(result3);   // "" - bo'sh qator

// const result4 = false ?? true;
// console.log(result4);   // false

// const result5 = null ?? "not null";
// console.log(result5);   // not null

// const result6 = undefined ?? "defined";
// console.log(result6);   // defined

// let message = null;
// const hello = "Hi JavaScript";
// const result7 = message ?? hello;
// console.log(result7);   // Hi JavaScript

/*
 ===----- >> Operator =??
*/

/*
Operator?? , ??= operatori koʻrinishidagi modifikatsiyaga ega boʻlib, u ham null va undefined uchun qiymatni tekshirish imkonini beradi. U ikkita operandni oladi:
*/

/*
chap_operand ?? = o'ng_operand
*/

/*
Agar chap operand null va aniqlanmagan bo'lsa, u holda unga o'ng operandning qiymati beriladi. Aks holda, chap operand o'z qiymatini saqlab qoladi. Misol uchun:
*/

// let message = "Welcome to JavaScript";
// let text = "Hello work!"
// text ??= message;
// console.log(text);  // Hello work!

/*
Bu erda matn o'zgaruvchisi null yoki aniqlanmagan, shuning uchun u o'z qiymatini saqlab qoladi. Teskari misol:
*/

// let message = "Welcome to JavaScript";
// let text = null;
// text ??= message;
// console.log(text);  // Welcome to JavaScript

/* 
Bu erda matnli o'zgaruvchi null, shuning uchun u ??= operatori orqali xabar o'zgaruvchisining qiymatini oladi.
*/