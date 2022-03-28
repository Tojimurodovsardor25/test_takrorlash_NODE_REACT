/*
---------------------------------------------------------------------
======================================= 4 - Bob 10 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Meros olish --->> */

//JavaScript merosni qo'llab-quvvatlaydi, bu bizga yangi turdagi ob'ektlarni yaratishda, agar kerak bo'lsa, ularning funksionalligini mavjudlaridan meros qilib olish imkonini beradi. Misol uchun, bizda individual foydalanuvchini ifodalovchi User ob'ekti bo'lishi mumkin. Shuningdek, xodimni ifodalovchi Xodim ob'ekti ham bo'lishi mumkin. Ammo ishchi ham foydalanuvchi bo'lishi mumkin va shuning uchun uning barcha xususiyatlari va usullariga ega bo'lishi kerak. Misol uchu


// foydalanuvchi konstruktori
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.go = function () { document.write(this.name + " ketadi <br/>"); }
//     this.displayInfo = function () {
//         document.write("Isim: " + this.name + "; yoshi: " + this.age + "<br/>");
//     };
// }
// User.prototype.maxage = 110;

// ishchi konstruktor
// function Employee(name, age, comp) {
//     User.call(this, name, age);
//     this.company = comp;
//     this.displayInfo = function () {
//         document.write("Isim: " + this.name + "; yoshi: " + this.age + "; kompaniya: " + this.company + "<br/>");
//     };
// }
// Employee.prototype = Object.create(User.prototype);

// var tom = new User("Abdulloh", 20);
// var bill = new Employee("Mirjalol", 20, "Epam");
// tom.go();
// bill.go();
// tom.displayInfo();
// bill.displayInfo();
// console.log(bill.maxage);

// U bu yerda, boshida, Foydalanuvchi konstruktorini belgilaydi va uning prototipiga maxage xususiyati qo'shiladi. Keyin Xodimning turi aniqlanadi.

// Employee - (xodim, ishchi, hizmatchi) konstruktorida Foydalanuvchi konstruktoriga quyidagi chaqiruv orqali kirish mumkin:

// User.call(this, name, age);

// Birinchi parametrni o'tkazish Employee konstruktori yaratadigan ob'ektda User konstruktor funksiyasini chaqirish imkonini beradi. Bu Foydalanuvchi konstruktorida aniqlangan barcha xossalar va usullar Employee ob'ektiga ham uzatilishini ta'minlaydi.

// Bundan tashqari, Foydalanuvchi prototipi ham meros bo'lishi kerak. Buning uchun qo'ng'iroq xizmat qiladi:

// Employee.prototype = Object.create(User.prototype);

// Object.create() usuli foydalanuvchi prototipi ob'ektini yaratishga imkon beradi, keyinchalik u Employee - (Xodim) prototipiga tayinlanadi. Shu bilan birga, agar kerak bo'lsa, biz Xodim - (Employee) prototipida qo'shimcha xususiyatlar va usullarni ham belgilashimiz mumkin.

// Meros olishda biz meros qilib olingan funksiyani qayta belgilashimiz mumkin. Misol uchun, Xodim yangi kompaniya xususiyatini usulning chiqishiga kiritish uchun Foydalanuvchidan meros qilib olingan displayInfo() usulini bekor qiladi.

// Natijada, brauzer quyidagi natijalarni beradi: