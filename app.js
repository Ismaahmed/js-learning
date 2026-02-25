// const  magaalada = "mogdisho"
// let heer_kulka = 30
// heer_kulka = 40
// console.log(magaalada + " heer kukedu waa :" , heer_kulka + " degre ")
 

// let age = 21;
// let ismarriage = false;

// let qiimaha_shaaha = 5;

// let inta_koob = 3;

// let wadarta = qiimaha_shaaha * inta_koob;

// console.log(wadarta)


// function salaan(magaca){
//     return `haye ${magaca}, soo dhawoow fasalka js`
// }
// let fariin = salaan("Ismahaan") 
// console.log(fariin)

// function xisaabiBedka(dherer, ballac)  {
//     return dherer * ballac

// }
//  let ans = xisaabiBedka(5,8)

//  console.log(ans)





// function natigada(dhibcaha){
//     if (dhibcaha >= 50) {
//          return "Hambalyo! Waad gudubtay";
//     } else {
//          return "Waan ka xumahay, maadan gudbin.";

//     }
       

// }
// console.log(natigada(40))



// function hubiHeerKulka(degree) {
//     if ( degree > 30 ){
//         return "Aad ayay u kulushahay!";
//     } else {
//         return "Cimiladu waa caadi.";
//     }
    
    

// }


// console.log(hubiHeerKulka(40))


// function trafficLight(Light){
//     if (Light === "Guduud"){
//         return "Istaag";
//     } else if (Light === "Cagaar"){
//         return "Soco";
//     } else {
//         return "Is diyaari";
//     }
// }
// console.log(trafficLight("Cagaar"))


// function gradeSystem(dhibcaha){
//     if (dhibcaha >= 90){
//         return "A";
//     } else if (dhibcaha >= 70 && dhibcaha <= 89) {
//         return "B" ;

//     }  else {
//         return "C"
//     }

// }
// console.log(gradeSystem(89))


// function checkLogin(username,password){
//     if (username == "admin" && password == "12345" ){
//         return "Soo gal, mudane";
//     } else {
//         return "Magaca ama Password-ka waa khalad";
//     }
// }
// console.log(checkLogin("admin", "12345"))

// function maalinMiseShaqo(maalin){
//     if ( maalin == "Jimce") {
//         return "Maanta waa maalin nasasho";
//     } else {
//         return "Maanta waa maalin shaqo";
//     }

// }
// console.log(maalinMiseShaqo("sabti"))


// function qiimoDhimis(lacagta){
//     if (lacagta > 100){
//         return lacagta - 10;

//     } else {
//         return lacagta;
//     }
// }
// console.log(qiimoDhimis(120))

// let name = "ismahan"
// console.log(name.length)
// let lambaro = [10, 20, 30, 40];

// for (let i = 0; i < lambaro.length; i++) {
//     let natiijo = lambaro[i] * 2;
//     console.log(`Lambaradii oo la laba-laabay: ${natiijo}`);
// }


// function tus_liiska(magaca) {
//     return `Magaca ku jira liiska waa: ${magaca}`

// }
// let list = ["Ali", "Hani", "Ismahan"]
// for (let i =0; i<list.length; i++) {
//     let name = list[i]
//     console.log(tus_liiska(name))
// }
 
// let tartamayaasha = ["Axmed", "Hani", "Jaamac", "Leyla", "Cumar"];
// let dhibcaha = [85, 45, 92, 30, 75];
// let Total_Points = 0
// for (let i = 0; i < tartamayaasha.length; i++){
//     let name = tartamayaasha[i];
//     let dhibcoho = dhibcaha[i];
//     Total_Points += dhibcoho 

//     if (dhibcaha >= 90){
//          console.log(`Geesi: ${name} wuxuu helay Bilad Dahab ah`)

//     } else if (dhibcoho > 70 && dhibcoho <= 89){
//         console.log(`Hambalyo: ${name} wuxuu helay Bilad Qalin ah`)
//     } else if (dhibcoho > 50 && dhibcoho <= 69) {
//         console.log(`Dadaal: ${name} gudub ayuu ku dhow yahay`)
//     } else {
//         console.log(`Haray: ${name} nasiib darro wuu dhacay`)
//     }
//     console.log(`Wadarta guud ee dhibcaha tartanka waa: ${Total_Points}`)
       

// }

// let alaabta = ["Bariis", "Saliid", "Sonkor", "Baasto", "Caano"];
// let qiimaha = [15, 25, 8, 5, 12];
// let Total_Bil = 0;
// for ( let i = 0; i < alaabta.length; i++){
//     let Rashinka = alaabta[i];
//     let Rashinka_qiimahisa = qiimaha[i];
//     Total_Bil += Rashinka_qiimahisa;

//     if (Rashinka_qiimahisa > 20 ){
//         console.log(`${Rashinka} waa qaali ${Rashinka_qiimahisa}`)
//     } else if (Rashinka_qiimahisa > 10 && Rashinka_qiimahisa < 20) {
//         console.log(`${Rashinka} waa dhexdhexaad ${Rashinka_qiimahisa}`)

//     } else {
//         console.log(`${Rashinka} waa raqiis ${Rashinka_qiimahisa}`)
         

//     } 
   


//  }
//  console.log(Total_Bil)

//  if (Total_Bil > 50){
//         let qiimaha_cusub  = Total_Bil * 0.05
//         let discount = Total_Bil - qiimaha_cusub
        
//         console.log(`Hambalyo! Waxaad heshay 5% discount: ${qiimaha_cusub}`)

//         console.log(`Lacagta dhabta ah ee lagaa rabo waa: ${discount}`)
//     } else{

//           console.log(`Macaamil, wadartaadu waa: ${Total_Bil}`)
//     }



// let pin = true;
// let lacagta = 500;
// let inta_larabo = 200;
// if (pin == true){
//     if (lacagta >= inta_larabo){
//         console.log("Lacagta waa laguu dhiibayaa. Mahadsanid")
//     } else{
//         console.log("Lacag kugu filan kuma jirto koontada.")
//     }

// } else {
//     console.log("PIN-kaagu waa khaldan yahay!")
// }


// let shaqaalaha = ["Cali", "Sahra", "Nadiira", "Faysal"];
// let mushaharka = [500, 800, 450, 1200];
// let saacadaha_dheeraadka = [12, 0, 25, 5];

// let Total_Budget = 0
// for (let i = 0; i < shaqaalaha.length; i++){
//     let shaqo = shaqaalaha[i];
//     let mushar = mushaharka[i];
//     let sacad = saacadaha_dheeraadka[i];
//     let Bonus = sacad * 15;
//     let Gross_Salary = mushar + Bonus 
//     Total_Budget += Gross_Salary
//     if (Gross_Salary > 1000) {
//         console.log(`${shaqo} waa Maamule Mushahar: ${Gross_Salary}`)

//     } else {
//         console.log(`${shaqo} waa Shaqaale caadi ah ${Gross_Salary}`)
//     }
// }
// console.log(Total_Budget)


// let bakhaarka = [
//     { magaca: "Panadol", qiimaha: 5, tirada: 20, expired: false },
//     { magaca: "Vitamin C", qiimaha: 15, tirada: 0, expired: false },
//     { magaca: "Amoxicillin", qiimaha: 12, tirada: 10, expired: true }
// ];

// for (let i = 0; i<bakhaarka.length; i++){
//     if (bakhaarka[i].expired == true){
//         console.log(`${bakhaarka[i].magaca}: Ha iibin, waa dhacday!`)
//     } else if (bakhaarka[i].tirada == 0){
//         console.log(`${bakhaarka[i].magaca}: Bakhaarka waa ka dhamaatay`)

//     } else{
//         console.log(`${bakhaarka[i].magaca}: Waa la iibin karaa, qiimuhu waa ${bakhaarka[i].qiimaha}`)
//     }
// }


// let waa_soomaali = true;
// let da_da = 17
// if (waa_soomaali == true ){
//     if(da_da > 18){
//         console.log("Waad qaadan kartaa Baasaboor")
//     } else{
//         console.log("Waa inaad la timaadaa waalidkaaga")
//     }
// } else{
//     console.log("Waan ka xumahay, looma oggola ajnabiga")
// }


// let ardayda = [{magaca: "Amiira", dhibcaha: 86, joogitaanka: 90},
//               {magaca: "Bilaal", dhibcaha: 40, joogitaanka: 100}

// ]
// for (let i = 0; i < ardayda.length; i++ ){
//     let arday = ardayda[i]

//     if (arday.dhibcaha > 50){
//         if (arday.joogitaanka > 80){
//             console.log(`${arday.magaca} wuu gudbay (Excellent)`)
//         } else {
//             console.log(`${arday.magaca} wuu gudbay laakiin joogitaankiisu waa yar yahay`)
//         }
//     } else{
//         console.log(`${arday.magaca} Waan ka xumahay, waad dhacday`)
//     }
// }

// { magaca: "Cali", dhalasho: "Somali", tikidh: true, baasaboor: true, hub: false }



// let national = [
//     {magaca: "Ismahan", dhalasho:"Somali", tikidh: true, baasaboor:true, hub: false},
//     {magaca: "omar", dhalasho:"Ajnabi", tikidh: true, baasaboor:true, hub: false}
// ]

// function checkSecurity(liiska)  {
//     for (let i = 0; i < liiska.length; i++){
//         let liis = liiska[i]
//         if (liis.hub === true){
//             console.log(`${liis.magaca}: Waa la xiray! Hub baa laga helay.`)
//             // return `${liis.magaca}: Waa la xiray! Hub baa laga helay.`
//         } else {
//              if (liis.dhalasho === "Somali" || liis.dhalasho === "Ajnabi" ){
//                     if (liis.dhalasho === "Somali"){
//                             if (liis.tikidh === true){
//                                 console.log(`${liis.magaca}, kusoo dhawaad dalkaaga.`)
//                             }    else {
//                                 console.log(`${liis.magaca}, tikidh la'aan ma geli kartid.`)

//                     }
                     

//                 } else if (liis.dhalasho === "Ajnabi"){
//                     if (liis.tikidh === true && liis.baasaboor === true){
//                         console.log(`${liis.magaca}, kusoo dhawaad Soomaaliya.`)
//                     }     else {
//                          console.log(`${liis.magaca}, dukumiinti kugu filan ma haysatid.`)
//                     }
//                 }
            


//             }
//         }
//     }
        

// }
// checkSecurity(national)


// let ardayda = [
//     { magaca: "Ismahan", dhibcaha: [85, 90, 95], bixiyay: 500, rabo: 500 },
//     { magaca: "Cali", dhibcaha: [40, 50, 45], bixiyay: 300, rabo: 500 },
//     { magaca: "Xamdi", dhibcaha: [70, 80, 75], bixiyay: 100, rabo: 500 }
// ];

// //  let tatal_lacagta = 0;
// function  processStudents(liiska) {
//     let total = 0;
//     for (let i = 0; i < liiska.length; i++ ){
//         let liiska_ardayda = liiska[i];
//          total =  total + liiska_ardayda.bixiyay[0] + liiska_ardayda.bixiyay[1] + liiska_ardayda.bixiyay[2] / 3;
         

//         let Average = liiska_ardayda.dhibcaha[0] +  liiska_ardayda.dhibcaha[1] +  liiska_ardayda.dhibcaha[2];
        
//         if (liiska_ardayda.bixiyay === liiska_ardayda.rabo) {
//             if (Average >= 50){
//                 console.log(`${liiska_ardayda.magaca}: Waad gudubtay, shahaadadaaduna waa diyaar.`)
//             } else if (Average < 50 ){
//                 console.log(`${liiska_ardayda.magaca}: Lacagta waa bixisay laakiin imtixaanka waad ku dhacday.`)

//             }


//         } else{
//             console.log(`${liiska_ardayda.magaca}: Natiijadaadu waa xiran tahay ilaa aad lacagta ka bixiso.`)
//         }

 
      
//     }
//      return total


// }


// processStudents(ardayda)




// let magaca = "Ismahan";
// let da = 22;
// let arday = true
// console.log(magaca,  da,  arday)

// let city = "mogdisho";
// let students = 40;
// let online = true;
// let marks = [1, 2, 3, 4];

// console.log(city, students, online, marks)

// let  x = 20;

// let  y = 10;

// console.log(x + y);
// console.log(x - y);
// console.log(x > y);
// console.log(x == y);

// let score = 75;

// if (score >= 50) {
//     console.log("Waad gudubtay")
// } else {
//     console.log("Waad dhacday")
// }

//  let marks = 65; 
//  if (marks >= 80){
//     console.log("A")
//  } else if (marks >=50) {
//     console.log("B")

//  } else{
//     console.log("F")
//  }

// let age = 12;
// if (age >= 18 && age <= 30){
//     console.log("La aqbalay")
// } 
// else if (age <= 18 || age => 30) {
//     console.log("Lama aqbalin")

// }
// let score = 45;
// if (score >= 50 && score <= 100){
//     console.log("Pass")
// } else if (score < 50){
//     console.log("fail")
// }
 
// let hour = 22;
// if (hour >= 6 && hour <= 18 ){
//     console.log("Maalin")
// }else {
//     console.log("Habeen")
// }

// let temp = 30;
// if (temp > 25 && temp < 40){
//     console.log("Kulul")
// }else if (temp <= 25) {
//     console.log("Qabow")

// } else if(temp >= 40 ){
//     console.log("Aad u kulul")
// }