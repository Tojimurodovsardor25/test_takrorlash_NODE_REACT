/*
---------------------------------------------------------------------
======================================= 4 - Bob 3 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Ob'ektlardan nusxa ko'chirish va taqqoslash --->> */

// Ob'ektlarni nusxalash

// Primitiv ma'lumotlar turlaridan farqli o'laroq, ob'ekt ma'lumotlari mos yozuvlar bo'yicha ko'chiriladi. Bu nimani anglatadi? Quyidagi misolni ko'rib chiqing:

// const tom = { name: "Abdulloh"};
// const bob = tom;
// // ikkala konstantaning name - (nom yoki isim) xususiyatini tekshiring
// console.log(tom.name);  // Abdulloh
// console.log(bob.name);  // Abdulloh
         
// bob konstantasining name - (nom yoki isim) xususiyatini o'zgartiring
// bob.name = "Sardor";
// // har ikkala konstantaning nom xususiyatini qayta tekshiring
// console.log("O'zgarishdan keyin")
// console.log(tom.name);  // Sardor
// console.log(bob.name);  // Sardor

// Birinchidan, oddiygina Abdulloh obyekti bitta name - (nom yoki isim) xususiyati bilan aniqlanadi. Keyin ushbu ob'ektning qiymatini doimiy ya'ni Sardorga belgilaymiz yoki o'zgartiramiz

// const bob = tom;

// Bunday holda, doimiy Abdulloh mos yozuvlar yoki nisbatan aytganda, doimiy Sardorning manzilini oladi, shuning uchun bu tayinlashdan keyin ikkala konstanta ham xotiradagi bir xil ob'ektga ishora qiladi. Shunga ko'ra, o'zgarishlar bitta konstanta orqali amalga oshiriladi:

// bob.name = "Sardor";

// Yana bir konstanta ham ta'sir qiladi - Abdulloh:

// console.log(tom.name);  // Sardor

// Bundan tashqari, konstantalardan biri orqali ob'ektga yangi xususiyat qo'shamiz:

// const tom = { name: "Abdulloh"};
// const bob = tom;
// // bob doimiysiga yangi xususiyat qo'shing - age
// bob.age = 20;
// // va biz tom uchun yangi xususiyat ham qo'shilganligini ko'ramiz
// console.log(tom.age);   // 20

// Bob konstantasiga age xossasini qo'shgandan so'ng, tom konstantasi ham shu xususiyatga ega ekanligini ko'rishingiz mumkin, chunki yana ikkala konstanta bir xil ob'ektni ifodalaydi.

// Agar biz ob'ektning xususiyatidan nusxa olishni istasak-chi, lekin bir vaqtning o'zida har ikkala konstanta yoki o'zgaruvchi butunlay boshqa ob'ektlarni ko'rsatsa, ulardan biridagi o'zgarishlar ikkinchisiga hech qanday ta'sir qilmaydi? Bunday holda, biz o'rnatilgan Object.assign() usulidan foydalanishimiz mumkin.

// Object.assign usuli

// Object.assign () usuli ikkita parametrni oladi:

// Object.assign(target, ...sources)

// Birinchi parametr, maqsad, xususiyatlar nusxalanadigan ob'ektni ifodalaydi. Ikkinchi parametr - ...manbalar - xususiyatlarni nusxalash kerak bo'lgan ob'ektlar to'plami (ya'ni bir vaqtning o'zida bir nechta ob'ektlardan xususiyatlarni nusxalashimiz mumkin)

// Maqsad ob'ektining usulini qaytaradi, unga manbalar ob'ektlarining xususiyatlari ko'chiriladi.

// Misol uchun:

// const tom = { name: "Abdulloh", age: 20};
// const bob = Object.assign({}, tom);
// bob.name = "Sardor";
// bob.age = 41;
         
// console.log(`Obyekt tom. Name: ${tom.name}   Age: ${tom.age}`);
// console.log(`Obyekt bob. Name: ${bob.name}   Age: ${bob.age}`);

// Bunday holda, Object.assign({}, tom) ni chaqirish biz tom ob'ektidan ma'lumotlarni bo'sh ob'ektga {} nusxalashimizni bildiradi. Ushbu nusxa ko'chirish natijasi bob ob'ektidir. Bundan tashqari, bu Tomga qaraganda butunlay boshqacha ob'ekt. Va bu erda bob konstantasining har qanday o'zgarishi tom konstantasiga hech qanday ta'sir qilmaydi.

// Dasturning konsolga chiqishi:

/* 

Obyekt tom. Name: Abdulloh   Age: 20
Obyekt bob. Name: Sardor   Age: 41

*/

// Bir nechta ob'ektlardan nusxa ko'chirish

// Xuddi shunday, siz bir nechta ob'ektlardan ma'lumotlarni nusxalashingiz mumkin:

// const tom = { name: "Abdulloh"};
// const sam = { age: 20};
// const person = { height: 170};
// Object.assign(person, tom, sam);    // tom va sam ni person ga nusxalaymiz
// console.log(person);    // {height: 170, name: "Abdulloh", age: 20}

// Bu tom va sam ob'yektlaridan barcha xususiyatlarni shaxs ob'ektiga ko'chiradi. Natijada, nusxa ko'chirishdan so'ng, shaxs ob'ekti uchta xususiyatga ega bo'ladi.

//  Bir xil nomdagi xususiyatlarni nusxalash

// Agar nusxa ko'chirilayotgan ob'ektlar bir xil xususiyatlarga ega bo'lsa, oxirgi ob'ektlarning xususiyatlari avvalgilarining xususiyatlarini almashtiradi:

// const tom = { name: "Abdulloh", age: 45};
// const sam = { age: 20};
// const person = { height: 170};
// Object.assign(person, tom, sam);
// console.log(person);    // {height: 170, name: "Abdulloh", age: 20}

// Bu yerda tom ham, sam ham yoshi xossasiga ega, lekin shaxs ob'ektida age xossasi 20, sam ob'ektidan olingan qiymat, chunki sam ob'ektidan nusxa oxirgi bajariladi.

// Ob'ekt xususiyatlarini nusxalash

// Object.assign() oddiy ob'ektlar uchun yaxshi ishlayotgan bo'lsa-da, nusxa ko'chirilgan ob'ektning xususiyati ham ob'ektni ifodalasa nima bo'ladi:

// const tom = { name: "Abdulloh", company: {title: "Microsoft"}};
// const bob = Object.assign({}, tom);
// bob.name = "Sardor";
// bob.company.title = "Google";
// console.log(tom.name);      // Abdulloh
// console.log(tom.company.title);     // Google

// Bu yerda tom ob'ektining kompaniya xossasi bitta xususiyatga ega ob'ektni ifodalaydi. Va bob ob'ektini nusxalashda u tom.company qiymatining nusxasini emas, balki ushbu ob'ektga havolani oladi. Shuning uchun, bob.company-ga o'zgartirishlar tom.company-ga ham ta'sir qiladi.

// Spread operatori yordamida ob'ektni nusxalash

// Tarqatish operatori ... ob'ektni boshqa ob'ektga o'tkazilishi mumkin bo'lgan turli xususiyat-qiymat juftliklariga yoyish imkonini beradi.

// const tom = { name: "Abdulloh", age: 20, company: "Google"};
// const bob = {...tom}
// bob.name = "Sardor";
          
// console.log(tom);   // {name: "Abdulloh", age: 20, company: "Google"}
// console.log(bob);   // {name: "Sardor", age: 20, company: "Google"}

// Bunday holda, bob ob'ektiga tom ob'ektining xususiyatlarining nusxalari uzatiladi.

// Agar yangi ob'ektning ba'zi xususiyatlari boshqa qiymatlarga ega bo'lishi kerak bo'lsa (yuqoridagi misoldagi kabi, nom xususiyati), ular oxirida ko'rsatilishi mumkin:

// const tom = { name: "Abdulloh", age: 37, company: "Google"};
// const bob = {...tom, name: "Sardor"};
          
// console.log(bob);   // {name: "Sardor", age: 37, company: "Google"}

// Oldingi misoldan ko'rinib turibdiki, nusxa ko'chirilgandan keyin ikkala konstanta ham turli ob'ektlarga havolalarni ifodalaydi va ulardan birini o'zgartirish boshqa ob'ektga hech qanday ta'sir qilmaydi.

// Biroq, agar ob'ektlar ichki o'rnatilgan ob'ektlarni o'z ichiga olsa, u holda bu ichki o'rnatilgan ob'ektlar nusxalanganda, yana bir xil ob'ektga havolalarni ifodalaydi:

// const tom = { name: "Abdulloh", age: 37, company: {title: "Microsoft"}};
// const bob = {...tom}
// bob.name = "Sardor";
// bob.company.title = "Google";
 
// console.log(`${tom.name} - ${tom.company.title}`);  // Abdulloh - Google
// console.log(`${bob.name} - ${bob.company.title}`);  // Sardor - Google

// Ob'ektni taqqoslash

// Standart taqqoslash va ekvivalent amallar yordamida ikkita ob'ektni solishtiramiz:

// const tom = { name: "Abdulloh"};
// const bob = { name: "Sardor"};
// console.log(tom == bob);    // false
// console.log(tom === bob);   // false

// Bu holda ikkala operator ham false qiymatini qaytaradi, ya'ni ob'ektlar teng emas. Bundan tashqari, ob'ektlarning xususiyatlarining qiymatlari bir xil bo'lsa ham, biz ikkala holatda ham noto'g'ri bo'lamiz.

// const tom = { name: "Abdulloh"};
// const bob = { name: "Abdulloh"};
// console.log(tom == bob);    // false
// console.log(tom === bob);   // false

// Biroq, agar ikkala konstanta (o'zgaruvchi) bir xil ob'ektga havolani saqlasa nima bo'ladi:

// const tom = { name: "Abdulloh"};
// const bob = tom;
// console.log(tom == bob);    // true
// console.log(tom === bob);   // true

// Bunday holda, ikkala holatda ham biz true - haqiqatga erishamiz, chunki ikkala doimiy qiymatning qiymatlari tengdir, chunki aslida ular bir xil qiymatdir.