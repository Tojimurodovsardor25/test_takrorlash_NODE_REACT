/*
---------------------------------------------------------------------
======================================= 5 - Bob 1 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== OOP. Sinflar --->> */

// Sinflar

/*
ES2015 (ES6) standartining joriy etilishi bilan JavaScript-da ob'ektlarni aniqlashning yangi usuli - sinflar yordamida foydalanish. Sinf ob'ekt uning holati va xatti-harakatlarining tavsifini ifodalaydi, ob'ekt esa sinfning aniq - (batafsil) timsoli yoki misolidir.
*/

// Sinf ta'rifi

// class kalit so'zi sinfni aniqlash uchun ishlatiladi:


// class Person { }

// Class so'zidan keyin sinf nomi keladi (bu holda sinf Person deb ataladi), so'ngra sinfning tanasi jingalak qavs ichida aniqlanadi.

// Bu sinfni aniqlashning eng keng tarqalgan usuli. Ammo boshqa yo'llar ham bor. Shunday qilib, siz anonim sinfni ham belgilashingiz va uni o'zgaruvchiga yoki doimiyga belgilashingiz mumkin:

// const Person = class{}

// Aslida, biz anonim bo'lmagan sinfni ham yaratishimiz va uni o'zgaruvchiga yoki doimiy - (const)ga belgilashimiz mumkin:

// const User = class Person{}

// Ob'ektlarni yaratish

// Sinf - bu qandaydir ob'ekt yoki ob'ektning umumiy ko'rinishi. Ushbu tasvirning aniq - (batafsil) timsoli sinf ob'ektdir. Va sinf aniqlangandan so'ng, biz konstruktor yordamida sinf ob'ektlarini yaratishimiz mumkin:

// class Person { }

// const tom = new Person();
// const bob = new Person();

// Konstruktor yordamida ob'ekt yaratish uchun avvalo new kalit so'zi o'rnatiladi. Keyin to'g'ri konstruktor chaqiriladi - aslida sinf nomi bilan funktsiya chaqiradi. Odatiy bo'lgan sinflar bitta parametrsiz konstruktorga ega. Shuning uchun, bu holda, konstruktor chaqirilganda, unga hech qanday argumentlar berilmaydi.

// Shuni ta'kidlash kerakki, funktsiyalardan farqli o'laroq, sinfdan foydalanish uchun avval uni aniqlash kerak. Misol uchun, quyidagi kodda biz xatoga duch kelamiz, chunki biz sinfni aniqlashdan oldin foydalanishga harakat qilamiz:

// const tom = new Person();   // ! Xatolik - Uncaught ReferenceError: Cannot access 'Person' before initialization - (Boshlashdan oldin "Shaxs" ga kirish imkonsiz)

// class Person { }

// Agar sinf ta'rifi o'zgaruvchiga yoki doimiyga tayinlangan bo'lsa, biz sinf ob'ektlarini yaratish uchun ushbu o'zgaruvchi/const - (konstantalar, doimiy) nomidan foydalanishimiz mumkin:

// const User = class Person { }
// const tom = new User();
// console.log(tom);

// Yuqoridagi kodda, biz yangi User() chaqiruvidan foydalanayotgan bo'lsak ham, aslida yaratilgan ob'ekt Person sinfini ifodalaydi.
