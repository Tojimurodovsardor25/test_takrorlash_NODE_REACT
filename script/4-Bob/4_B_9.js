/*
---------------------------------------------------------------------
======================================= 4 - Bob 9 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Funksiya huddi obyekt sifatida yoki kabi. Call va apply usullari --->> */

// JavaScript-da funktsiya ham ob'ekt - Function ob'ekti bo'lib, shuningdek, prototipi, xususiyatlari, usullariga ega. Dasturda foydalaniladigan barcha funksiyalar Funktsiya ob'ektlari bo'lib, uning barcha xossalari va usullariga ega.

// Masalan, Function konstruktor yordamida funksiya yaratishimiz mumkin:
/*
var square = new Function('n', 'return n * n;');
console.log(square(5));
 */
// Funktsiya konstruktoriga bir qancha parametrlarni o'tkazish mumkin. Oxirgi parametr satr sifatidagi funktsiya tanasining o'zi. Aslida satr javascript kodini o'z ichiga oladi. Oldingi argumentlar parametr nomlarini o'z ichiga oladi. Bunda bitta n parametrga ega bo'lgan sonni kvadratga solish funksiyasi aniqlanadi.


// Function ob'ektining xususiyatlariga quyidagilar kiradi:

/* 

arguments - (argumentlar): funktsiyaga uzatiladigan argumentlar massivi

length - (uzunlik): funktsiya kutgan argumentlar sonini belgilaydi

caller - (qo'ng'iroq qiluvchi): hozirda bajarilayotgan funktsiyani chaqirgan funktsiyani belgilaydi

name - (ism): funktsiya nomi yoki ismi

prototype - (prototip): funktsiya prototipi

*/

// Prototip yordamida biz qo'shimcha xususiyatlarni aniqlashimiz mumkin:

function display() {

    console.log("Salom dunyo");
}
Function.prototype.program = "Hello";

console.log(display.program); // Hello

// Usullar orasida call() va apply() usullarini qayd etish lozim.

// Call() usuli belgilangan qiymat va argumentlarga ega funktsiyani chaqiradi:

function add(x, y) {

    return x + y;
}
var result = add.call(this, 3, 8);

console.log(result); // 11

// this - (bu) funksiya chaqiriladigan ob'ektga ishora qiladi - bu holda global window - (oyna) ob'ekti. this dan so'ng, parametrlar uchun qiymatlar o'tkaziladi yoki yuboriladi.

// Ob'ektni birinchi parametr orqali o'tkazishda biz unga this kalit so'zi orqali murojaat qilishimiz mumkin:

function User(name, age) {
    this.name = name;
    this.age = age;
}
var tom = new User("Abdulloh", 26);
function display() {
    console.log("Sizning ismingiz: " + this.name);
}
display.call(tom); // Sizning ismingiz: Abdulloh

// Bunday holda, faqat bitta qiymat o'tkaziladi, chunki displey funktsiyasi hech qanday parametrlarni olmaydi. Ya'ni, funktsiya tom ob'ektida chaqiriladi

// Agar bizga funktsiya chaqiriladigan ob'ekti muhim bo'lmasa, biz nullni qo'yishimiz mumkin:

function add(x, y) {

    return x + y;
}
var result = add.call(null, 3, 8);

console.log(result); // 11

// Call() usuli apply() usuliga o'xshaydi, u ham funktsiyani chaqiradi va birinchi parametr sifatida funksiya chaqiriladigan ob'ektni qabul qiladi. Faqat endi argumentlar massivi ikkinchi parametr sifatida uzatiladi

function add(x, y) {

    return x + y;
}
var result = add.apply(null, [3, 8]);

console.log(result); // 11