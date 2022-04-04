/*
---------------------------------------------------------------------
======================================= 5 - Bob 4 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Xususiyatlar va kirish usullari --->> */

// Sinf xususiyatlariga kirishda vositachilik qilish uchun so'nggi JavaScript standartlari kirish va sozlash vositalarini qo'llab-quvvatladi. Birinchidan, biz duch kelishi mumkin bo'lgan muammoni ko'rib chiqaylik:

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const tom = new Person("Abdulloh", 20);
// console.log(tom.age);   // 20
// tom.age = -15;
// console.log(tom.age);   // -15

// Person klassi ikkita xususiyatni belgilaydi - name (ism) va age (insonning yoshi), biz qiymatlarini olishimiz yoki belgilashimiz mumkin. Agar biz noto'g'ri qiymatlarni o'tkazsak nima bo'ladi? Shunday qilib, yuqoridagi misolda, yosh xususiyatiga salbiy raqam o'tkaziladi, lekin yosh salbiy bo'lishi mumkin emas.

// Ushbu vaziyatdan chiqish uchun biz faqat joriy sinfdan kirish mumkin bo'lgan shaxsiy maydon age - (yosh)ini belgilashimiz mumkin. Va uning qiymatini olish yoki o'rnatish uchun maxsus usullarni yaratish kerak:

// class Person {
//     #ageValue = 1;
//     constructor(name, age) {
//         this.name = name;
//         this.setAge(age);
//     }
//     getAge() {
//         return this.#ageValue;
//     }
//     setAge(value) { if (value > 0 && value < 110) this.#ageValue = value; }
// }
// const tom = new Person("Abdulloh", 20);
// console.log(tom.getAge());  // 20
// tom.setAge(-15);
// console.log(tom.getAge());  // 20

// Endi yosh ageValue shaxsiy maydonida saqlanadi. U setAge() usulida o'rnatilganda, o'tgan qiymat tekshiriladi. Va sozlama faqat to'g'ri qiymat o'tkazilsa sodir bo'ladi. Va getAge() usuli bu o'zgaruvchining qiymatini qaytaradi.

// Ammo boshqa yechimi ham bor - get va set kirish usullaridan foydalanish.

// // xususiy maydon ta'rifi
// #field;
// set field(value){
//     this.#field = value;
// }
// get field(){
//     return this.#field;
// }

// Har ikkala get va set usullari bir xil nomga ega. Qoidaga ko'ra, ular qandaydir shaxsiy maydonga kirishda vositachilik qilishadi. Set usuli o'rnatish uchun mo'ljallangan. Parametr sifatida yangi qiymat oladi. Keyinchalik, o'rnatilgan usulda biz bir qator o'rnatish amallarini bajarishimiz mumkin.

// Get usuli qiymat olish uchundir. Bu erda biz qiymatni qaytarishda qandaydir mantiqni aniqlashimiz mumkin.

// Keling, oldingi misolni get va set yordamida qayta yozamiz:

// class Person {
//     #ageValue = 1;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     set age(value) {
//         console.log(`Передано ${value}`);
//         if (value > 0 && value < 110) this.#ageValue = value;
//     }
//     get age() {
//         return this.#ageValue;
//     }
// }
// const tom = new Person("Abdulloh", 20);
// console.log(tom.age);
// tom.age = -15;
// console.log(tom.age);

// Shuni ta'kidlash kerakki, kirish usullari bilan ishlash odatdagi xususiyatlar bilan bir xil tarzda amalga oshiriladi. Shunday qilib, konsolga qiymat va chiqishni olish uchun qo'ng'iroq ishlatiladi:

// bunday:
// console.log(tom.age);

// bunday emas:
// console.log(tom.age());

// Ya'ni, tom.age saytiga kirishda get usuli amalda ishlaydi, bu esa ageValue maydonining qiymatini qaytaradi.

// Va qo'ng'iroq qilganda

// tom.age = -15;

// set usuli ishlaydi, unga berilgan qiymatni (bu erda -15 raqami) bitta parametr orqali oladi. Va keyin to'siq usulining o'zida biz ushbu qiymatni belgilash yoki o'rnatishni hal qilishimiz mumkin.

// Usullar, faqat o'qish uchun mo'ljallangan

// Yuqorida ham get, ham set usullari qo'llanilgan, mos ravishda maydon qiymatini ham olish, ham belgilash mumkin edi. Biroq, aslida biz ulardan faqat bittasini ishlatishimiz mumkin. Misol uchun, biz faqat get usulini qoldirib, xususiyatni faqat o'qish uchun qilishimiz mumkin.

// class Person {
//     #age = 1;
//     #name;
//     constructor(name, age) {
//         this.#name = name;
//         this.age = age;
//     }
//     //set name(value){ this.#name = value; }
//     get name() { return this.#name; }
//     set age(value) { if (value > 0 && value < 110) this.#age = value; }
//     get age() { return this.#age; }
// }
// const tom = new Person("Abdulloh", 20);
// console.log(tom.name);  // Abdulloh ’,
// tom.name = "Mirjalol";       // Bu hech narsa emas
// console.log(tom.name);  // Abdulloh   - qiymati o'zgarmagan

// Bunday holda umumiy mulk name o‘rniga #name xususiy maydoni belgilanadi. U faqat sinf ichidan o'rnatilishi mumkin, biz buni sinf konstruktorida qilamiz. Biroq, uni faqat get usuli yordamida tashqaridan o'qish mumkin. Shunday qilib, mulkni o'rnatishga harakat

// tom.name = "Bob";

// hech narsaga olib kelmaydi

// Faqat o'rnatish xususiyatlari

// Bundan tashqari, biz faqat set usulni qoldirib, xususiyatni yoziladigan qilishimiz mumkin. Masalan, faqat yozilishi mumkin bo'lgan yangi id xususiyatini qo'shamiz:

// class Person {
//     #id;
//     constructor(name, age, id) {
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }
//     set id(value) { this.#id = value; }
//     print() {
//         console.log(`id: ${this.#id}   name: ${this.name}   age: ${this.age}`);
//     }
// }
// const tom = new Person("Abdulloh", 20, 1);
// tom.print();            // id: 1   name: Abdulloh   age: 20
// tom.id = 55;            // id xususiyatining qiymatini o'rnating
// tom.print();            // id: 55   name: Abdulloh   age: 20
// console.log(tom.id);    // undefined - id xususiyati qiymatini qaytarib bo'lmaydi

// Bu yerda id xususiyat identifikatori aniqlanadi, u #id shaxsiy maydonining qiymatini belgilaydi. Ammo bu xususiyat get usuli uchun aniqlanmaganligi sababli, biz id xususiyatining qiymatini olishga harakat qilganimizda, biz undefined qabul qilamiz:

// console.log(tom.id);    // undefined - id xususiyati qiymatini qaytarib bo'lmaydi

// Maydonlarga kirishsiz xususiyatlar

// Shuni ta'kidlash kerakki, get va set usullari shaxsiy yoki shaxsiy bo'lmagan maydonlarga kirishi shart emas. Bu xususiyatlarni hisoblash ham mumkin. Misol uchun:

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() { return `${this.firstName} ${this.lastName}` }
// }
// const tom = new Person("Abdulloh", "Ali");
// console.log(tom.fullName);  // Abdulloh, Ali

// Bunday holda, fullName o'qish xususiyati aslida ikkita xususiyatning birligini qaytaradi, firstName va LastName.

// Xuddi shunday, siz yozuv uchun xususiyatni belgilashingiz mumkin:

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() { return `${this.firstName} ${this.lastName}` }
//     set fullName(value) {
//         [this.firstName, this.lastName] = value.split(" ");
//     }
// }
// const tom = new Person("Abdulloh", "Ali");
// console.log(tom.fullName);  // Abdulloh Ali
// tom.fullName = "Sarvar Sodiq";
// console.log(tom.lastName);  // Sodiq

// Bunday holda, fullName xossasining o'rnatilgan usuli parametr sifatida ba'zi bir satrni oladi va uning split usulidan foydalanib, bo'shliqqa bo'linadi va bo'sh joy bilan ajratilgan pastki qatorlar qatorini oladi. Ya'ni, nazariy jihatdan, biz "Abdulloh Ali" kabi bir narsa o'tkazilishini kutamiz va bo'shliqqa bo'lingandan so'ng, firstName xususiyati "Abdulloh" ga, lastName xususiyati esa "Ali" ga o'rnatiladi. Shuni ta'kidlash kerakki, soddalik va namoyish qilish uchun biz bu erda bo'sh satr yoki bo'sh joy bilan ikki qismga bo'linmagan satr o'tkazilganda istisnolarni hisobga olmaymiz va h.k.z.

// Natijada, yangi qiymat qabul qilinganda

// tom.fullName = "Sarvar Sodiq";

// Belgilangan usul uni bo'shliqqa ajratadi va massivning birinchi elementi firstName xususiyatiga, ikkinchisi esa lastName xususiyatiga o'tkaziladi.