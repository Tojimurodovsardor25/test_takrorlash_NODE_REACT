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

// Anonim sinf ob'ektini yaratishga misol:

// const Person = class { }
// const tom = new Person();
// console.log(tom);

// Maydonlar va sinf xususiyatlari

// Maydonlar va xususiyatlar sinfdagi ob'ektning ma'lumotlarini yoki holatini saqlash uchun ishlatiladi.

// Shunday qilib, yuqorida shaxsni ifodalovchi Person sinfi aniqlandi. Insonning ism va yoshi kabi ajralib turadigan xususiyatlari bor. Ushbu ma'lumotlarni saqlash uchun Person sinfidagi maydonlarni belgilaymiz:

// class Person {
//     name;
//     age;
// }
// const tom = new Person();
// tom.name = "Abdulloh";
// tom.age = 20;
// console.log(tom.name);  // Abdulloh
// console.log(tom.age);   // 20

// Maydon ta'rifi aslida uning nomini ifodalaydi:

/*
name;
age;
*/

// Shunday qilib, shaxsning ismini saqlash uchun ism maydoni va yoshni saqlash uchun yosh maydoni mavjud.

// Sinf ob'ektini yaratgandan so'ng, biz ushbu maydonlarga kira olamiz. Buning uchun maydon nomi nuqta bilan ajratilgan ob'ekt nomidan keyin ko'rsatiladi:

// tom.name = "Tom";       // maydon qiymatini o'rnating
// console.log(tom.name);  // mulk qiymatini oling

// Yuqoridagi misolda sinf maydonlarini xossalar deb ham atash mumkin. Asosan, xususiyatlar sinfning tashqaridan kirish mumkin bo'lgan yoki umumiy maydonlarini ifodalaydi. Keyinchalik, biz maydonlar ommaviy bo'lmaganda, ya'ni tashqaridan kirish imkoni bo'lmaganda batafsil tahlil qilamiz. Ammo hozircha, mulklar va umumiy maydonlar bir va bir xil ekanligini tushunishga arziydi. Va yuqoridagi misolda ism va yosh maydonlarini xususiyatlar deb ham atash mumkin.


// Agar kerak bo'lsa, biz maydonlarga ba'zi boshlang'ich qiymatlarni belgilashimiz mumkin:

// class Person {
//     name = "nomalum";
//     age = 18;
// }
// const tom = new Person();
// console.log(tom.name);  // nomalum
// tom.name = "Abdulloh";
// console.log(tom.name);  // Abdulloh

// Sinfning xulq-atvori va usullar

// Ob'ekt holatini belgilaydigan ma'lumotlarni saqlashdan tashqari, sinf ob'ektning xatti-harakatini aniqlaydigan usullarga ega bo'lishi mumkin - ob'ekt bajaradigan harakatlar. Masalan, Person sinfida bir nechta usullarni aniqlaymiz:

// class Person {
//     name;
//     age;
//     move(place) {
//         console.log(`Bu yer ${place}`);
//     }
//     eat() {
//         console.log("Dars qiling");
//     }
// }
// const tom = new Person();
// tom.move("Kasalxona");   // Go to Hospital
// tom.move("Maktab");     // Go to Cinema
// tom.eat();              // Dars qiling

// Bu yerda shaxsning shartli harakatini ifodalovchi move() usuli aniqlanadi. Parametr sifatida usul odam boradigan joyni oladi. Ikkinchi usul, eat(), shartli oziqlanish jarayonini ifodalaydi.

// Sinf ichidagi maydonlar va usullarga kirish. this - so'zi

// Agar sinf usullarida sinf maydonlari yoki boshqa sinf usullariga murojaat qilmoqchi bo'lsak-chi? Bunday holda, maydon/xususiyat yoki usul nomidan oldin this kalit so'zi keladi, ayni holda joriy ob'ektga ishora qiladi.

// Masalan, ob'ekt haqidagi ma'lumotlarni aks ettiruvchi usulni aniqlaymiz:

// class Person {
//     name;
//     age;
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// const tom = new Person();
// tom.name = "Abdulloh";
// tom.age = 20;
// tom.print();    // Name: Abdulloh  Age: 20

// const bob = new Person();
// bob.name = "Mirjalol";
// bob.age = 20;
// bob.print();    // Name: Bob  Age: 20

// Konstruktor ta'rifi

// Konstruktor sinf ob'ektini yaratish uchun ishlatiladi:

// const bob = new Person();

// Sinflarda topilgan standart - (Odatiy, v.h.k) konstruktorni chaqirish aslida sinf bilan bir xil nomga ega bo'lgan va shu sinf ob'ektini qaytaradigan usulni chaqiradi.

// Ammo biz sinflarda o'z konstruktorlarimizni ham belgilashimiz mumkin:

// class Person {
//     name;
//     age;
//     constructor() {
//         console.log("Konstruktorni chaqirish - (konstruktorga murojat)");
//     }
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// const tom = new Person();   // Konstruktorni chaqirish
// const bob = new Person();   // Konstruktorni chaqirish

// Konstruktor konstruktor deb nomlangan usul bilan aniqlanadi. Aslida, bu parametrlarni qabul qilishi mumkin bo'lgan muntazam usul. Bunday holda, konstruktor shunchaki konsolga ba'zi xabarlarni chop etadi. Shunga ko'ra, chiziqni bajarayotganda

// const tom = new Person();

// Biz brauzer konsolida tegishli xabarni ko'ramiz

// Odatda, konstruktorning maqsadi ob'ektni ba'zi bir dastlabki ma'lumotlar bilan ishga tushirishdir:

// class Person {
//     name;
//     age;
//     constructor(personName, personAge) {
//         this.name = personName;
//         this.age = personAge;
//     }
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// const tom = new Person("Abdulloh", 20);
// tom.print();    // Name: Abdulloh  Age: 20
// const bob = new Person("Mirjalol", 20);
// bob.print()     // Name: Mirjalol  Age: 20

// Bu erda konstruktor ikkita parametrni oladi va ularning qiymatlarini sinf maydonlariga o'tkazadi. Shunga ko'ra, ob'ektni yaratishda biz ushbu parametrlar uchun mos qiymatlarni konstruktorga o'tkazishimiz mumkin:

// const tom = new Person("Abdulloh", 20);

// Shuni ta'kidlash kerakki, yuqoridagi misolda sinf maydonlarining ta'riflari ortiqcha. This orqali konstruktordagi maydonlarga murojaat qilish ularni belgilash bilan bir xil bo'ladi va bu holda biz maydonlarning ta'rifini olib tashlashimiz mumkin:

// class Person {

//     constructor(personName, personAge) {
//         this.name = personName;
//         this.age = personAge;
//     }
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// const tom = new Person("Abdulloh", 20);
// tom.print();    // Name: Abdulloh  Age: 20
// const bob = new Person("Mirjalol", 20);
// bob.print()     // Name: Mirjalol  Age: 20