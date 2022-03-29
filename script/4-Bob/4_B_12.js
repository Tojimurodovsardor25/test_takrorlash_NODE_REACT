/*
---------------------------------------------------------------------
======================================= 4 - Bob 12 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Buzilish - (Destructuring) - (Hacking) --->> */

// (destructuring - buzilish) buzish ob'ektdan individual qiymatlarni o'zgaruvchilar yoki konstantalarga chiqarish imkonini beradi:

// const user = {
//     name: "Abdullooh",
//     age: 20,
//     phone: "+367438787",
//     email: "abdullooh@gmail.com"
// };
// let { name, email } = user;
// console.log(name);      // Abdullooh
// console.log(email);     // abdullooh@gmail.com

// Ob'ektni tuzilmasini buzishda o'zgaruvchilar jingalak qavslar ichiga joylashtiriladi va ob'ekt ularga tayinlanadi. Ob'ekt xususiyatlari va o'zgaruvchilar/konstanta - (o'zgarmas)lar o'rtasidagi xaritalash nomi bo'yicha.

// Biz ob'ektning xossa qiymatlarini boshqa nomdagi o'zgaruvchilar/konstanta - (o'zgarmas)larga olishni xohlashimizni belgilashimiz mumkin:

// const user = {
//     name: "Abdullooh",
//     age: 20,
//     phone: "+367438787",
//     email: "abdullooh@gmail.com"
// };
// const { name: userName, email: mailAddress } = user;
// console.log(userName);      // Abdullooh
// console.log(mailAddress);   // abdullooh@gmail.com

// Bunday holda, name xususiyati userName o'zgaruvchisiga, elektron pochta maydoni esa mailAddress o'zgaruvchisiga moslashtiriladi.

// Agar ob'ekt to'satdan mos keladigan xususiyatlarga ega bo'lmasa, siz o'zgaruvchilar / konstanta - (o'zgarmas)lar uchun standart qiymatlarni o'rnatishingiz mumkin:

// const user = {
//     name: "Abdullooh",
//     age: 20,
// };
// const { name = "Sardor", email: mailAddress = "sardor@gmail.com" } = user;
// console.log(name);              // Abdullooh
// console.log(mailAddress);       // sardor@gmail.com

// Agar tuzilmani buzish paytida o'zgaruvchi/konstanta murakkab ob'ektni ifodalovchi xususiyatga ko'rsatilgan bo'lsa, u holda bu o'zgaruvchi/konstanta - (o'zgarmas) destruksiyadan so'ng murakkab ob'ektni ham ifodalaydi:

/* Vikipediya */

// Destruksiya
/*
Destruksiya (lot. destructio — par-chalanish) — makromolekulalardagi kimyoviy boglarning uzilishi natijasida ularning polimerlanish darajasi yoki molekulyar massasining kamayishi bilan kechadigan jarayonlarning umumiy nomi. Kimyoviy bogʻlarning uzilish joyiga karab D. asosiy va yon zan-jirlar D.siga boʻlinadi. D.ga tashqi taʼsirlar (issiklik, ionlashtiruvchi radiatsiya, mexanik kuchlanish, yorugʻlik, oksidlovchi muhit, namlik va b.) sabab boʻladi. Koʻp hollarda D. bir vaqtda bir nechta tashqi taʼsir (mas, issiklik va kislorodli muxit — termooksidlovchi D.) natijasida roʻy beradi. D. jarayonida polimerlarning xossalari oʻzgaradi, ular asosida tayyorlangan maqsulotlar buziladi. Shu sababli polimerlarni stabillashtirishning turli usullari ishlab chiqilgan. Baʼzi hollarda D. jarayoni foydali hisoblanadi. Mac, polivinilatsetatni ishqoriy gidrolizga uchratib polivinil spirt, sellyuloza va kraxmalni gidrolitik D.dan foydalanib turli qandlar olinadi. D. polimerlarning kimyoviy tuzilishini aniklashda ham qoʻllaniladi.
*/

// let user = {
//     name: "Abdullooh",
//     age: 20,
//     account: {
//         login: "abdullooh555",
//         password: "qwerty"
//     }
// };
// const { account } = user;
// console.log(account.login);         // abdullooh555
// console.log(account.password);      // qwerty

// Ammo, agar biz yuqoridagi misolda bo'lgani kabi, foydalanuvchi ob'ektidagi hisob ob'ekti kabi ichki o'rnatilgan murakkab ob'ektdan individual qiymatlarni olishni istasak, unda biz ushbu ob'ektni to'liq olishimiz shart emas - biz alohida o'zgaruvchilar/konstantalarni ham taqdim etishimiz mumkin. xususiyatlari uchun:

// const user = {
//     name: "Abdullooh",
//     age: 24,
//     account: {
//         login: "abdullooh555",
//         password: "qwerty"
//     }
// };
// let { name, account: { login } } = user;
// console.log(name);      // Abdullooh
// console.log(login);     // abdullooh555

// Bu erda login o'zgaruvchisiga user.account.login xususiyati qiymatini olamiz.

/*
rest-operator: Rest-operatori yordamida ob'ektning qolgan xususiyatlarini olish
*/

// Rest-operatori operatori yoki operator ... sizga ob'ektning o'zgaruvchilar/konstantalar bilan taqqoslanmagan qolgan xususiyatlarini alohida o'zgaruvchiga/konstantaga olish imkonini beradi:

// const Abdullooh = {
//     name: "Abdullooh",
//     age: 20,
//     phone: "+367438787",
//     email: "abdullooh@gmail.com"
// };
// const { name, age, ...contacts } = Abdullooh;
// console.log(name);      // Abdullooh
// console.log(age);       // 20
// console.log(contacts);  // {phone: "+367438787", email: "abdullooh@gmail.com"}

// Bunday holda, biz Abdullooh ob'ektini uchta doimiyga ajratamiz: ism, yosh va kontaktlar. Ism va yosh konstantalari Abdullooh ob'ektining xususiyatlariga nom bilan mos keladi. Va kontaktlar konstantasi barcha qolgan xaritalanmagan ob'ekt xususiyatlarini oladi. Biroq, ularni olish uchun operator ...: ...kontaktlar konstanta nomidan oldin ko'rsatiladi. Ya'ni, bu holda kontaktlar konstantasi Abdullooh ob'ektining elektron pochta va telefon xususiyatlarini o'z ichiga olgan ob'ektni taklif qiladi.

// Shuni ta'kidlash joizki, ob'ektning barcha qolgan xususiyatlarini qabul qiladigan o'zgaruvchi/konstant, ob'ektdan faqat bitta xususiyatni olsa ham, har doim ob'ektni ifodalaydi.

// Massivni destruksiya qilish - (Buzish)

// Sen shuningdek massivlarni parchalashing mumkin:

// let users = ["Abdulloh", "Sardor", "Mirjalol"];
// let [a, b, c] = users;

// console.log(a);     // Abdulloh
// console.log(b);     // Sardor
// console.log(c);     // Mirjalol

// Massiv tuzilmasini buzishda o‘zgaruvchilar kvadrat qavs ichiga joylashtiriladi va massiv elementlarining qiymatlarini birma-bir ketma-ketlikda qabul qiladi va BUZADI :}.

// Agar massiv elementlariga qaraganda ozroq o'zgaruvchilar/o'zgarmaslar bo'lsa, qolgan massiv elementlari shunchaki o'tkazib yuboriladi.

// let users = ["Abdulloh", "Sardor", "Mirjalol"];
// let [a, b] = users;

// console.log(a);     // Abdulloh
// console.log(b);     // Sardor

// Agar massiv elementlaridan ko'proq o'zgaruvchilar/consts bo'lsa, u holda mos kelmaydigan o'zgaruvchilar/consts undefined - (aniqlanmagan) qilib o'rnatiladi:

// let users = ["Abdulloh", "Sardor", "Mirjalol"];
// let [a, b, c, d] = users;

// console.log(a);     // Abdulloh
// console.log(b);     // Sardor
// console.log(c);     // Mirjalol
// console.log(d);     // undefined

// Massivning qolgan elementlarini boshqa massivga olish

// ... operatori yordamida siz massivning qolgan barcha elementlarini boshqa massiv sifatida olishingiz mumkin:

// let users = ["Abdulloh", "Sardor", "Mirjalol", "Hadicha"];
// let [tom, ...others] = users;

// console.log(tom);       // Abdulloh
// console.log(others);    // ["Sardor", "Mirjalol", "Hadicha"]

// Bu erda boshqa massiv massivning oxirgi uchta elementini o'z ichiga oladi.

// Elementlarni o'tkazib yuborish

// Bunday holda, biz o'zgaruvchilar nomlari o'rniga bo'shliqlarni qoldirib, qator elementlarini o'tkazib yuborishimiz mumkin:

// let users = ["Abdulloh", "Sardor", "Mirjalol", "Gulchexra", "Ramziy", "Hadicha"];
// let [first, , , , fifth] = users;

// console.log(first);     // Abdulloh
// console.log(fifth);     // Ramziy

// first,,,,fifth - (Birinchi,,,,beshinchi) ifodasi biz massivning birinchi elementini first o'zgaruvchiga, so'ngra uchta elementni o'tkazib yuborib, beshinchi elementni fifth o'zgaruvchiga olishni xohlashimizni bildiradi.

// Xuddi shunday, sen, masalan, ikkinchi va to'rtinchi elementlarni ham olishing mumkin:

// let users = ["Abdulloh", "Sardor", "Mirjalol", "Gulchexra", "Ramziy", "Hadicha"];
// let [, second, , forth] = users;

// console.log(second);        // Sardor
// console.log(forth);         // Gulchexra

// Ob'ektlarni massivlardan buzish - destructuring

// Siz massiv va ob'ektdan ma'lumotlarni olishni birlashtirishingiz mumkin:

// let people = [
//     { name: "Abdulloh", age: 21 },
//     { name: "Mirjalol", age: 23 },
//     { name: "Sardor", age: 20 }
// ];
// let [, { name }] = people;

// console.log(name);      // Mirjalol

// Bunda massivdagi ikkinchi obyektning name xossasining qiymatini olamiz.

// Parametrlarni buzish

// Agar massiv yoki ob'ekt funksiyaga parametr sifatida uzatilsa, u ham xuddi shunday tarzda alohida qiymatlarga bo'linishi mumkin:

// function display({ name: userName, age: userAge }) {
//     console.log(userName, userAge);
// }
// function sum([a, b, c]) {
//     const result = a + b + c;
//     console.log(result);
// }
// let user = { name: "Ramziy", age: 22, email: "Ramziy@gmail.com" };

// let numbers = [3, 5, 7, 8];

// display(user);  // Ramziy 22
// sum(numbers);   // 15

// Qiymat almashinuvi

// Buzilish tufayli ikkita o'zgaruvchi o'rtasida qiymatlarni almashish juda oson bo'ldi:

// let first = "Tom";
// let second = "Bob";
// [first, second] = [second, first];

// console.log(first);     // Mirjalol
// console.log(second);    // Abdulloh

// Bu bir qator vazifalarni soddalashtiradi. Masalan, biz massivni eng oddiy tartiblash uchun destrukturadan foydalanamiz:

// let nums = [9, 3, 5, 2, 1, 4, 8, 6];
// for (let i = 0; i < nums.length; i++)
//     for (let j = 0; j < nums.length; j++)
//         if (nums[i] < nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];

// console.log(nums);  // [1, 2, 3, 4, 5, 6, 8, 9]