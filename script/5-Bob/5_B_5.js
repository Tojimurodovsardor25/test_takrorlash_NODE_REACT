/*
---------------------------------------------------------------------
======================================= 5 - Bob 5 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Meros olish --->> */

// Ba'zi sinflar boshqalardan meros bo'lishi mumkin. Meros, olingan sinflardagi kodlar miqdorini kamaytirish imkonini beradi. Masalan, quyidagi darslarni oling:

// class Person {
//     name;
//     age;

//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// class Employee {
//     name;
//     age;
//     company;
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
//     work() {
//         console.log(`${this.name} Epamda ${this.company}`);
//     }
// }

// const tom = new Person();
// tom.name = "Abdulloh";
// tom.age = 20;
// const bob = new Employee();
// bob.name = "Bob";
// bob.age = 21;
// bob.company = "ishlaydi";
// tom.print();    // Name: Abdulloh  Age: 20
// bob.print();    // Name: Mirjalol  Age: 21
// bob.work();     // Mirjalol Epamda ishlaydi

// Bu erda ikkita sinf aniqlanadi - Person, shaxsni ifodalovchi va Employee, xodim - (ishchi)ni ifodalovchi. Ikkala sinf ham ajoyib ishlaydi, biz ularning ob'ektlarini yaratishimiz mumkin, lekin biz shuningdek, Employee klassi Person sinfining funksionalligini takrorlashini ko'ramiz, chunki ishchi ham shaxs bo'lib, buning uchun biz name va age xususiyatlarini va print etish usulini ham aniqlashimiz mumkin.

// Meros bir sinfga boshqa sinflarning funksiyalarini avtomatik ravishda olish imkonini beradi va shu bilan kod miqdorini kamaytiradi. Bir sinfni boshqasidan meros qilib olish uchun extends - (kengaytirilgan yoki uzaytirilgan) kalit so'zdan foydalaning:

// class Base { }
// class Derived extends Base { }

// Avlod sinf nomidan keyin extends kalit so'zi, so'ngra biz funksionallikni meros qilib olmoqchi bo'lgan sinf nomi qo'yiladi.

// Shunday qilib, keling, merosni qo'llash orqali Person  va Employee sinflarini o'zgartiramiz:

// class Person {
//     name;
//     age;

//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// class Employee extends Person {
//     company;
//     work() {
//         console.log(`${this.name} Epamda ${this.company}`);
//     }
// }

// const tom = new Person();
// tom.name = "Abdulloh";
// tom.age = 20;
// const bob = new Employee();
// bob.name = "Mirjalol";
// bob.age = 21;
// bob.company = "ishlaydi";
// tom.print();    // Name: Abdulloh  Age: 20
// bob.print();    // Name: Mirjalol  Age: 21
// bob.work();     // Mirjalol Epamda ishlaydi

// Employee sinfi endi Person sinfidan meros bo‘lib o‘tadi. Shu munosabat bilan Person sinfi asosiy yoki ota-klass, Employee sinfi esa hosila yoki nasl sinfi deb ham ataladi. Employee klassi funksionallikni shaxsdan meros qilib olganligi sababli undagi ism, yosh xususiyatlari va chop etish usulini qayta belgilashimiz shart emas. Natijada, Xodimlar sinfining kodi qisqaroq bo'lib chiqdi va dastur natijasi bir xil bo'ladi.

// Konstruktor bilan sinf merosi

// Barcha funksionallik bilan bir qatorda, olingan sinf asosiy sinf konstruktorini ham meros qilib oladi. Masalan, Person asosiy sinfida konstruktorni aniqlaymiz:

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// class Employee extends Person {
//     company;
//     work() {
//         console.log(`${this.name} Epamda ${this.company}`);
//     }
// }

// const tom = new Person("Abdulloh", 20);
// tom.print();    // Name: Abdulloh  Age: 20

// const sam = new Employee("Sardor", 20);    // meros qilib olingan konstruktor
// sam.print();    // Name: Sardor  Age: 20

// Bunday holda, Person klassi ikkita parametrli konstruktorni belgilaydi. Bunday holda, Employee sinfi uni meros qilib oladi va undan Employee ob'ektini yaratish uchun foydalanadi.

// Olingan sinfda konstruktor va super kalit so'zni aniqlash.

// Olingan sinf o'z konstruktorini ham belgilashi mumkin. Agar olingan sinf konstruktorni aniqlasa, unda asosiy sinf konstruktori chaqirilishi kerak. Super kalit so'zi hosila sinfdagi asosiy sinfning, shu jumladan asosiy sinf konstruktorining funksionalligiga murojaat qilish uchun ishlatiladi.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// class Employee extends Person {

//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
//     work() {
//         console.log(`${this.name} Epamda ${this.company}`);
//     }
// }

// const tom = new Person("Abdulloh", 20);
// tom.print();    // Name: Abdulloh  Age: 20

// const sam = new Employee("Sardor", 20, "ishlaydi");
// sam.print();    // Name: Sardor  Age: 20
// sam.work();     // Sardor Epamda ishlaydi

// Employee klassi o'z konstruktorini uchta parametr bilan belgilaydi, ularning birinchi qatori Person asosiy sinfi konstruktoriga qo'ng'iroqdir:

// super(name, age);

// Person sinfining konstruktori ikkita parametrga ega bo'lganligi sababli, unga mos ravishda ikkita qiymat uzatiladi. Bunday holda, joriy ob'ektning xususiyatlariga this orqali kirishdan oldin asosiy sinf konstruktorini chaqirish kerak.

// Asosiy sinf usullarini bekor qilish.

// Olingan sinf, konstruktorda bo'lgani kabi, asosiy sinfning usullarini bekor qilishi mumkin. Shunday qilib, yuqoridagi misolda Person sinfining print() usuli odamning ismi va yoshini chop etadi. Xodimning print() usuli kompaniyani ham chop etishini istasak nima bo'ladi? Bunday holda, biz Employee sinfida o'z print() usulimizni belgilashimiz mumkin:

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// class Employee extends Person {

//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//         console.log(`Company: ${this.company}`);
//     }
//     work() {
//         console.log(`${this.name} Epamda ${this.company}`);
//     }
// }
// const sam = new Employee("Sardor", 20, "Google");
// sam.print();    // Name: Sardor  Age: 20
//                 // Company: Epam

// Biroq, yuqoridagi kodda biz Employee sinfidagi print() usulining birinchi qatori Person sinfidagi print() usuli bilan bir xil kod ekanligini ko‘ramiz. Bu holda, bu faqat bitta satr, lekin boshqa holatda, takrorlangan kod uzoqroq bo'lishi mumkin. Va o'zimizni takrorlamaslik uchun, biz yana oddiygina shaxs orqali ota-ona sinfining bosma () usulini amalga oshirishga murojaat qilishimiz mumkin.

// super:

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// }
// class Employee extends Person {

//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
//     print() {
//         super.print();
//         console.log(`Company: ${this.company}`);
//     }
//     work() {
//         console.log(`${this.name} Epam ${this.company}`);
//     }
// }
// const sam = new Employee("Sardor", 20, "Epam");
// sam.print();    // Name: Sardor  Age: 20
//                 // Company: Epam

// Ya'ni, bu holda, qo'ng'iroq

// super.print();

// asosiy sinfdan usulni amalga oshirishga chaqiruvni ifodalaydi. Shunday qilib, this va super ning yordami bilan biz qo'ng'iroqni joriy sinf yoki uning asosiy klassi funksionalligi bilan chegaralashimiz mumkin.

// Meros va xususiy sohalar va usullar

// Meros olayotganda shuni yodda tutingki, olingan sinf shaxsiy maydonlar va usullardan tashqari asosiy sinfning istalgan funksiyasiga kirishi mumkin. Misol uchun:

// class Person {
//     #name;
//     constructor(name, age) {
//         this.#name = name;
//         this.age = age;
//     }
//     print() {
//         console.log(`Name: ${this.#name}  Age: ${this.age}`);
//     }
// }
// class Employee extends Person {

//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
//     print() {
//         super.print();
//         console.log(`Company: ${this.company}`);
//     }
//     work() {
//         console.log(`${this.#name} works in ${this.company}`);  // ! Xato - #name maydon Employeeni deb mavjud emas
//     }
// }

// Bunday holda, Person sinfidagi #name maydoni shaxsiy sifatida belgilanadi, shuning uchun u faqat shu sinfda mavjud. Xodimning hosila sinfidagi ushbu maydonga murojaat qilishga urinish, unga this.#name yoki super.#name orqali kirishdan qat'i nazar, xatolikka olib keladi.
