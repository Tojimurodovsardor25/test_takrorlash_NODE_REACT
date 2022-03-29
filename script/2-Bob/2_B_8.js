/*
---------------------------------------------------------------------
======================================= 2 - Bob 8 - dars ---> Start :)
---------------------------------------------------------------------
*/

/*
ILTIMOS USHBU MA'LUMOTLAR CHALA YOKI XATO BO'LSA GITHUB MUAMMOLAR BO'LIMIDA YANGI SUHBAT OCHIB TO'LDIRIB O'Z HISSANGIZNI QO'SHING, SHU YERDA EKANLIGINGIZDAN HURSANDMIZ! :)
*/

/* ==================================== Sikl yoki (halqa , doira) --->> */


// ====================================================================== >>
/* Vikipediya */

/*
Sikl (yun. kyklos — doyra) — 1) maʼlum vaqt ichida takrorlanib turadigan hodisa, jarayon va boshqalarning har bir davrasi (mas, yillik S.); 2) muayyan fanlar guruhi (mas, tarixiy S.); 3) bir butunni tashkil etuvchi bir qancha asar, maʼruza, konsert va sh.k. majmui; 4) badiiy adabiyotda — turkum; 5) musiqada — turkumli musiqa shakli.
*/
// ====================================================================== >>


/*
Sikllar ma'lum shartlarga qarab ba'zi harakatlarni ko'p marta bajarishga imkon beradi. JavaScript-da quyidagi turdagi tsikllar mavjud:
*/

/* 

for

for..in

for..of

while

do..while

*/

// Sikl for 

// For sikli quyidagi rasmiy ta'rifga ega:

//=============================================
// for ([hisoblagichni ishga tushirish]; [holat]; [hisoblagich ozgarishi]){
 
//     // harakatlar

// }

/* 
for(let i = 0; i<5; i++){
     
    console.log(i);
}
console.log("Ishning oxiri");
*/

// E'lonning birinchi qismi sikl - let i = 0 - hisoblagich - i o'zgaruvchisini yaratadi va ishga tushiradi. Va sikl bajarilgunga qadar uning qiymati 0 ga teng bo'ladi. Aslida, bu o'zgaruvchini e'lon qilish bilan bir xil.

// Ikkinchi qism - sikl bajariladigan shart: i<5. Bunday holda, sikl i qiymati 5 ga etguncha ishlaydi.

// Uchinchi qism - i++ - hisoblagichni bir marta oshiradi.

// Ya'ni ishga tushirilganda i o'zgaruvchisi 0 ga teng. Bu qiymat i<5 shartiga javob beradi, shuning uchun sikl bloki, ya'ni kod qatori bajariladi.

// Sikl blokini bajargandan so'ng uchinchi qisim siklni elon qilish - hisoblagich o'sishi bajariladi. Ya'ni, i o'zgaruvchiga teng bo'ladi 1. Bu qiymat ham shartga javob beradi, shuning uchun sikl bloki yana bajariladi. Shunday qilib, tsikl bloki i qiymati teng bo'lguncha 5 marta ishlaydi 5. Bu qiymat shartga javob BERMAYDi, shuning uchun sikl to'xtaydi va sikldan chiqadi.Dastur boshqaruvi esa sikl blokidan keyin keladigan ko'rsatmalariga o'tadi. Dasturning konsolga chiqishi:

// Siklning har bir alohida takrorlanishi iteratsiya - (takrorlash) deb ataladi.

/* Vikipediya */

/* 
Iteratsiya (lot. iteratio — takrorlash) — biror matematik amalni koʻp marta ishlatish
*/

// Shunday qilib, bu holda, 5 iteratsiya ishlaydi.

// While sikli

// Ma'lum shartlar to'g'ri bo'lsa, while tsikli bajariladi. Uning rasmiy ta'rifi:

// while(holat){
     
//     // harakatlar
// }

// Yana while yordamida 1 dan 5 gacha raqamlarni chop eting:

// let i = 1;
// while(i <=5){
     
//     console.log(i);
//     i++;
// }

// Bu yerdagi while sikli i qiymati 6 ga tenglashguncha davom etadi.


// do..while


// do siklida birinchi navbatda sikl kodi bajariladi, keyin esa while operatoridagi shart tekshiriladi. Va bu shart to'g'ri bo'lsa-da, tsikl takrorlanadi. Misol uchun:

// let i = 1;
// do{
//     console.log(i);
//     i++; 
// }while(i <= 5)

// Bu yerda sikl kodi i 5 ga aylanguncha 5 marta ishlaydi. Bunda do sikli while operatoridagi shart togri bolmagan taqdirda ham amallar kamida bir marta bajarilishini kafolatlaydi.

// continue и break Operatorlari

// Ba'zan tsikl tugashidan oldin undan chiqish kerak bo'ladi. Bunday holda biz break iborasidan foydalanishimiz mumkin:

// for(let i=1; i <= 10; i++){
      
//     if(i===6) break;
//     console.log(i);
// }
// console.log("Ishning oxiri");

// Bu sikl o'zgaruvchini i 1 dan 10 gacha oshiradi, shu jumladan, ya'ni sikl shartiga ko'ra sikl bloki 10 marta bajarilishi kerak, ya'ni 10 ta takrorlashni bajarish. Biroq, sikl blokida if(i===6) break; tekshiruvi sodir bo'lganligi sababli, i o'zgaruvchining qiymati 6 ga yetganda, bu shart break operatori yordamida tsiklning bajarilishini to'xtatadi. Va tsikl tugaydi.

// Agar bizga faqat iteratsiyani o'tkazib yuborish kerak bo'lsa, lekin tsikldan chiqmagan holda, unda biz continue iborasidan foydalanishimiz mumkin:

/* Vikipediya */

// (Konstruktor) - Dizayn (inglizcha: design — „loyiha“, „chizma“, „rasm“) — narsalar muhitini estetik va funksional sifatlarini shakllantirish maqsadiga qaratilgan loyihalash faoliyati turlarini ifodalovchi termin.

// Bunday holda, i o'zgaruvchining qiymati 6 ga teng bo'lganda, siklda if(i===6) davom konstruktsiyasi joriy iteratsiyani yakunlaydi, siklning keyingi ko'rsatmalari bajarilmaydi va o'tish keyingi iteratsiya sodir bo'ladi:

// for..in

// For..in sikli birinchi navbatda ob'ektlarni takrorlash uchun mo'ljallangan. Uning rasmiy ta'rifi:

// for (mulk in obyekt) {
//     // harakatlar
// }

/* Vikipediya */

// Obyekt (lot. objectum — narsa, anjom) — falsafiy toifa, epistemologiya doirasida haqiqatda mavjud boʻlgan, kuzatuv (oʻrganish) jarayonining va subyektning (kuzatuvchining) eʼtibori qaratilgan predmet, voqea, hodisadir.

// Ushbu tsikl ob'ektning barcha xususiyatlarini takrorlaydi. Misol uchun:

// const person = {name: "Tom", age: 37};
// for(prop in person){
      
//      console.log(prop);
// }

// for...of Sikli

// For...of tsikli ma'lumotlar to'plamini takrorlash uchun mo'ljallangan. Misol uchun, satr aslida belgilar to'plamini ifodalaydi. Va biz uni ushbu tsikl bilan takrorlashimiz mumkin:

// const website = "METANIT.COM";
// for(ch of website){
      
//      console.log(ch);
// }

// Nihoyat, halqa veb-sayt qatoridagi barcha belgilarni aylanib chiqadi va har bir joriy belgini ch o'zgaruvchisiga qo'yadi, uning qiymati keyin konsolda chop etiladi.

// Yana bir misol, massivda iteratsiya bo'lishi mumkin:

// const people = ["Tom", "Sam", "Bob"];
// for(const person of people) {
//     console.log(person);
// }

// Bunday holda, tsikl people massivining elementlari bo'ylab takrorlanadi. Har bir element ketma-ket shaxs konstantasiga joylashtiriladi. Va keyin biz uning qiymatini konsolga chop etishimiz mumkin: