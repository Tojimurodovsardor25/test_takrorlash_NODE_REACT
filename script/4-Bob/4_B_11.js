/*
---------------------------------------------------------------------
======================================= 4 - Bob 11 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== This - (bu) kalit so'zi --->> */

// Bu kalit so'zning xatti-harakati u ishlatilgan kontekstga va qat'iy yoki qat'iy bo'lmagan - (no qat'iy) rejimda qo'llanilishiga bog'liq.

// Global - (To'liq) kontekst - (Matin) va globalThis ob'ekti

// Global - (To'liq) kontekstda - (Matinda) this - (bu) global - (to'liq) ob'ektga ishora qiladi. JavaScript-da "global - (to'liq) ob'ekt" nima? Bu kod ishlaydigan muhitga bog'liq. Shunday qilib, veb-brauzerda this - (bu) window - (oyna) ob'ektini, brauzer oynasini ifodalovchi ob'ektni ifodalaydi. Node.js muhitida this - (bu) global - (to'liq) ob'ektni ifodalaydi. Veb-ishchilar uchun esa this - (bu) self - (o'zini) ob'ektni ifodalaydi.

// Masalan, veb-brauzerda quyidagi kodni ishga tushirganingda:

// console.log(this);

// biz quyidagi kabi konsol chiqishini olasan

/*

Window {window: Window, self: Window, document: document, name: "", location: Location, …}

*/

// globalThis ob'ektning ta'rifi ES2020 standartiga qo'shildi, bu senga kod bajarilayotgan muhit va vaziyatdan qat'iy nazar global - (to'liq) kontekst - (matin)ga murojaat qilish imkonini beradi:

// console.log(globalThis);

// Funktsiya kontekst (matin)i

// Funktsiya ichida this - (bu) tashqi kontekst - (matin)ga ishora qiladi. Global - (To'liq) kontekst - (matin)da aniqlangan funksiyalar uchun bu globalThis obyekti. Misol uchun:

// function foo(){
//     var bar = "bar2";
//     console.log(this.bar);
// }

// var bar = "bar1";

// foo();  // bar1

// Agar biz thisni ishlatmasak, qo'ng'iroq funktsiya ichida aniqlangan mahalliy o'zgaruvchiga o'tadi.

// function foo(){
//     var bar = "bar2";
//     console.log(this.bar);
// }

// var bar = "bar1";

// foo();  // bar1

// Agar biz buni ishlatmasak, qo'ng'iroq funktsiya ichida aniqlangan mahalliy o'zgaruvchiga o'tadi.

// function foo() {
//     var bar = "bar2";
//     console.log(bar);
// }

// var bar = "bar1";

// foo();  // bar2

// Ammo agar biz (strict mode) - (qattiq rejimdan) foydalansak, bu holda this - (bu) undefined - (aniqlanmagan) bo'ladi:

// "use strict";
// function foo(){
//     var bar = "bar2";
//     console.log(this.bar);
// }

// var bar = "bar1";

// foo();  // Xato - this - undefined

// Ob'ekt kontekst - (matn)i

// Ob'ekt kontekstida, shu jumladan uning usullarida this kalit so'zi bir xil ob'ektga ishora qiladi:

// var o = {
//     bar: "bar3",
//     foo: function(){
//         console.log(this.bar);
//     }
// }
// var bar = "bar1";
// o.foo();    // bar3

// Misollar

// Kel, murakkabroq misolni ko'rib chiqaylik:

// function foo() {
//     var bar = "bar2";
//     console.log(this.bar);
// }

// var o3 = { bar: "bar3", foo: foo };
// var o4 = { bar: "bar4", foo: foo };

// var bar = "bar1";

// foo();  // bar1
// o3.foo();   // bar3
// o4.foo();   // bar4

// Bar bu yerda Global - (To'liq) belgilangan o'zgaruvchidir . Shuningdek, mahalliy belgilangan bar o'zgaruvchi foo funktsiyasida aniqlanadi. Foo funksiyasida qaysi o'zgaruvchining qiymati ko'rsatiladi? foo funktsiyasi global - (to'liq) o'zgaruvchining qiymatini chiqaradi, chunki bu script qat'iy bo'lmagan rejimda ishlaydi, ya'ni foo funktsiyasidagi this kalit so'zi tashqi kontekst - (matin)ga ishora qiladi.

// Aks holda, vaziyat ob'ektlar bilan bog'liq. Ular o'zlarining bar mulklari mavjud bo'lgan o'zlarining kontekstlarini belgilaydilar. Va foo usuli chaqirilganda, funktsiyaning tashqi kontekst - (matn)i o3 va o4 ob'ektlarining kontekst - (matn)i bo'ladi.

// Bu xatti-harakat alohida holatlarda ba'zi tushunmovchiliklarga olib kelishi mumkin. Shunday qilib, kel, boshqa vaziyatni ko'rib chiqaylik:

// var o1 = {
//     bar: "bar1",
//     foo: function () {
//         console.log(this.bar);
//     }
// }
// var o2 = { bar: "bar2", foo: o1.foo };

// var bar = "bar3";
// var foo = o1.foo;

// o1.foo();   // bar1
// o2.foo();   // bar2
// foo();      // bar3

// Garchi o2 ob'ekti o1 ob'ektidan foo usulini ishlatsa ham, o1.foo funktsiyasi tashqi kontekst - (matin)da, ya'ni o2 ob'ekti kontekst - (matin)da this.bar qiymatini qidiradi. Va o2 ob'ektida bu qiymat barga teng: "bar2".

// Xuddi shu narsa o1.foo usuli bilan bir xil funktsiyaga ishora qiluvchi global o'zgaruvchan foo uchun ham amal qiladi. Bu holda this.bar qiymati tashqi kontekst - (matin)da, ya'ni var bar = "bar3" o'zgaruvchisi aniqlangan global kontekst - (matin)da ham qidiriladi.

// Ammo, agar funktsiyani boshqa funktsiyadan chaqirsak, chaqirilgan funksiya tashqi kontekst - (matin)dan ham foydalanadi:

// var bar = "bar2";

// function daz() {
//     var bar = "bar5";
//     function maz() {

//         console.log(this.bar);
//     }
//     maz();
// }
// daz();  // bar2

// Bu yerda daz funksiyasi tashqi kontekst - (matin)dagi satr oʻzgaruvchisining qiymatini this.bar sifatida ishlatadi, yaʼni global satr oʻzgaruvchisining qiymati. maz funksiyasi tashqi kontekst - (matin)dagi satr o‘zgaruvchisining qiymatini this.bar sifatida ham ishlatadi va bu tashqi daz funksiyasidan this.bar qiymati bo‘lib, u o‘z navbatida global o‘zgaruvchilar satrining qiymatini ifodalaydi. Shunday qilib, konsol "bar5" o'rniga "bar2" bilan tugaydi.

// Aniq bog'lash

// Call() va apply() usullaridan foydalanib, siz funktsiyani aniq kontekst - (matin)ga bog'lashingiz mumkin:

// function foo() {
//     console.log(this.bar);
// }

// var o3 = { bar: "bar3" }
// var bar = "bar1";
// foo();  // bar1
// foo.apply(o3);  // bar3
// // yoki
// // foo.call(o3);

// Ikkinchi holda, foo funksiyasi uning kontekst - (matin)ni belgilaydigan o3 ob'ektiga bog'langan. Shuning uchun, ikkinchi holatda, konsol "bar3" ni ko'rsatadi.

// Bind - (Bog'lash , bog'ich yoki o'rash) usuli

// f.bind(o) usuli f bilan bir xil tanasi va qamroviga ega, lekin o ob'ektga bog'langan yangi funksiya yaratish imkonini beradi:

// function foo() {
//     console.log(this.bar);
// }

// var o3 = { bar: "bar3" }
// var bar = "bar1";
// foo();  // bar1
// var func = foo.bind(o3);
// func(); // bar3

// This va o'q funktsiyalari

// O'q funktsiyalarida this orqali o'tgan ob'ekt o'q funktsiyasi belgilangan asosiy kontekst - (matin)dan olinadi. Quyidagi misolni ko'rib chiqing:

// const person = {
//     name: "Abdulloh",
//     say: () => console.log(`Mening ismim  ${this.name}`)
// }
// person.say();   // Mening ismim

// Bu yerda say() oʻq funksiyasi this.name baʼzi xossalariga kirmoqda, lekin bu yerda nimani anglatadi? O'q funksiyasi aniqlangan tashqi kontekst - matin uchun - ya'ni ob'ekt matini uchun bu global - (to'liq) ob'ektni (brauzer oynasi ob'ekti) ifodalaydi. Biroq, global - (to'liq) o'zgaruvchining nomi aniqlanmagan, shuning uchun konsolga chiqish quyidagicha bo'ladi:

// Mening ismim

// Endi misolni biroz o'zgartiramiz:

// const person = {
//     name: "Abdulloh",
//     hello() {
//         console.log("Salom");
//         let say = () => console.log(`Mening ismim ${this.name}`);
//         say();
//     }
// }
// person.hello();

// Ok funksiyasi endi hello() usulida aniqlangan. this - (bu) usuli uchun aniqlangan joriy  person - (shaxs) ob'ektini ifodalaydi. Shuning uchun, o'q funksiyasida bu shaxs ob'ektini, this.name esa ob'ekt nomi xususiyatini ifodalaydi. Shunday qilib, dasturni ishga tushirganimizda, biz quyidagilarni olamiz:

/*

Salom
Mening ismim Abdulloh

*/

// Bunga qaramay, this bilan ishlashda o'q funksiyalari tashvish bo'lishi mumkin

// shu bilan birga, ular bir qator muammolarni hal qilishlari mumkin. Shunday qilib, bir nechta kontekst - (matin)inlar bilan ishlashda biz o'zgaruvchining qaysi kontekst - (matin)inda aniqlanishini hisobga olishimiz kerak. Masalan, quyidagi kodni oling:

// const school = {
//     title: "Najot ta'lim markazi",
//     courses: ["JavaScript", "TypeScript", "Java", "Go"],
//     printCourses: function () {
//         this.courses.forEach(function (course) {
//             console.log(this.title, course);
//         })
//     }
// }
// school.printCourses();

// PrintCourses funksiyasi massivdagi barcha kurslar bo‘ylab takrorlanadi va chop etilganda ularga sarlavha xususiyati qiymati bilan prefiks qo‘yadi. Biroq, dasturni ishga tushirganimizda konsolda biz quyidagilarni ko'ramiz:

/*
undefined "JavaScript"
undefined "TypeScript"
undefined "Java"
undefined "Go"
*/

// Biz this.title aniqlanmaganligini ko'rishimiz mumkin, chunki bu ob'ekt kontekst - (matin)i global - (to'liq) kontekst - (matin) bilan almashtirilgan. Bunday holda, biz this.title yoki ob'ektning butun kontekst - (matin)ga o'xshash qiymatni o'tkazishimiz kerak.

// const school = {
//     title: "Najot ta'lim markazi",
//     courses: ["JavaScript", "TypeScript", "Java", "Go"],
//     printCourses: function () {
//         const that = this;
//         this.courses.forEach(function (course) {
//             console.log(that.title, course);
//         })
//     }
// }
// school.printCourses();

// O'q funksiyalari ham bu muammoni hal qiladi:

// const school = {
//     title: "Najot ta'lim markazi",
//     courses: ["JavaScript", "TypeScript", "Java", "Go"],
//     printCourses: function () {
//         this.courses.forEach((course) => console.log(this.title, course))
//     }
// }
// school.printCourses();

// Bu holda o'q funktsiyasi uchun kontekst school ob'ektining kontekst - (matin)i bo'ladi. Shunga ko'ra, biz funktsiyaga ma'lumotlarni uzatish uchun qo'shimcha o'zgaruvchilarni aniqlashimiz kerak.