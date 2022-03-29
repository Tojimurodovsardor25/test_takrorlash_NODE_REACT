/*
---------------------------------------------------------------------
======================================= 3 - Bob 9 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Parametrlarni qiymat va mos yozuvlar bo'yicha o'tkazish --->> */

// Parametrlarni qiymat bo'yicha o'tkazish

// Satrlar, raqamlar, mantiqiy qiymatlar funktsiyaga o'tkaziladi. Boshqacha qilib aytganda, funktsiyaga qiymat o'tkazilganda, bu funktsiya ushbu qiymatning nusxasini oladi. Keling, bu amaliy jihatdan nimani anglatishini ko'rib chiqaylik:

// function change(x){
//     x = 2 * x;
//     console.log("x o'zgarishi:", x);
// }
 
// var n = 10;
// console.log("n o'zgartirishdan oldin:", n); // n o'zgartirishdan oldin: 10
// change(n);                          // x o'zgarishi: 20
// console.log("n o'zgartirilgandan keyin:", n);  // n o'zgartirilgandan keyin: 10

/* 
O'zgartirish funksiyasi ba'zi sonlarni oladi va uni ikki barobarga oshiradi. O'zgartirish funksiyasi chaqirilganda, unga n raqami uzatiladi. Biroq, funktsiyani chaqirgandan so'ng, funktsiyaning o'zida parametr qiymati oshgan bo'lsa-da, n soni o'zgarmaganligini ko'ramiz. Chunki o'zgartirish funksiyasi chaqirilganda u n o'zgaruvchisi qiymatining nusxasini oladi. Va bu nusxadagi har qanday o'zgarishlar n o'zgaruvchining o'ziga ta'sir qilmaydi.
*/

// Malumot - (havola) bo'yicha o'tish

// Ob'ektlar va massivlar havola orqali uzatiladi. Ya'ni, funksiya ularning nusxasini emas, balki ob'ekt yoki massivning o'zini qabul qiladi.

// function change(user){
//     user.name = "Abdullox";
// }
 
// var bob ={ 
//     name: "Sardor"
// };
// console.log("o'zgartirishdan oldin:", bob.name);    // Sardor
// change(bob);
// console.log("o'zgartirilgandan keyin:", bob.name);     // Sardor

// Xuddi shu narsa massivlar uchun ham amal qiladi:

/* function change(array){
    array[0] = 8;
}
function changeFull(array){
    array = [9, 8, 7];
}
 
var numbers = [1, 2, 3];
 
console.log("o'zgartirishdan oldin:", numbers);     // [1, 2, 3]
change(numbers);
console.log("o'zgartirilgandan keyin:", numbers);      // [8, 2, 3]
changeFull(numbers);
console.log("o'zgartirilgandan keyinTo'liq:", numbers);  // [8, 2, 3] */