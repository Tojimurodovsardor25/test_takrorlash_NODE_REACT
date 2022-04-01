/*
---------------------------------------------------------------------
======================================= 5 - Bob 2 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Xususiy sohalar va usullar --->> */

// Oldingi mavzularda biz xossalari va usullari tashqaridan kirish mumkin bo'lgan sinfdan foydalanganmiz va shunga mos ravishda dasturning istalgan joyida ularga murojaat qilishimiz mumkin edi. Misol uchun:

// class Person {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// const tom = new Person("Abdulloh", 37);
// tom.name = "Sardor";
// tom.age = -20;
// tom.print();    // Name: Sardor  Age: -20

// Bir tomondan, dasturimizda sinfning funksional imkoniyatlaridan foydalanishimiz, uning xossalari va usullariga kirishimiz juda yaxshi. Ammo bu mumkin bo'lgan muammolarning manbai bo'lishi mumkin. Yuqoridagi misolda ko'rib turganimizdek, biz odamning ismini o'zgartirishimiz mumkin. Ammo dasturning boshlang'ich nomini o'zgartira olishini istamasak nima bo'ladi? Biz insonning yoshini ham o'zgartirishimiz mumkin, lekin uni noto'g'ri yoshni ko'rsatishi mumkin bo'lgan istalgan raqamga o'zgartirishimiz mumkin (masalan, salbiy - yani (-20) ).

// Ba'zan sinfdan tashqaridagi ma'lumotlar yoki harakatlarga kirish mumkin emas va ularga faqat bitta sinf ichida kirish mumkin bo'lishi kerak. Yoki boshqacha qilib aytganda, sinfning xossalari va usullarini xususiy qiling - faqat shu sinf uchun mavjud. JavaScript tili esa buning uchun zarur vositalarni taqdim etadi. Buning uchun maydonlar va usullarning nomlari panjara - ( # ) belgisi bilan boshlanishi kerak.

// Shaxsiy maydonlar

// Shaxsiy maydonlar nomidan oldin panjara - ( # ) belgisi qo'yiladi:

// class Person {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     print() {
//         console.log(`Name: ${this.#name}  Age: ${this.#age}`);
//     }
// }
// const tom = new Person("Abdulloh", 37);
// // tom.#name = "Sardor";   // ! Xato - shaxsiy maydonga kirish imkoni yo'q
// // tom.#age = -45;      // ! Xato - shaxsiy maydonga kirish imkoni yo'q
// tom.print();    // Name: Abdulloh  Age: 37

// Yuqoridagi misolda #name va #age shaxsiy maydonlari aniqlangan. Siz ularning qiymatini faqat Person sinfida belgilashingiz va olishingiz mumkin. Undan tashqarida ular mavjud emas. Shuning uchun, ularga ob'ekt nomi orqali kirishga harakat qilganda, biz xatoga duch kelamiz:

// tom.#name = "Sardor";   // ! Xato - shaxsiy maydonga kirish imkoni yo'q
// tom.#age = -45;      // ! Xato - shaxsiy maydonga kirish imkoni yo'q

// Agar ularga qandaydir tarzda kirish kerak bo'lsa, biz buning uchun usullarni belgilashimiz mumkin. Masalan, yuqoridagi print() usuli ularning qiymatlarini oladi va konsolga chop etadi. Xuddi shunday, siz qiymat o'rnatish usullarini belgilashingiz mumkin:

// class Person {
//     #name;
//     #age = 1;
//     constructor(name, age) {
//         this.#name = name;
//         this.setAge(age);
//     }
//     setAge(age) {
//         if (age > 0 && age < 110) this.#age = age;
//     }
//     print() {
//         console.log(`Name: ${this.#name}  Age: ${this.#age}`);
//     }
// }
// const tom = new Person("Abdulloh", 20);
// tom.print();    // Name: Abdulloh  Age: 20
// tom.setAge(22);
// tom.print();    // Name: Abdulloh  Age: 22
// tom.setAge(-1234);
// tom.print();    // Name: Abdulloh  Age: 22

// Bunday holda, setAge usuli o'tkazilgan qiymatning to'g'riligini tekshiradi va agar u to'g'ri bo'lsa, yoshni qayta tiklaydi.

// Shaxsiy usullar

// Shaxsiy usullarning nomlaridan oldin panjara - ( # ) belgisi ham qo'yiladi:

// class Person {
//     #name = "undefined";
//     #age = 1;
//     constructor(name, age) {
//         this.#name = this.#checkName(name);
//         this.setAge(age);
//     }
//     #checkName(name) {
//         if (name !== "admin") return name;
//     }
//     setAge(age) {
//         if (age > 0 && age < 110) this.#age = age;
//     }
//     print() {
//         console.log(`Name: ${this.#name}  Age: ${this.#age}`);
//     }
// }
// const tom = new Person("Abdulloh", 20);
// tom.print();    // Name: Abdulloh  Age: 20
// const bob = new Person("admin", 41);
// bob.print();    // Name: Undefined  Age 41
// // let personName = bob.#checkName("admin"); // ! Xato - shaxsiy usulga kirish imkoni yo'q

// Yuqoridagi misolda nomni shartli tekshirishni amalga oshiradigan #checkName() xususiy usuli belgilangan - agar u "admin" ga teng bo'lmasa, u o'tkazilgan qiymatni qaytaradi. (Masalan, foydalanuvchi nomi "admin" bo'lishini xohlamaymiz). Shuningdek, sinfdan tashqarida biz ushbu usulga murojaat qila olmaymiz:

// let personName = bob.#checkName("admin");   // ! Xato

// Qoidaga ko'ra, bunday xususiy usullar yuqoridagi misoldagi tekshirish kabi ba'zi yordamchi harakatlarni bajarish uchun ishlatiladi va ularni tashqaridan taqdim etish mantiqiy emas.