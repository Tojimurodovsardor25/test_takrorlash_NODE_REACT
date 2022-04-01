/*
---------------------------------------------------------------------
======================================= 5 - Bob 3 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Statik maydonlar va usullar --->> */

// Odatdagi maydonlar va usullardan tashqari, sinf statik maydonlar va usullarni belgilashi mumkin. Oddiy maydonlar/xususiyatlar va usullardan farqli o'laroq, ular bitta ob'ektga emas, balki butun sinfga tegishli.

// Statik maydonlar

// Statik maydonlar bitta ob'ektni emas, balki butun sinf holatini saqlaydi. Statik maydon nomidan oldin static kalit so'zi keladi. Misol uchun:

// class Person {
//     static retirementAge = 65;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Isim: ${this.name}  Yoshi: ${this.age}`);
//     }
// }

// console.log(Person.retirementAge); // 65
// Person.retirementAge = 62;
// console.log(Person.retirementAge); // 62

// Bu erda, Person sinfida shartli pensiya - (nafaqa) yoshini saqlaydigan statik pensiya - (nafaqa) yoshi maydoni aniqlanadi:

// static retirementAge = 65;

// Bu maydon butun Person sinfiga taalluqlidir va butun sinf holatini tavsiflaydi. Axir, qoida tariqasida, har bir kishi uchun bosilgan ma'lum bir umumiy pensiya - (nafaqa) yoshi mavjud (biz individual kasblar uchun individual holatlarni hisobga olmaymiz). Va shuning uchun statik maydonga murojaat qilish uchun har qanday ob'ekt nomi emas, balki sinf nomi ishlatiladi. Sinf nomidan foydalanib, biz uning qiymatini olishimiz yoki o'rnatishimiz mumkin:

// Person.retirementAge = 62;
// console.log(Person.retirementAge); // 62

// Shu bilan birga, biz ushbu maydonlarga statik bo'lmagan usullar va sinf konstruktori this orqali kira olmaymiz, quyidagi kabi:

// print(){
//     console.log(`Isim: ${this.name}  Yoshi: ${this.age}`);
//     console.log(`Пенсионный возраст: ${this.retirementAge}`);   // this orqali statik maydonga kirish mumkin emas
// }

// Agar biz hali ham statik bo'lmagan usullar va sinf konstruktori ichidagi statik maydonlar va usullarga murojaat qilmoqchi bo'lsak, yana umumiy holatda bo'lgani kabi, siz sinf nomidan foydalanishingiz kerak.

// print(){
//     console.log(`Isim: ${this.name}  Yoshi: ${this.age}`);
//     console.log(`Pensiya - (Nafaqa) yoshi: ${Person.retirementAge}`);
// }

// Statik usullar

// Statik usullar, xuddi statik maydonlar kabi, bitta ob'ekt uchun emas, balki butun sinf uchun aniqlanadi. Ularni aniqlash uchun static operator usul nomidan oldin joylashtiriladi. Misol uchun:

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Isim: ${this.name}  Yoshi: ${this.age}`);
//     }
//     static printClassInfo() {
//         console.log("Person sinfi shaxsni ifodalaydi");
//     }
// }
// Person.printClassInfo();    // Person sinfi shaxsni ifodalaydi

// Bu erda printClassInfo() statik usul aniqlangan, u soddaligi uchun ba'zi xabarlarni chop etadi. Sinfning xatti-harakatlarini belgilaydigan oddiy statik bo'lmagan usullardan farqli o'laroq, statik usullar butun sinf uchun xatti-harakatlarni belgilaydi. Shuning uchun ularni chaqirish uchun ob'ekt nomi emas, balki sinf nomi ishlatiladi:

// Person.printClassInfo();

// Statik usul ob'ektga emas, balki butun sinfga taalluqli bo'lgani uchun biz undagi ob'ektning statik bo'lmagan maydonlari/xususiyatlari va usullariga kirishimiz mumkin emas, quyidagi kabi:


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Isim: ${this.name}  Yoshi: ${this.age}`);
//     }
//     static printAge() { console.log(this.age); }    // statik usul uchun this.age mavjud emas
// }
// Person.printAge();  // undefined

// Agar statik usulda ob'ektning xossalariga murojaat qilish zarur bo'lsa, u holda ob'ekt usulga o'tkaziladigan usulda parametrni aniqlashimiz mumkin:

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     static print(person) {
//         console.log(`Isim: ${person.name}  Yoshi: ${person.age}`);
//     }
// }
// const tom = new Person("Abdulloh", 20);
// const bob = new Person("Mirjalol", 21);
// Person.print(tom);  // Abdulloh 20
// Person.print(bob);  // Mirjalol 21

// Biroq, biz this so'zni statik usullarda statik maydonlarga va boshqa statik usullarga murojaat qilish uchun ishlatishimiz mumkin:

// class Person {
//     static retirementAge = 65;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Isim: ${this.name}  Yoshi: ${this.age}`);
//     }
//     static calculateRestAges(person) {
//         if (this.retirementAge > person.age) {
//             const restAges = this.retirementAge - person.age;
//             console.log(`Nafaqaga chiqqunga qadar ${restAges} yil qolgan`);
//         }
//         else console.log("Siz allaqachon nafaqaga chiqqansiz");
//     }
// }
// const tom = new Person("Abdulloh", 37);
// Person.calculateRestAges(tom);      // Nafaqaga chiqqunga qadar 28 yil qolgan
// const bob = new Person("Mirjalol", 71);
// Person.calculateRestAges(bob);      // Siz allaqachon nafaqaga chiqqansiz

// HisoblashRestAges() statik usuli bu yerda aniqlanadi, bu ma'lum bir shaxsning nafaqaga chiqqanigacha qancha qolganligini hisoblab chiqadi. Hisoblash uchun esa pensiya yoshining statik maydoniga ishora qiladi:

// const restAges = this.retirementAge - person.age;

// Xususiy statik maydonlar va usullar

// Oddiy maydonlar va usullar singari, statik maydonlar va usullar shaxsiy bo'lishi mumkin. Bunday maydonlar va usullarga faqat sinfning boshqa statik usullaridan kirish mumkin:

// class Person {
//     static #retirementAge = 65;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Isim: ${this.name}  Yoshi: ${this.age}`);
//     }
//     static calculateRestAges(person) {
//         if (this.#retirementAge > person.age) {
//             const restAges = this.#retirementAge - person.age;
//             console.log(`Nafaqaga chiqqunga qadar ${restAges} yil qolgan`);
//         }
//         else console.log("Siz allaqachon nafaqaga chiqqansiz");
//     }
// }
// // console.log(Person.#retirementAge);  // ! Xato: maydon retirementAge - xususiy
// const tom = new Person("Tom", 37);
// Person.calculateRestAges(tom);      // Nafaqaga chiqqunga qadar 28 yil qolgan
// const bob = new Person("Bob", 71);
// Person.calculateRestAges(bob);      // Siz allaqachon nafaqaga chiqqansiz

// Oldingi misoldan farqli o'laroq, endi retirementAge statik maydoni shaxsiydir. Va endi unga faqat sinfning statik usullari ichida kirish mumkin