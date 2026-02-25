

// let x = 5;
// let y = 10;
// x = y;
// y = 20;
// console.log(x)

// let number = 8;

// if (number % 2  === 0){
//     console.log("event")
// }else{
//     console.log("add")
// }

// let number = -5;

// if (number > 0){
//     console.log("positive")
// } else if (number < 0){
//     console.log("nagative")
// } else {
//     console.log("zero")
// }

// let score = 85;
// if (score >= 90){
//     console.log("A")
// } else if (score >= 80){
//     console.log("B")

// }else if (score >= 70){
//     console.log("C")
// }else{
//     console.log("fail")
// }


// for (let i = 1; i < 20; i++){
//       if (i  % 2 === 0){
//         console.log(i ,"even");
        
//     } else{
//         console.log(i ,"odd");
        
//     }
// }
  

// for (let i = 1; i <30; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     } else if (i % 5 === 0){
//         console.log("Buzz");
        
//     } else if (i % 3 === 0){
//         console.log("Fizz")
        
//     } else{
//         console.log(i);
        
//     }
// }


// for (let i = 1; i <50; i++){
//     if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
//         console.log("EvenFizzBuzz")

//     } else if (i % 2 === 0 && i % 3 === 0){
//         console.log("EvenFizz")
//     } else if (i  % 2 === 0 && i % 5 === 0){
//         console.log("EvenBuzz")
//     } else if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     } else if (i % 2 === 0){
//         console.log("even");
        
//     } else if (i % 3 === 0){
//         console.log("Fizz");
        
//     } else if (i % 5 === 0){
//         console.log("Buzz");
        
//     } else{
//         console.log(i);
        
//     }

// }

// for (let i = 1; i < 30; i++){
//     let prime = (i === 2 || i === 3 ||i === 5 || i === 7 || i === 11 || i === 13 || i === 17 || i === 19 || i === 23 || i === 29  )
//     if ( prime && i % 2 === 0 &&   i % 3 === 0 &&   i % 5 === 0 ){
//         console.log("PrimeEvenFizzBuzz");
        

//     } else if ( prime && i % 2 === 0 &&  i % 3){
//         console.log("PrimeEventFizz");
        
//     } else if ( prime && i % 3 === 0 &&  i % 5){
//         console.log("PrimeFizzBuzz");
        
//     } else if ( prime && i % 3 === 0 &&   i % 5){
//         console.log("EventFizzBuzz");
        
//     }  else if ( prime && i % 2 === 0){
//         console.log("PrimeEvent");
        
//     }  else if ( prime && i % 3 === 0){
//         console.log("PrimeFizz");
        
//     }  else if ( prime && i % 5 === 0){
//         console.log("PrimeBuzz");
        
//     } else if (i % 2 === 0 && i % 3 === 0){
//         console.log("EventFizz");
        
//     } else if (i % 2 === 0 && i % 5 === 0){
//         console.log("EventBuzz");
        
//     } else if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
        
//     } else if (i % 2 === 0 ){
//         console.log("Event");
        
//     } else if (i % 3 === 0 ){
//         console.log("Fizz");
        
//     }else if (i % 5 === 0 ){
//         console.log("Buzz");
        
//     } else{
//         console.log(i);
        
//     }
// }


for (let i = 1 ; i < 50; i++){
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
        console.log("mega");
        
    }else if (i % 2 === 0 && i % 3 === 0) {
        console.log("EventFizz");
        
    } else if (i % 2 === 0 && i % 5 === 0){
        console.log("EventBuzz");
        
    } else if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        
    } else if (i % 2 === 0){
        console.log("Event");
        

    } else if (i % 3 === 0) {
        console.log("Fizz");
        
        
    } else if (i % 5 === 0){
        console.log("Buzz");
        
    } else{
        console.log(i);
        
    }

}