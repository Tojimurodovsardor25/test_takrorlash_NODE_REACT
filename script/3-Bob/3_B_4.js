/*
---------------------------------------------------------------------
======================================= 3 - Bob 4 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Yopish va IIFE funktsiyalari--->> */

// Funktsiya natijani qaytarishi mumkin. Buning uchun return iborasidan foydalaning, shundan so'ng qaytarish qiymati ko'rsatiladi:

// Yopilish (yopish - closure) - bu bir doirada yaratilgan funktsiya o'z doirasidan tashqarida bajarilganda ham o'zining leksik muhitini eslab qoladigan konstruktsiyadir.

// Sxema texnik jihatdan uchta komponentni o'z ichiga oladi:

// ba'zi bir qamrovni belgilaydigan va ba'zi o'zgaruvchilar aniqlangan tashqi funktsiya - leksik muhitdir

// tashqi funktsiyada aniqlangan o'zgaruvchilar (leksik muhit).

// ushbu o'zgaruvchilardan foydalanadigan ichki funksiya

// function outer() {       // Tashqi funktsiya
//     var n;              // Ba'zi o'zgaruvchan
//     return inner(){     // Ichki funksiya
//         // o‘zgaruvchisi n bo‘lgan amallar
//     }
// }

// Eng oddiy misol yordamida yopilishni ko'rib chiqamiz:

// function outer() {
//     let x = 5;
//     function inner() {
//         x++;
//         console.log(x);
//     };
//     return inner;
// }
// let fn = outer();   // fn = inner,chunki outer funktsiya inner funktsiyani qaytaradi
// // Inner ichki funktsiyani chaqiramiz
// fn();   // 6
// fn();   // 7
// fn();   // 8

// Inner - Ichki --

// Outer - Tashqi --

// Bu yerda tashqi funksiya outer  ichki funksiya va x o‘zgaruvchisi aniqlangan doirani belgilaydi. X o'zgaruvchisi inner funksiya uchun leksik muhitni ifodalaydi. Inner  funktsiyaning o'zida biz x o'zgaruvchisini oshiramiz va uning qiymatini konsolga chop qilamiz. Oxirida outer  funksiya inner funksiyani qaytaradi.

// Keyin tashqi funktsiyani chaqiramiz:

// let fn = outer();

// outer funktsiya inner funktsiyani qaytarganligi sababli, fn o'zgaruvchisi inner funksiyaga havolani saqlaydi. Shu bilan birga, bu funktsiya o'z muhitini - ya'ni outer o'zgaruvchi x ni esladi.

// Keyinchalik, biz outer funktsiyani uch marta chaqiramiz va biz inner funktsiyadan tashqarida aniqlangan x o'zgaruvchisi ortib borayotganini ko'ramiz:

// fn();   // 6
// fn();   // 7
// fn();   // 8

/* 
Ya'ni, x o'zgaruvchisi ichki funktsiyadan tashqarida aniqlanganiga qaramay, bu funktsiya o'z muhitini eslab qoladi va o'zi aniqlangan tashqi funktsiyadan tashqarida chaqirilishiga qaramay, undan foydalanishi mumkin. Bu yopilishlarning mohiyati.
*/

// Keling, yana bir misolni ko'rib chiqaylik:

// function multiply(n){
//     var x = n;
//     return function(m){ return x * m;};
// }
// var fn1 = multiply(5);
// var result1 = fn1(6); // 30
// console.log(result1); // 30

// var fn2= multiply(4);
// var result2 = fn2(6); // 24
// console.log(result2); // 24

// Shunday qilib, bu erda multiply() funktsiyasiga qo'ng'iroq qilish natijasida boshqa ichki funktsiya chaqiriladi. Ichki funktsiya:

// function(m){ return x * m;};

// yaratilgan muhitni, xususan, x qiymatini eslaydi.

// Natijada, ko'paytirish funksiyasi chaqirilganda, fn1 o'zgaruvchisi aniqlanadi, bu yopilishdir, ya'ni u ikkita narsani birlashtiradi: funktsiya va funktsiya yaratilgan muhit. Muhit yopilish yaratilgan vaqtda ko'paytirish funksiyasi doirasida bo'lgan har qanday mahalliy o'zgaruvchidan iborat.

// Ya'ni, fn1 yopilish bo'lib, u ichki funksiya(m){ return x * m;} va yopilish yaratilgan vaqtda mavjud bo'lgan x o'zgaruvchisini o'z ichiga oladi.

// Ikkita yopishni yaratishda: fn1 va fn2, bu yopilishlarning har biri o'z muhitini yaratadi.

// Parametrlarda chalkashmaslik kerak. Yopishni belgilashda:

// var fn1 = multiply(5);

// 5 raqami ko'paytirish funksiyasiga n parametr sifatida beriladi.

// Ichki funktsiyani chaqirganda:

// var result1 = fn1(6);

// 6 raqami m parametri uchun ichki funktsiya funksiyasiga (m) uzatiladi{ qaytish x * m;};

// Biz yopilishni chaqirish uchun boshqa variantdan ham foydalanishimiz mumkin:

// function multiply(n){
//     var x = n;
//     return function(m){ return x * m;};
// }
// var result = multiply(5)(6); // 30
// console.log(result);

// O'z-o'zini chaqirish funktsiyalari

// Odatda, funktsiyaning ta'rifi uning chaqiruvidan ajratiladi: avval biz funktsiyani aniqlaymiz, keyin uni chaqiramiz. Lekin bu ixtiyoriy. Shuningdek, biz aniqlangandan so'ng darhol chaqiriladigan funktsiyalarni yaratishimiz mumkin. Bunday funktsiyalarni yana Immediately Invoked Function Expression (IIFE) - chaqirilgan funksiya ifodasi (IIFE) deb ham atashadi.


// (function () {
//     console.log("Salom dunyo");
// }());

// (function (n) {

//     var result = 1;
//     for (var i = 1; i <= n; i++)
//         result *= i;
//     console.log("Faktorial raqamlar " + n + " teng " + result);
// }(4));

/* Vikipediya */

/*
Faktorial (ing . factor — koʻpaytuvchi) — butun manfiy boʻlmagan sonlar uchun aniqlangan, amadsa teztez uchrab turadigan funksiya; p! kabi belgilanib, 1 dan p gacha hamma butun sonlarning koʻpaytmasiga teng , yaʼni i!=1*2*... *p. Qulaylik uchun 0!=1 deb olinadi. F!, ayniqsa, kombinatorikada koʻp uchraydi. Masalan, n oʻquvchini bitta qatorga tizishning usullari soni l! ga teng , p ortishi bilan p! funksiya juda tez oʻsadi. Ingliz matematik J. Stirling 1730-yili i! funksiyaning qiymatini taqribiy hisoblash uchun juda qulay formulani taklif qilgan (qarang Stirling formulasi):
*/

// Bunday funksiyalar qavslar ichiga olinadi va funksiya ta'rifidan so'ng parametrlar qavs ichiga olinadi.