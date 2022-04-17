/*
---------------------------------------------------------------------
======================================= 6 - Bob 3 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Massiv bilan - (yordamida) operatsiyalar --->> */

// JavaScript tili massivlar bilan ishlash uchun boy funksiyalarni taqdim etadi, ular Array obyektining usullari yordamida amalga oshiriladi. Ushbu usullarni qo'llashni ko'rib chiqing

// Massivdan nusxa olish. slice()

// Massiv nusxasi sayoz yoki sayoz (shallow copy) - (sayoz nusxa) va chuqur (deep copy) - (chuqur nusxa) bo'lishi mumkin.

// Sayoz nusxa ko'chirish uchun massivni o'zgaruvchiga saqlaydigan boshqa o'zgaruvchining qiymatini belgilash kifoya:

// const users = ["Abdulloh", "Sardor", "Mirjalol"];
// console.log(users);     //  ["Abdulloh", "Sardor", "Mirjalol"]
// const people = users;       //  chuqur nusxa

// people[1] = "Mirza";     //  ikkinchi elementni o'zgartirish
// console.log(users);     //  ["Abdulloh", "Mirza", "Mirjalol"]

// Bunday holda, odamlar o'zgaruvchisi nusxalangandan so'ng, foydalanuvchi o'zgaruvchisi bilan bir xil massivga ishora qiladi. Shuning uchun, odamlardagi elementlarni o'zgartirganda, users - (foydalanuvchilar)dagi elementlar ham o'zgaradi, chunki aslida bu bir xil massiv.

// Bunday xatti-harakatlar har doim ham istalmagan. Misol uchun, biz o'zgaruvchilar nusxa ko'chirishdan keyin alohida massivlarga ishora qilishini xohlaymiz. Va bu holda, slice() usuli bilan chuqur nusxa ko'chirishdan foydalanishingiz mumkin:

// const users = ["Abdulloh", "Sardor", "Mirjalol"];
// console.log(users);             //  ["Abdulloh", "Sardor", "Mirjalol"]
// const people = users.slice();       //  chuqur nusxa

// people[1] = "Mirza";             // ikkinchi elementni o'zgartirish
// console.log(users);             //  ["Abdulloh", "Sardor", "Mirjalol"]
// console.log(people);            //  ["Abdulloh", "Mirza", "Mirjalol"]

// Bunday holda, nusxa ko'chirilgandan so'ng, o'zgaruvchilar turli massivlarga ishora qiladi va biz ularni bir-biridan alohida o'zgartirishimiz mumkin.

// Ammo shuni ta'kidlash kerakki, xuddi shu nusxa ko'chirishni tarqatish operatori yordamida amalga oshirish mumkin ...:

// const users = ["Abdulloh", "Sardor", "Mirjalol"];
// console.log(users);     //  ["Abdulloh", "Sardor", "Mirjalol"]
// const people = [...users];

// people[1] = "Mirza";     //  изменяем второй элемент
// console.log(users);     //  ["Abdulloh", "Sardor", "Mirjalol"]
// console.log(people);     //  ["Abdulloh", "Mirza", "Mirjalol"]

// Shuningdek, slice() usuli massivning bir qismini nusxalash imkonini beradi. Buning uchun ikkita parametr kerak bo'ladi:

// slice(boshlang'ich_qiymat, cheklangan_qiymat)

// Birinchi parametr massivdan qiymatlarni olish uchun ishlatiladigan elementning boshlang'ich indeksiga ishora qiladi. Va ikkinchi parametr - siz nusxa olmoqchi bo'lgan oxirgi indeks.

// Misol uchun, keling, yangi massivdagi elementlarni 1-indeksdan boshlab 4-indeksgacha tanlaylik, shu jumladan:

// const users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
// const people = users.slice(1, 4);
// console.log(people);        // ["Sam", "Bill", "Alice"]

// Va massivni indekslash noldan boshlanganligi sababli, yangi massiv ikkinchi, uchinchi va to'rtinchi elementlarni o'z ichiga oladi.

// Agar faqat boshlang'ich indeks ko'rsatilgan bo'lsa, u holda nusxa ko'chirish massiv oxirigacha amalga oshiriladi:

// const users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
// const people = users.slice(2);  // ikkinchi index dan to oxirigacha..
// console.log(people);        // ["Bill", "Alice", "Kate"]

// push()

// Push() usuli elementni massiv oxiriga qo'shadi:

// const people = [];
// people.push("Tom");
// people.push("Sam");
// people.push("Bob", "Mike");

// console.log("Massivda people elementlari: ", people.length);
// console.log(people); // ["Tom", "Sam", "Bob", "Mike"]

// pop()

// pop() usuli massivdan oxirgi elementni olib tashlaydi:

// const people = ["Tom", "Sam", "Bob", "Mike"];

// const lastPerson = people.pop(); // massivdan oxirgi elementni chiqarib olamiz
// console.log(lastPerson );   // Mike
// console.log(people);    // ["Tom", "Sam", "Bob"]

// shift()

// shift() usuli massivdan chiqarib oladi va uni o'chiradi

// const people = ["Tom", "Sam", "Bob", "Mike"];

// const firstPerson = people.shift(); // massivdan oxirgi elementni chiqarib olamiz
// console.log(firstPerson);   // Tom
// console.log(people);    // ["Sam", "Bob", "Mike"]

// unshift()

// unshift() usuli massiv boshiga yangi element qo'shadi:

// const people = ["Tom", "Sam", "Bob"];

// people.unshift("Alice");
// console.log(people);    // ["Alice", "Tom", "Sam", "Bob"]

// Elementlarni o'chirish index.splice() bo'yicha

// Splice() usuli ma'lum bir indeksdan elementlarni olib tashlaydi. Masalan, uchinchi indeksdan elementlarni olib tashlash:

// const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
// const deleted = people.splice(3);
// console.log(deleted);       // [ "Alice", "Kate" ]
// console.log(people);         // [ "Tom", "Sam", "Bill" ]

// Splice usuli olib tashlangan elementlarni yangi massiv sifatida qaytaradi.

// Bunday holda, o'chirish massivning boshidan amalga oshiriladi. Agar siz salbiy indeksdan o'tsangiz, o'chirish massivning oxiridan amalga oshiriladi. Masalan, oxirgi elementni olib tashlaymiz:

// const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
// const deleted = people.splice(-1);
// console.log(deleted);       // [ "Kate" ]
// console.log(people);         // ["Tom", "Sam", "Bill", "Alice"]

// Usulning qo'shimcha versiyasi olib tashlanadigan elementlar sonini belgilash imkonini beradi. Masalan, birinchi indeksdan uchta elementni olib tashlaymiz: