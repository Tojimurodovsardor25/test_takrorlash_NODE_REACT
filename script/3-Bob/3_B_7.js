/*
---------------------------------------------------------------------
======================================= 3 - Bob 7 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Funktsiyalarni qayta aniqlash --->> */

// Funktsiyalar xatti-harakatlarni bekor qilish qobiliyatiga ega. Qayta belgilash bekor qilingan funksiya bilan bir xil nomga ega boʻlgan oʻzgaruvchiga anonim funksiyani belgilash orqali amalga oshiriladi:

// Misol uchun:

// function display(){
//     console.log("Hayirli tong");
//     display = function(){
//         console.log("Hayirli kun");
//     }
// }
 
// display(); // Hayirli tong
// display(); // Hayirli kun

// Funksiya birinchi marta ishga tushirilganda funktsiya operatorlarining asosiy bloki faol bo'ladi, xususan, bu holda "Xayrli tong" xabari ko'rsatiladi. Va displey funktsiyasi birinchi marta ishga tushirilganda, u ham qayta aniqlanadi. Shu sababli, funktsiyaga keyingi barcha qo'ng'iroqlarda uning qayta belgilangan versiyasi ishga tushadi va konsolda "Xayrli kun" xabari ko'rsatiladi.

// Ammo funktsiyani qayta belgilashda ba'zi nyuanslar - (ish) ni hisobga olish kerak. Xususan, o'zgaruvchiga funktsiya havolasini belgilashga harakat qilaylik va ushbu o'zgaruvchi orqali funktsiyani chaqiramiz:

function display(){
    console.log("Hayirli tong");
    display = function(){
        console.log("Hayirli kun");
    }
}

// qayta belgilashdan oldin funksiyaga havolani belgilash

var displayMessage = display;
display(); // Hayirli tong
display(); // Hayirli kun
displayMessage(); // Hayirli tong
displayMessage(); // Hayirli tong

// Bu erda displayMessage o'zgaruvchisi qayta aniqlanishidan oldin displey funksiyasiga havola oladi. Shuning uchun, displayMessage() chaqirilganda, displey funksiyasining bekor qilinmagan versiyasi chaqiriladi.

// Aytaylik, biz displey funksiyasini chaqirgandan so'ng displayMessage o'zgaruvchisini aniqladik:

// display(); // Hayirli tong
// display(); // Hayirli kun
// var displayMessage = display;
// displayMessage(); // Hayirli kun
// displayMessage(); // Hayirli kun

// Bunday holda, displayMessage o'zgaruvchisi displey funksiyasining bekor qilingan versiyasiga ishora qiladi.