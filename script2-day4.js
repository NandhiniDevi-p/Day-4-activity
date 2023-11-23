//----------------Programs in arrow function---------------------

//---------------------Question 01---------------------------------

// a) Print odd numbers in an array
const arr = [1, 2, 3, 4, 5, 55, 6, 7, 8, 9, 10];
const a = (odd) => {
    for (let i = 0; i < odd.length; i++) {
        if (odd[i] % 2 !== 0) {
            console.log(odd[i]);
        }
    }
};
a(arr);
//-----------------------------------------------------------------

//------------------------Question 03------------------------------

// c ) Sum of all numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
const a = (add) => {
    for (let i = 0; i < add.length; i++) {
        sum = sum + add[i];
    }
    console.log(sum);
};
a(arr);
//------------------------------------------------------------------

//--------------------------Question 04-----------------------------

// d ) Return all the prime numbers in an array 
let n = [7, 2, 6, 71, 17, 19, 62, 53, 74];
(function (num) {
    for (let i = 0; i < num.length; i++) {
        let sum = 0;
        for (let j = 1; j <= num[i]; j++) {
            if (num[i] % j === 0) {
                sum = sum + 1;
            }
        }
        if (sum === 2) {
            console.log(num[i]);
        }
    }
})(n);
//--------------------------------------------------------------------

//---------------------------Question 05------------------------------

// e ) Return all the palindromes in an array
let arr = ["nandhini", "level", "devi", "deed"];
const a = (pal) => {
    let result = [];
    for (let i = 0; i < pal.length; i++) {
        let val = pal[i].split("").reverse().join("");
        if (val === pal[i]) {
            result.push(pal[i]);
        }
    }
    return result;
};
let palindromes = a(arr);
console.log(palindromes);
//---------------------------------------------------------------------

//----------------------------Completed--------------------------------