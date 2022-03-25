/*
---------------------------------------------------------------------
======================================= 4 - Bob 1 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Ob'ektga yo'naltirilgan dasturlash --->> */

// Ob'ektga yo'naltirilgan dasturlash bugungi kunda ilovalarni ishlab chiqishda ustun paradigmalardan biri bo'lib, JavaScript-da biz OOP-dan to'liq foydalanishimiz mumkin. Shu bilan birga, JavaScript-ga nisbatan ob'ektga yo'naltirilgan dasturlashning o'ziga xos xususiyatlari bor.

// Ob'ektlar

/* 

O'tgan mavzularda biz ibtidoiy ma'lumotlar - raqamlar, satrlar bilan ishladik, ammo ma'lumotlar har doim ham ibtidoiy turlarni ifodalamaydi. Masalan, agar dasturimizda ismi-sharifi, yoshi, jinsi va hokazolarga ega bo'lgan shaxsning mohiyatini tasvirlash kerak bo'lsa, tabiiyki, biz shaxsning mohiyatini raqam yoki qator sifatida ifodalay olmaymiz. Shaxsni to'g'ri tasvirlash uchun bizga bir necha qator yoki raqamlar kerak. Shu munosabat bilan odam murakkab tuzilma sifatida harakat qiladi, u alohida xususiyatlarga ega bo'ladi - yoshi, bo'yi, ismi, familiyasi va boshqalar.

*/

// Bunday tuzilmalar bilan ishlash uchun JavaScript obyektlardan foydalanadi. Har bir ob'ekt o'z holatini tavsiflovchi xususiyatlarni va xatti-harakatlarini tavsiflovchi usullarni saqlashi mumkin

// Yangi ob'ekt yaratish

// Yangi ob'ekt yaratishning bir necha yo'li mavjud.

// Birinchi usul Ob'ekt konstruktoridan foydalanishdir:

// let user = new Object();

// Bunday holda, ob'ekt foydalanuvchi - (user) nomini oladi.

// Yangi Object() ifodasi konstruktor chaqiruvini, yangi obyektni yaratuvchi funksiyani ifodalaydi. Yangi operator konstruktorni chaqirish uchun ishlatiladi. Konstruktorni chaqirish aslida oddiy funktsiyani chaqirishga o'xshaydi.

// Ob'ektni yaratishning ikkinchi usuli - jingalak qavslardan foydalanish:

// let user = {};

// Bugungi kunga kelib, ikkinchi usul keng tarqalgan.

// Obyekt xususiyatlari

// Ob'ektni yaratgandan so'ng, biz uning xususiyatlarini aniqlashimiz mumkin. Xususiyatni aniqlash uchun nuqta bilan ajratilgan ob'ekt nomidan keyin xususiyat nomini ko'rsating va unga qiymat bering:

// let user = {};
// user.name = "Abdulloh";
// user.age = 20;

// Bunday holda, ikkita xususiyat nomi va yoshi e'lon qilinadi va tegishli qiymatlar tayinlanadi. Shundan so'ng, biz ushbu xususiyatlardan foydalanishimiz mumkin, masalan, konsolda ularning qiymatlarini ko'rsatish:

// console.log(user.name);
// console.log(user.age);

// Yana ob'ektni belgilashda xususiyatlarni ham belgilashingiz mumkin:

// let user = {

//     name: "Tom",
//     age: 26
// };

// Bunday holda, xususiyatga qiymat berish uchun ikki nuqta belgisi ishlatiladi va xususiyat ta'rifidan keyin vergul (nuqtali vergul o'rniga) qo'yiladi.

// Bundan tashqari, xususiyatlarni aniqlashning qisqacha usuli mavjud:

// let name = "Abdulloh";
// let age = 20;
// let user = {name, age};
// console.log(user.name);     // Abdulloh
// console.log(user.age);      // 20

// Bunday holda, o'zgaruvchilarning nomlari ham ob'ekt xususiyatlarining nomlari hisoblanadi. Va shu tarzda siz yanada murakkab tuzilmalarni yaratishingiz mumkin:

// let ismi = "Abdulloh";
// let yoshi = 20;
// let foydalanuvchi = { name, age };
// let teacher = { foydalanuvchi, course: "JavaScript" };
// console.log(teacher.foydalanuvchi);      // {ismi: "Abdulloh", yoshi: 20}
// console.log(teacher.course);    // JavaScript

// Ob'ekt usullari

// Ob'ektning usullari uning xatti-harakatini yoki bajaradigan harakatlarini belgilaydi. Usullar funksiyalardir. Misol uchun, keling, odamning ismi va yoshini ko'rsatadigan usulni aniqlaylik:

// let user = {};
// user.name = "Tom";
// user.age = 26;
// user.display = function(){
     
//     console.log(user.name);
//     console.log(user.age);
// };
 
// // Usul chaqiruvi
// user.display();

// Funktsiyalarda bo'lgani kabi, usullar avval aniqlanadi va keyin chaqiriladi.

// Ob'ektni belgilashda usullar to'g'ridan-to'g'ri belgilanishi mumkin:

// let user = {
  
//     name: "Tom",
//     age: 26,
//     display: function(){
      
//         console.log(this.name);
//         console.log(this.age);
//     }
// };

// Xususiyatlarda bo'lgani kabi, funktsiya havolasi yo'g'on nuqta yordamida usulga tayinlanadi.

// Ushbu ob'ekt ichidagi ob'ektning xususiyatlari yoki usullariga kirish uchun this kalit so'zidan foydalaniladi. Bu joriy ob'ektga havolani anglatadi.

// Usullarni aniqlash uchun stenografiya usulidan ham foydalanishingiz mumkin

// let user = {
  
//     name: "Abdulloh",
//     age: 20,
//     display(){
      
//         console.log(this.name, this.age);
//     },
//     move(place){
//         console.log(this.name, "boradi", place);
//     }
// };
// user.display(); // Abdulloh 20
// user.move("do'konga");  // Abdulloh do'konga boradi

// Massiv sintaksisi

// Massiv sintaksisi yordamida xususiyatlar va usullarni aniqlashning muqobil usuli ham mavjud:

// let user = {};
// user["name"] = "Abdulloh";
// user["age"] = 20;
// user["display"] = function(){
     
//     console.log(user.name);
//     console.log(user.age);
// };
 
// // Usul chaqiruvi
// user["display"]();

// Har bir xususiyat yoki usulning nomi tirnoq va kvadrat qavs ichiga olinadi, so'ngra ularga qiymat ham beriladi. Masalan, user["age"] = 20.

// Ushbu xususiyatlar va usullarga murojaat qilganda, siz nuqta belgisidan (user.name) foydalanishingiz mumkin yoki unga quyidagi tarzda kirishingiz mumkin: user["name"]

// Yana ob'ektni yaratishda to'g'ridan-to'g'ri massiv sintaksisi orqali xususiyatlar va usullarni aniqlash mumkin:

// let user = {
//     ["name"]: "Abdulloh",
//     ["age"]: 26,
//     ["display"]: function(){
      
//         console.log(user.name);
//         console.log(user.age);
//     }
// };
// user["display"]();

// Satrlar xossalar va usullar sifatida

// Shuni ham ta'kidlash kerakki, ob'ektning xossalari va usullarining nomlari doimo satrlardir. Ya'ni, oldingi ob'ekt ta'rifini quyidagicha qayta yozishimiz mumkin:

// let user = {
//     "name": "Abdulloh",
//     "age": 26,
//     "display": function(){
     
//         console.log(user.name);
//         console.log(user.age);
//     }
// };
// //  Usul chaqiruvi
// user.display();

// Bir tomondan, ikkita ta'rif o'rtasida hech qanday farq yo'q. Boshqa tomondan, sarlavhani satrga o'rash yordam berishi mumkin bo'lgan holatlar mavjud. Masalan, agar mulk nomi bo'sh joy bilan ajratilgan ikkita so'zdan iborat bo'lsa:

// let user = {
//     name: "Abdulloh",
//     age: 20,
//     "full name": "Abdulloh ibn Abdulloh",
//     "display info": function(){
     
//         console.log(user.name);
//         console.log(user.age);
//     }
// };
// console.log(user["full name"]);
// user["display info"]();

// Faqat bu holatda, bunday xususiyat va usullarga murojaat qilish uchun biz massiv sintaksisidan foydalanishimiz kerak.

// Xususiyat va usul nomlarini dinamik aniqlash 

// Massiv sintaksisi biz uchun yana bir imkoniyatni ochadi - ob'ektdan tashqari xususiyat nomini aniqlash:

// const prop1  = "name";
// const prop2  = "age";
// let tom = { 
//     [prop1]: "Abdulloh",
//     [prop2]: 21
// };
// console.log(tom);           // {name: "Abdulloh", age: 21}
// console.log(tom.name);      // Abdulloh
// console.log(tom["age"]);    // 21

// Buning yordamida, masalan, o'zboshimchalik nomlari bilan ob'ektlarni dinamik ravishda yaratishingiz mumkin:

// function createObject(propName, propValue){
//     return {
//             [propName]: propValue,
//             print(){ 
//                 console.log(`${propName}: ${propValue}`);
//             }
//     };
// }
// let person = createObject("name", "Abdulloh");
// person.print();     // name: Abdulloh
 
// let book = createObject("title", "JavaScript Reference");
// book.print();   // title: JavaScript Reference

// Xususiyatlarni olib tashlash yoki o'chirish

// Yuqorida biz ob'ektga qanday qilib dinamik ravishda yangi xususiyatlar qo'shish mumkinligini ko'rib chiqdik. Biroq, biz o'chirish operatori yordamida xususiyatlar va usullarni ham o'chirib tashlashimiz mumkin. Va xuddi qo'shish kabi, biz xususiyatlarni ikki yo'l bilan olib tashlashimiz mumkin. Birinchi usul - nuqta belgilaridan foydalanish:

// delete объект.свойство

// Yoki massiv sintaksisidan foydalaning:

// delete объект["свойство"]

// Masalan, mulkni olib tashlaymiz:

// let user = {};
// user.name = "Abdulloh";
// user.age = 21;
// user.display = function(){
     
//     console.log(user.name);
//     console.log(user.age);
// };
 
// console.log(user.name); // Abdulloh
// delete user.name; // mulkni o'chirish
// // Muqobil yo'li - (variant) 
// // delete user["name"];
// console.log(user.name); // undefined - (aniqlanmagan)

// O'chirishdan so'ng, xususiyat aniqlanmagan bo'ladi, shuning uchun unga kirishga harakat qilganingizda, dastur aniqlanmagan holda qaytadi.

// Const ob'ektlari

// Ob'ektni o'zgartirib bo'lmasligini, ya'ni doimiyligini ta'minlashimiz kerak bo'lishi mumkin. Biroq, uni oddiy konstanta sifatida const operatori yordamida aniqlashning o'zi etarli emas. Misol uchun:

// const person = {name: "Abdulloh", age: 20};
// person.name= "Sardor";
// console.log(person.name);   // Sardor

// Bu erda ob'ekt doimiy sifatida belgilangan bo'lsa ham, ob'ektning xossasi o'z qiymatini o'zgartirganligini ko'ramiz.

// const operatori faqat konstantaga yangi qiymat bera olmasligimizga ta'sir qiladi, masalan, quyidagi holatda bo'lgani kabi:

// const person = {name: "Abdulloh", age: 20};
// person = {name: "Mirjalol", age: 21};  // Xato - doimiyga ikkinchi marta qiymat bera olmaysiz

// Biroq, biz ob'ekt xususiyatlarining qiymatlarini o'zgartirishimiz mumkin.

// Ob'ektni chinakam konst qilish uchun siz maxsus Object.freeze() usulidan foydalanishingiz kerak. Ob'ekt ushbu usulga parametr sifatida uzatiladi, u doimiy bo'lishi kerak:

// const person = {name: "Abdulloh", age: 20};
// Object.freeze(person);
// person.name= "Sardor";
// console.log(person.name);  // Abdulloh - mulk qiymati o'zgarmadi

// O'zgaruvchilar va konstantalardan ob'ekt yaratish

// Ob'ektni yaratishda uning xususiyatlariga o'zgaruvchilarning qiymatlari, konstantalar yoki funktsiyalarning dinamik hisoblangan natijalari berilishi mumkin:

// function getSalary(status){
//     if(status==="senior") return 1500;
//     else return 500;
// }
// const name = "Abdulloh";
// const age = 20;
// const person = { name: name, age: age, salary: getSalary()};
 
// console.log(person);  // {name: "Abdulloh", age: 20, salary: 500}

// Ammo agar doimiylar/o'zgaruvchilar nomlari xususiyatlar nomlari bilan bir xil bo'lsa, siz qiymat uzatishni qisqartirishingiz mumkin:

// Xuddi shu narsa funksiyalarni ob'ekt usullariga o'tkazish uchun ham amal qiladi:

// function display(){ 
//     console.log(this.name, this.age);
// }
// const move = function(place){ console.log(this.name, "bordi", place)};
// const name = "Abdulloh";
// const age = 20;
// const salary = 500;
// const person = { name, age, salary, display, move};
 
// person.display();       // Abdulloh 20
// person.move("o'qishga");  // Abdulloh o'qishga bordi

// Bunday holda, shaxs ob'ekti ob'ektga uzatiladigan funktsiyalarga mos keladigan ikkita usulga ega - display() va move(). Shuni ta'kidlash joizki, funktsiyalarni ob'ekt usullariga shu tarzda o'tkazishda, biz ob'ektning funksionalligiga murojaat qilish uchun ushbu funktsiyalardagi this kalit so'zidan foydalanishimiz mumkin. Biroq, lambda iboralarini uzatishda ehtiyot bo'lishingiz kerak, chunki global lambda ifodalari uchun bu brauzer oynasi obyektini ifodalaydi:

// const move = (place)=>{ console.log(this.name, "bordi", place); console.log(this);};
// const name = "Abdulloh";
 
// const person = { name, move};
// person.move("o'qishga");  //  o'qishga bordi

// Object.fromEntries() funksiyasi

// Object.fromEntries() funksiyasidan foydalanib, kalit-qiymat juftliklari to'plamidan ob'ekt yaratishingiz mumkin, bunda kalit keyinchalik xususiyat nomini ifodalaydi. Masalan, massivlardan obyekt yarataylik:

// const personData = [ ["name", "Abdulloh"], ["age", 20]];
// const person = Object.fromEntries(personData);
// console.log(person);        // {name: "Abdulloh", age: 20}
// console.log(person.name);    // Abdulloh

// Bu erda ob'ekt ikki kichik massivni o'z ichiga olgan personData massividan yaratilgan. Har bir pastki qator ikkita elementni o'z ichiga oladi va aslida kalit-qiymat juftligini ifodalaydi. Birinchi element kalitni, ikkinchi element esa qiymatni ifodalaydi.