/*
---------------------------------------------------------------------
======================================= 4 - Bob 2 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Ob'ektlarga joylashtirilgan ob'ektlar va massivlar --->> */

// Ba'zi ob'ektlar boshqa ob'ektlarni xususiyat sifatida o'z ichiga olishi mumkin. Misol uchun, bir qator xususiyatlarga ega bo'lishi mumkin bo'lgan mamlakat ob'ekti mavjud. Ushbu mulklardan biri kapitalni ifodalashi mumkin. Ammo poytaxtda biz o'z mulklarimizni ham ajratib ko'rsatishimiz mumkin, masalan, nomi, aholisi, tashkil etilgan yili:

// var country = {
 
//     name: "Germaniya",
//     language: "Nemis tili",
//     capital:{
     
//         name: "Berlin",
//         population: 3375000,
//         year: 1237
//     }
// };
// console.log("Poytaxt: " + country.capital.name); // Berlin
// console.log("Aholi: " + country["capital"]["population"]); // 3375000
// console.log("Tashkil etilgan yil: " + country.capital["year"]); // 1237

// Bunday ichki o'rnatilgan ob'ektlarning xususiyatlariga kirish uchun biz standart nuqta belgilaridan foydalanishimiz mumkin:

// country.capital.name

// Yoki ularga massiv elementlari sifatida kiring:

// country["capital"]["population"]

// Biz aralash davolash turiga ham ruxsat beramiz:

// country.capital["year"]

// Massivlar, jumladan, boshqa obyektlarning massivlari sifatida ham foydalanish mumkin:

// var country = {
 
//     name: "Shveytsariya",
//     languages: ["nemis", "frantsuz", "italyancha"],
//     capital:{
     
//         name: "Berlin",
//         population: 126598
//     },
//     cities: [
//         { name: "Tsyurix", population: 378884},
//         { name: "Janeva", population: 188634},
//         { name: "Bazel", population: 164937}
//     ]
// };
 
// // mamlakatdan barcha elementlarni country.languages
// document.write("<h3>Shveytsariyaning rasmiy tillari</h3>");
// for(var i=0; i < country.languages.length; i++)
//     document.write(country.languages[i] + "<br/>");
     
// // country.cities dan barcha elementlarni chiqarib olish
// document.write("<h3>Shveytsariya shaharlari</h3>");
// for(var i=0; i < country.cities.length; i++)
//     document.write(country.cities[i].name + "<br/>");

// Mamlakat ob'ekti qatorlar qatorini o'z ichiga olgan tillar xususiyatiga va bir xil turdagi ob'ektlar qatorini saqlaydigan city xususiyatiga ega.