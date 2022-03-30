/*
---------------------------------------------------------------------
======================================= 4 - Bob 13 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== ? - (So'roq) Operatori --->> */

/*
Optional - ixtiyoriy, majburiy emas yoki majburiy bo'lmagan
*/

// ? Operatori. yoki optional o'zgartirish operatori ob'ektni va uning xossalari va usullarini null va undefined - (noaniq) bo'lganligini tekshirish imkonini beradi va agar ob'ekt yoki uning xususiyatlari/usullari aniqlangan bo'lsa, uning xususiyatlari yoki usullariga kirish kerak:

// let tom = null;
// let bob = { name: "Mirjalol" };

// function printName(person) {
//     console.log(person.name);
// }
// printName(tom); // Uncaught TypeError: Cannot read properties of null (reading "name")
// printName(bob);

// Bunday holda, tom o'zgaruvchisi null bo'ladi, shuning uchun u nom xususiyatiga ega emas. Shunga ko'ra, ushbu ob'ektni printName funksiyasiga o'tkazishda biz xatoga duch kelamiz. Bunday holda, ob'ektga kirishdan oldin null va undefined mavjudligini tekshirishimiz mumkin:

// let tom = null;
// let bob = { name: "Mirjalol" };

// function printName(person) {
//     if (person !== null && person !== undefined) console.log(person.name);
// }
// printName(tom);
// printName(bob); // Mirjalol

// Chekni qisqartirishimiz ham mumkin:

// function printName(person) {
//     if (person) console.log(person.name);
// }

// Agar person null yoki undefinedga teng bo'lsa, if(person) false qaytaradi

// Biroq, so'roq - ? operatori. yanada yaxshiroq - (nafis, chiroyliroq) yechim taklif qiladi:

// let tom = null;
// let bob = { name: "Mirjalol" };

// function printName(person) {
//     console.log(person?.name);
// }
// printName(tom); // undefined
// printName(bob); // Mirjalol

// Ob'ekt nomidan keyin so'roq - ? operatori ko'rsatiladi. - agar qiymat null va undefinedga teng bo'lmasa, nuqtaga kirishdan keyin ko'rsatilgan xususiyat/usul. Agar qiymat null/undefinedga teng bo'lsa, u holda xususiyat/usulga kirish imkoni bo'lmaydi. Va konsolda biz undefined ko'ramiz.

// Ushbu operator ob'ektning xususiyatlari va usullariga kirishdan oldin ishlatilishi mumkin:

// let tom = undefined;
// let bob = {
//     name: "Mirjalol",
//     sayHi() {
//         console.log(`Salom! men ${this.name}man`);
//     }
// };

// console.log(tom?.name); // undefined
// console.log(bob?.name); // Mirjalol
// tom?.sayHi();           // bajarilmagan yoki bajarilmayapti
// bob?.sayHi();           // Salom! men Mirjalolman

// Bunday holda, name - (nom, isim) xususiyatiga va sayHi() usuliga faqat tom va bob ob'ektlari null/undefined bo'lsagina kirish mumkin.\\

// Bundan tashqari, qo'ng'iroqlar zanjiri bo'ylab ob'ektda xususiyat yoki usul mavjudligini tekshiring.

// obj.val?.prop       // mulkni tekshirish
// obj.arr?.[index]    // massiv tekshiruvi
// obj.func?.(args)    // funktsiyani tekshirish

// Mulkni tekshirish

// Ob'ekt aniqlanishi mumkin, lekin xususiyatga ega emas:

// let tom = { name: "Abdulloh" };
// let bob = {
//     name: "Mirjalol",
//     company: {
//         title: "Microsoft"
//     }
// };

// console.log(tom.company?.title);    // undefined
// console.log(bob.company?.title);    // Microsoft

// Xuddi shunday, biz massiv sintaksisi yordamida ob'ektning xususiyatlariga kira olamiz:

// let tom = { name: "Abdulloh"};
// let bob = {
//     name: "Mirjalol",
//     company: {
//         title: "Microsoft"
//     }
// };

// console.log(tom.company?.["title"]);    // undefined
// console.log(bob.company?.["title"]);    // Microsoft

// Massiv xususiyatini tekshirish

// Xuddi shunday, biz massiv xususiyatining mavjudligini uning elementlariga kirishdan oldin tekshirishimiz mumkin:

// let tom = { name: "Abdulloh" };
// let bob = {
//     name: "Mirjalol",
//     languages: ["javascript", "typescript"]
// };

// console.log(tom.languages?.[0]);    // undefined
// console.log(bob.languages?.[0]);    // javascript

// Tekshirish usuli

// Ob'ektda chaqirilgan usul ham bo'lmasligi mumkin. Agar usul aniqlanmagan bo'lsa, aniqlanmagan usulga kirishda biz xatoga duch kelamiz, bu holda biz usul mavjudligini ham tekshirishimiz mumkin:

// let tom = { name: "Abdulloh" };
// let bob = {
//     name: "Mirjalol",
//     say(words) {
//         console.log(words);
//     }
// };

// console.log(tom.say?.("mening ismim Abdulloh"));   // undefined
// console.log(bob.say?.("mening ismim Mirjalol"));   // mening ismim Mirjalol

// Cheklar zanjiri

// ? So'roq operatori yordami bilan. qiymat null/undefinedligini ketma-ket tekshirib, tekshirish zanjirlarini yaratishing mumkin:

// let sam = { name: "Sardor" };
// let tom = {
//     name: "Abdulloh",
//     company: { title: "Google" }
// };
// let bob = {
//     name: "Mirjalol",
//     company: {
//         title: "Microsoft",
//         print() {
//             console.log(`Kompaniya ${this.title}`)
//         }
//     }
// };
// sam?.company?.print?.();    // chaqirilmayapti - company mulki yo'q
// tom?.company?.print?.();    // chaqirilmayapti - print usuli yo'q
// bob?.company?.print?.();    // Kompaniya Microsoft