// let   stringVariable = 'string characters';
// const numberVariable =  1 / 5;
// const booleanVariable = true; // or false
// const undefinedVariable = undefined;
// const nullVariable = null;
// const objectVariable = []; // array
// let   cost = 1000;
// const sitename = "ember";


// // let age = 20;

// // let location = "lagos"
// // // console.log(typeof age);

// // // if (age >= 18 && typeof age === "number"){
// // //     console.log("eligible for drivers license");
// // // } else {
// // //     console.log("Invalid value or age range");
// // // }



// // switch (location) {
// //     case "bayelsa":
// //         console.log("indigene");
// //         break;
// //     default:
// //         console.log('not an indigene');
// // }

// // let num = 19;

// let i = 0;
// // while loop
// while ( i < 19 ) {
//     i++
//     console.log(i, "this is while loop result");
// }
// // do while loop
// i = 0;
// do {
//     console.log(i, "this is do while loop result");
//     i++;
// } while ( i < 19 );
// // for loop.
// for ( i = 1; i < 19; i++ ){
//     console.log("for loop result", i);
// }

// function sum ( a, b ) {
//     return a + b;
// }
// console.log(sum(5, 2));

let arrayNum = [10, 12, 18, 20,  14, 16, 30];

function highestNum (numbers) {
    let highestNum = numbers[0];

    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > highestNum) {
            highestNum = numbers[i];
            console.log(i, 'iteration the highest number is ->', highestNum, "and the array index position is ->",  numbers[i]);
            console.log('ITERATION END');
            console.log('ITERATION START');
        }
        if ( numbers[i] < highestNum ) {
            console.log(i, "the iteration where the codition is not met");
        }
    }
    return highestNum;
}

console.log("the highest number in the array is ->", highestNum(arrayNum));

// i += 1 or i = i + 1 

let mobileBtn = document.getElementById('#mobileBtn');

console.log(mobileBtn);

// for (i = 0; i < arrayNum.length; i++){
//     let arrayIndex = arrayNum[i];
//     console.log(arrayIndex);
// }





