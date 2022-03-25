/*
---------------------------------------------------------------------
======================================= 4 - Bob 4 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Usul va xususiyatlarning mavjudligini tekshirish va sanab o'tish --->> */

// Ob'ektda yangi xususiyatlar va usullarni dinamik ravishda aniqlashda, ulardan foydalanishdan oldin bunday usullar va xususiyatlar mavjudligini tekshirish muhim bo'lishi mumkin. Buning uchun javascriptda in operatoridan foydalanish mumkin. U quyidagi sintaksisga ega: 

// "mulk|usuli" in obyekt

// qo'shtirnoq ichida xususiyat yoki usulning nomi, in dan keyin esa - ob'ekt nomi. Agar bir xil nomdagi xususiyat yoki usul mavjud bo'lsa, operator rost ya'ni true ni qaytaradi. Agar yo'q bo'lsa, false ni qaytariladi.

// Masalan, ob'ektning bir qator xossalari bor-yo'qligini bilib olaylik:

// const user = {};
// user.name = "Abdulloh";
// user.age = 20;
// user.print = function(){

//     console.log(this.name);
//     console.log(this.age);
// };
// const hasNameProp = "name" in user;
// console.log(hasNameProp); // true - name xususiyati user - foydalanuvchida

// const hasWeightProp = "weight" in user;
// console.log(hasWeightProp); // false - User - foydalanuvchi weight - (vazn) deb ataladigan xususiyat yoki usulga ega emas


// Foydalanuvchi ifodasidagi “name” dan foydalanib, foydalanuvchi obyektida “name” xususiyati bor yoki yo‘qligini tekshiramiz va tekshirish natijasini hasNameProp doimiysiga o‘tkazamiz. Keyinchalik, shunga o'xshash tarzda, biz wheight - (vazn) xususiyati mavjudligini tekshiramiz.

// Xuddi shunday, siz usullarning mavjudligini tekshirishingiz mumkin:

// const hasPrintMethod = "print" in user;
// console.log(hasPrintMethod); // true - foydalanuvchi print - (chop etish) usuliga ega

// Muqobil yo'l - undefined - (aniqlanmagan) qiymatdan foydalanish. Agar xususiyat yoki usul undefined - (aniqlanmagan) bo'lsa, u xususiyat yoki usul aniqlanmagan:

// const hasNameProp = user.name!==undefined;
// console.log(hasNameProp); // true
// const hasWeightProp = user.weight!==undefined;
// console.log(hasWeightProp); // false

// Ob'ektlar Ob'ekt turini ifodalaydi va shuning uchun uning barcha usullari va xususiyatlariga ega bo'lganligi sababli, ob'ektlar Object - (Ob'ekt) turida aniqlangan hasOwnProperty() usulidan ham foydalanishi mumkin:

// const hasNameProp = user.hasOwnProperty("name");
// console.log(hasNameProp); // true
// const hasPrintMethod = user.hasOwnProperty("print");
// console.log(hasPrintMethod); // true
// const hasWeightProp = user.hasOwnProperty("weight");
// console.log(hasWeightProp); // false

// Xususiyatlari va usullarini takrorlash

// For tsikli yordamida biz oddiy massiv kabi ob'ektni takrorlashimiz va uning barcha xossalari va usullarini hamda ularning qiymatlarini olishimiz mumkin:

// const tom = {
//     name: "Abdulloh",
//     age: 20,
//     print(){
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// };

// for(const prop in tom) {
//     console.log(prop, " : ", tom[prop]);
// }

// Va ishga tushirilganda, brauzer konsoli quyidagi chiqishni ko'rsatadi:

/* 

name : Tom
age : 26
print : print(){
    console.log(`Name: ${this.name}  Age: ${this.age}`);
}

*/

// Object.entries, Object.keys, Object, values funktsiyalar

// Object.entries, Object.keys va Object,values ​​qo'shimcha funktsiyalaridan foydalanib, siz ob'ektning barcha xususiyatlarini (shu jumladan usullarni) va ularning qiymatlarini olishingiz mumkin.

// Object.entries()

// Object.entries() funksiyasi ob'ektni parametr sifatida oladi va har bir xususiyat-qiymat juftligi massivni ifodalovchi xususiyat_nomi-qiymat juftliklari qatorini qaytaradi. Misol uchun:

// const tom = {
//     name: "Abdulloh",
//     age: 26,
//     print(){
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// };

// for(const prop of Object.entries(tom)) {
//     console.log(prop);
// }

/* ["name", "Tom"]
["age", 26]
["print", ƒ] */

// Object.keys()

// Object.keys() funksiyasi ob'ektning barcha xossalari nomlari qatorini olish imkonini beradi. Masalan, yuqorida belgilangan tom ob'ektini oling:

// const tom = {
//     name: "Abdulloh",
//     age: 26,
//     print(){
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// };
//  console.log(Object.keys(tom)); // ["name", "age", "print"]

//  Shunga ko'ra, siz ushbu to'plamni takrorlashingiz va xususiyat qiymatlarini olishingiz mumkin:

// for(const prop of Object.keys(tom)) {
//     const value = tom[prop];    // nom bo'yicha mulk qiymatini oling
//     console.log(prop,value);
// }

// Konsolga chiqishi:

/* 

name Tom
age 26
print ƒ print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }

*/

// Object.values()

// Object.values() funksiyasi ob'ektning barcha xossa qiymatlarini o'z ichiga olgan massivni qaytaradi:

// const tom = {
//     name: "Abdulloh",
//     age: 26,
//     print() {
//         console.log(`Name: ${this.name}  Age: ${this.age}`);
//     }
// };
// console.log(Object.values(tom)); // ["Tom", 26, print()]