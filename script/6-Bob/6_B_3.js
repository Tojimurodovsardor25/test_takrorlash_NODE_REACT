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

// Birinchi parametr massivdan qiymatlarni olish uchun ishlatiladigan elementning boshlang'ich indeksiga ishora qiladi. Va ikkinchi parametr - siz nusxa olmoqchi bo'lgan oxirgi indeks.