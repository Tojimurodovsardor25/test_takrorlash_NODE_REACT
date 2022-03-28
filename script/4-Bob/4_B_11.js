/*
---------------------------------------------------------------------
======================================= 4 - Bob 11 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== This - (bu) kalit so'zi --->> */

//Bu kalit so'zning xatti-harakati u ishlatilgan kontekstga va qat'iy yoki qat'iy bo'lmagan - (no qat'iy) rejimda qo'llanilishiga bog'liq.

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

// Keling, murakkabroq misolni ko'rib chiqaylik:

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