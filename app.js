'use strict'
// task 1 contamination string
function contamination(text, char) {
    let newText = [];
    // Code here ;)
    for (let i of text) {

        newText.push(char);
       
    }
    return console.log(newText.join(""));
}
// contamination("_3ebzgh4", "&");
// =====================================
// task2

var number = function (array) {
    //your awesome code here
    let newArr = [];
    if (array.length == 0)
        return newArr;
    
    for (let i = 0; i < array.length;i++) {
        newArr.push(`${i + 1}:${array[i]}`);
        
    }

    return console.log(newArr);

}
// number(['one', 'two', 'three','four']);


// =================================
// 
function maxProduct(arr) {
    // declare 2 initial variables to compare
   let  firstMax = 0;
    let secondMax = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > firstMax) {
            secondMax = firstMax; /*0=>7=> 8 */
            firstMax = arr[i]; /* 8=>9*/
        }
        else if (arr[i] > secondMax) {
            secondMax = arr[i]; /*7 */
        }
        else {
            continue;
        }
    }
    return console.log(firstMax * secondMax);
}

// maxProduct([8, 7, 9]);


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function array(string) {
   
    let result = string.split(',').slice(1, -1).join(" ");

    return result ? result : null;

    
}
// array('1,2,3,3,4');




// 1. simple string reversal
function solve(str) {
    //..

    let splitted = str.split('');
    let result = new Array(splitted.length);
    for (let i = 0; i < splitted.length; i++) {

        if (splitted[i] == ' ') {
            result[i] = ' ';
        }
    }
    let reverseOrder = splitted.length - 1;

    for (let n = 0; n < splitted.length; n++) {
        if (splitted[n] != ' ') {
            if (result[reverseOrder] == ' ') {
                reverseOrder--;

            }
            result[reverseOrder] = splitted[n];
            reverseOrder--;


        }
    }


    return result.join('');
}
// solve('your code rocks')

// 2.Odd or Even?
function oddOrEven(array) {
    let sum = 0;
    //enter code here
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (sum % 2 == 0) {
            return 'Even';
        }
        else return 'Odd';
    }
    if (sum % 2 == 0) {
        return 'even';
    }
    else return 'odd';


}

// oddOrEven([1, 2, 3]);

// 3.Sort array by string length
function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((a, b) => a.length - b.length);

};
// sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]);



// 4.Find factors of a number
function factors(x) {
    let result = [];
    for (let i = 0; i <= x; i++) {
        if (x == isNaN || Math.sign(x) === -1) {
            return -1;
        }
        else if (x % i == 0) {
            result.push(i);


        }

    }
    return result.sort((a, b) => b - a);
}
// factors(54);

// 5.Two Oldest Ages
function twoOldestAges(ages) {
    let firstOld = 0;
    let secondOld = 0;
    let newAges = [];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > firstOld) {
            secondOld = firstOld;
            firstOld = ages[i];
            newAges.push(firstOld);

        }
        else if (ages[i] > secondOld) {
            secondOld = ages[i];
            newAges.push(secondOld);
        }
        else {
            continue;
        }
    }
    return [secondOld, firstOld];
}


// 6.Between extremes
function betweenExtremes(numbers) {
    //write your code h
    return Math.max(...numbers) - Math.min(...numbers);

}

// 7. divide and conquer
function divCon(x) {
    let intSum = 0;
    let sumString = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof (x[i]) === 'number') {
            intSum += x[i];
        } else if (typeof (x[i]) === 'string') {
            sumString += Number(x[i]);
        }
    }
    return console.log(intSum - sumString);
}
// divCon([9, 3, '7', '3']);

// 8. Arithmetic progression
function arithmeticSequenceElements(a, d, n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(a);
        a += d;

    }
    return console.log(`"${newArr.join(', ')}"`);
}
// arithmeticSequenceElements(1, 2, 5);
// =========================
// 9. Convert an array of strings to array of numbers
function toNumberArray(stringarray) {
    let newArr = [];
    for (let i = 0; i < stringarray.length; i++) {
        newArr.push(Number(stringarray[i]));
    }
    return console.log(newArr);
}
// toNumberArray(["1.1", "2.2", "3.3"]);
// ======================================
// 10.Small Enough Beginner
function smallEnough(arr, limit) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= limit) {
            return true;
        }
        else if (arr[i] > limit)
            return false;
    }
}
// smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100);


