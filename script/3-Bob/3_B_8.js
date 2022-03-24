/*
---------------------------------------------------------------------
======================================= 3 - Bob 8 - dars ---> Start :)
---------------------------------------------------------------------
*/

/* ==================================== Hoisting - (Yuk ko'tarivchi , e'lon qiluvchi , bajaruvchi) --->> */

// Funktsiyalar xatti-harakatlarni bekor qilish qobiliyatiga ega. Qayta belgilash bekor qilingan funksiya bilan bir xil nomga ega boʻlgan oʻzgaruvchiga anonim funksiyani belgilash orqali amalga oshiriladi:

// Yuk ko'tarish o'zgaruvchilarni aniqlashdan oldin ularga kirish jarayonini ifodalaydi. Bu kontseptsiya biroz g'alati tuyulishi mumkin, ammo bu JavaScript kompilyatorining qanday ishlashi bilan bog'liq. Kod ikki o'tishda tuzilgan. Birinchi o'tishda kompilyator barcha o'zgaruvchan deklaratsiyalarni, barcha identifikatorlarni oladi. Bunday holda, hech qanday kod bajarilmaydi, usullar chaqirilmaydi. Ikkinchi o'tishda haqiqiy ijro sodir bo'ladi. Va agar o'zgaruvchi to'g'ridan-to'g'ri foydalanishdan keyin aniqlangan bo'lsa ham, hech qanday xato bo'lmaydi, chunki kompilyator birinchi o'tish paytida barcha o'zgaruvchilarni biladi.

// Ya'ni, o'zgaruvchilar va funktsiyalarni to'g'ridan-to'g'ri ishlatishgacha bo'lgan ta'rifi bilan kodning ko'tarilishi bordek. Yuk ko'tarish ingliz tiliga yuk ko'tarish deb tarjima qilinadi, shuning uchun bu jarayon shunday deb ataladi.

// Ko'tarilgan - (hoisting) o'zgaruvchilar aniqlanmagan - (undefined) qilib o'rnatiladi.

// Masalan, quyidagi oddiy kodni oling:

// console.log(foo);

// Uni amalga oshirish ReferenceError xatosini keltirib chiqaradi: foo aniqlanmagan ya'ni - (undefined)

// O'zgaruvchining ta'rifini qo'shamiz:

// var c = a * b;
// var a = 7;
// var b = 3;
// console.log(c); // NaN

// NaN Note a Number - (Raqam emas yoki Raqamga e'tibor bering)

// Mana xuddi shunday holat. Ta'rifdan oldin a va b o'zgaruvchilar ishlatiladi. Ular sukut bo'yicha aniqlanmagan qilib o'rnatiladi. Va agar biz undefined bilan ko'paytirilsa, biz bir raqamni (NaN) olamiz.

// Xuddi shu narsa funksiyalardan foydalanishga ham tegishli. Biz avval funktsiyani chaqirishimiz va keyin uni aniqlashimiz mumkin:

// display();
 
// function display(){
//     console.log("Salom yuk ko'taruvchi");
// }

// Bu erda displey funksiyasi qo'ng'iroqdan keyin aniqlanganiga qaramay, xavfsiz ishlaydi.

// Ammo bu holatni funktsiya o'zgaruvchi sifatida aniqlangan holatdan farqlash kerak:

// display();
 
// var display = function (){
//     console.log("Salom yuk ko'taruvchi");
// }

// Bunday holda, biz TypeErrorni olamiz: displey funksiya xatosi emas. Birinchi o'tishda kompilyator displey o'zgaruvchisini ham oladi va uni aniqlanmagan qilib o'rnatadi. Ikkinchi o'tishda, bu o'zgaruvchi murojaat qiladigan funktsiyani chaqirish kerak bo'lganda, kompilyator chaqirish uchun hech narsa yo'qligini ko'radi: displey o'zgaruvchisi hali ham aniqlanmagan. Va xato paydo bo'ladi.

// Shuning uchun, o'zgaruvchilar va funktsiyalarni belgilashda, ko'tarilish kabi jihatning burilishlarini hisobga olish kerak.
