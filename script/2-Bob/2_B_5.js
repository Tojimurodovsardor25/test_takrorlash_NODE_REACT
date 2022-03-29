/*
---------------------------------------------------------------------
======================================= 2 - Bob 5 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Ma'lumotlar transformatsiyasi --->> */

/*
Ko'pincha bitta ma'lumotni boshqasiga o'tkazish zarurati tug'iladi. Ba'zi o'zgarishlar avtomatik ravishda JavaScript orqali amalga oshiriladi. Misol uchun:
*/

// let number1 = "56";
// let number2 = 4;
// let result = number1 + number2;
// console.log(result); // 564

/*
Bu erda raqam1 o'zgaruvchisi qatorni, aniqrog'i, raqamning satr ko'rinishini ifodalaydi. 2 o'zgaruvchisi esa raqamni ifodalaydi. Va oxirida biz 60 raqamini emas, balki 564 qatorini olamiz.
*/

/*
Qo'shish paytida JavaScript-da o'zgartirishlar quyidagi printsipga muvofiq amalga oshiriladi:
*/

// Agar ikkala operand ham raqamlarni ifodalasa, u holda oddiy arifmetik qo'shish sodir bo'ladi.

// Agar oldingi shart bajarilmasa, ikkala operand ham satrlarga aylantiriladi va satrlar birlashtiriladi.

/*
Shunga ko‘ra, yuqoridagi misolda birinchi operand qator bo‘lgani uchun ikkinchi operand ham qatorga aylantiriladi va natijada biz 60 raqamini emas, “564” qatorini olamiz. olish:
*/

// let number1 = "56";
// let number2 = 4;
// let result = number1 + String(number2);
// console.log(result); // 564

/* 
String() funksiyasi qiymatning satr tasvirini olish imkonini beradi. Demak, String(2-raqam) ifodasi 2-sonning satr tasvirini oladi, yaʼni 4-sondan “4” qatorini oladi.
*/

/* 
Ammo standart xatti-harakatlar har doim ham kerakli bo'lmasligi mumkin. Masalan, yuqoridagi misolda biz qiymatlarni satr sifatida emas, balki raqamlar sifatida qo'shishni xohlaymiz. Bunday holda biz transform funktsiyalaridan foydalanishimiz mumkin.
*/

// ==================================================== parseInt() --->

// parseInt() funksiyasi satrni butun songa aylantirish uchun ishlatiladi:

// let number1 = "56";
// let number2 = 4;
// let result = parseInt(number1) + number2;
// console.log(result); // 60

/* 
Bunday holda, satr aralash tarkibga ega bo'lishi mumkin, masalan, "123salom", ya'ni bu holda raqamlar mavjud, ammo oddiy belgilar ham mavjud.
*/

// parseInt() funksiyasi konvertatsiyani amalga oshirishga harakat qiladi - u birinchi belgidan boshlab, birinchi raqamli bo'lmagan belgiga duch kelguncha raqamlarni ketma-ket o'qiydi:

// let num1 = "123hello";
// let num2 = parseInt(num1);
// console.log(num2); // 123

/* 
E'tibor bering, raqamga aylantirilgan qiymat har doim birinchi navbatda satrga aylantiriladi. Bu birinchi qarashda kutilmagan natijalarga olib kelishi mumkin:
*/

// let number1 = parseInt(0.000005);   // 0;
// console.log(number1);
 
// let number2 = parseInt(0.0000005);  // 5
// console.log(number2);

// Yuqorida parseInt funksiyasiga kasr sonlar uzatiladi va biz ikkala holatda ham 0 raqamini olishni kutamiz.Lekin 2 raqamini o'zgartirganda biz 5 raqamini olamiz.Nega?

// Yuqoridagi misol quyidagilarga teng bo'ladi:

// let number1 = parseInt(String(0.000005));   // 0;
// console.log(number1);
// let number2 = parseInt(String(0.0000005));  // 5
// console.log(number2);

// 10-6 (0,000001) dan kichik kasr sonlar uchun eksponensial belgi qo'llaniladi, ya'ni 0,0000005 soni 5e-7 ko'rinishida ifodalanadi:

	
// console.log(0.0000005);     // 5e-7

// Keyinchalik, 5e-7 raqami "5e-7" qatoriga aylantiriladi va parseInt bu qatorni raqamga aylantirishga harakat qiladi. Shunga ko'ra, chiqish 5 raqamidir.

// Xuddi shu narsa 99999999999999999999 kabi juda katta raqamlar uchun ham amal qiladi, ular ham eksponensial shaklda ifodalanadi.

/* 
================================================= NaN va isNaN --->
*/

/* 
Agar parseInt() konvertatsiya qila olmasa, u NaN (Raqam emas) ni qaytaradi, bu satr sonni ifodalamasligi va uni o'zgartirib bo'lmasligini bildiradi.
*/

// console.log(parseInt("abc"));   // NaN
// let type = typeof NaN;
// console.log(type);              // number

// Qizig'i shundaki, NaN qiymatining o'zi (raqam emas) raqam turini ifodalaydi.

/* 
IsNaN() maxsus funksiyasi qatorning raqamni ifodalashini tekshirish uchun ishlatilishi mumkin. Agar satr raqam bo'lmasa, u holda funktsiya rostni qaytaradi, agar u raqam bo'lsa, u holda noto'g'ri:
*/

// let num1 = "javascript";
// let num2 = "22";
// let result = isNaN(num1);
// console.log(result); // true - num1 raqam emas
     
// result = isNaN(num2);
// console.log(result); //  false - num2 - bu raqam

// Boshqa sanoq sistemasiga aylantirish

/* 
Yuqorida biz o'nlik sanoq sistemasida satrlarni raqamlarga aylantirishni ko'rib chiqdik. Ammo biz ikkinchi parametrdan ma'lum bir tizimdagi qatorni raqamga aylantirmoqchi ekanligimizni aniq ko'rsatish uchun foydalanishimiz mumkin. Masalan, ikkilik tizimda raqamga aylantirish:
*/

// let num1 = "110";
// let num2 = parseInt(num1, 2);
// console.log(num2); // 6

// Natijada 6 bo'ladi, chunki ikkilik tizimda 110 o'nlik sonda 6 raqamidir.

// ==================================================== parseFloat --->

// Satrlarni kasr sonlarga aylantirish uchun parseFloat() funksiyasidan foydalaniladi, u xuddi shunday ishlaydi:

// let number1 = "46.07";
// let number2 = "4.98";
// let result = parseFloat(number1) + parseFloat(number2);
// console.log(result);  //51.05