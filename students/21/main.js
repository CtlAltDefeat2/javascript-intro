//
// File: main.js
// Date: 5/25/2022
// 

const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    // TODO...
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}

const ex3 = () => {
    // TODO...
    const array1 = [1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array1, array2));

const array3 = [1, 2];
const array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(interleave(array3, array4));
}

const ex4 = () => {
    console.log(palidrome('radar'));
    console.log(palidrome('month'));
}

const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    console.log(thisCounter(str))
}

const ex6 = () => {
    let array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}

const ex7 = () => {
    let n = [1, 3, 6, 3, 6, 10];
    console.log(sort(n));
}

const ex8 = () => {
    let words = "Count the words in this string";
    console.log(countWords(words));
}

const ex9 = () => {
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const ex10 = () => {
    var a = "this counts the number of words that end in s";
    console.log(countS(a));
}

const ex11 = () => {
    let array = ['this', 'is',1,3,2.1,'a','test'];
    console.log(countIt(array, "numbers"));
    console.log(countIt(array, "strings"));
    console.log(countIt(array, "decimals"));
}

//June 9th Exercises

const exJ6 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
let result = countItems(array);
console.log("Number of Integers: " + result.numIntegers)
console.log("Number of Decimal Numbers: " + result.numDecimals)
console.log("Number of Strings: " + result.numStrings)



}

const exJ1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countDecimals(array));

}

const exJ2 = () => {
    const array = [12, 55, "2", 22, 11, true];
    console.log(minNumber(array));
}

const exJ3 = (array) => {
    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));

}

const exJ4 = () => {
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const exJ5 = () => {
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    console.log(countIt2(array));
}


//
// Your functions here...
//

//used in ex1 & ex 11
const countNumbers = (array) => {
    let retval = 0;
    // TODO...
    for(let i = 0; i<array.length; i++){
        if(typeof(array[i]) === 'number'&& array[i] % 1 == 0){
            retval++
        }
    }
    return retval;
}
//used in ex11
const countStrings = (array) => {
    let retval = 0;
    // TODO...
    for(let i = 0; i<array.length; i++){
        if(typeof(array[i]) === 'string'){
            retval++
        }
    }
    return retval;
}
//used in ex11
const countDecimals = (array) => {
    let retval = 0;
    // TODO...
    for(let i = 0; i<array.length; i++){
        if(array[i] % 1 != 0 && typeof(array[i])==='number'){
            retval++
        }
    }
    return retval;
}

const minNumber = array => {
   let minNumber = array[0]
    for(let i = 0; i<array.length; i++){
        if(array[i]<minNumber&&typeof(array[i])==='number'){
            minNumber=array[i]
        }
    }
    return minNumber
}

const interleave = (array,array2) => { 
let retval = new Array
let i = 0
        if(array.length !== array2.length){
            throw new Error('Arrays are not equal in length')
        }
        else{
            while(i<array.length){
                let a = array[i]
                let b = array2[i]
                let c = a+b
                retval += c
                i++
            }
        }
        return retval
 }
    
const palidrome = (string) => {
    
    let array = Array.from(string)
    let reversed = array.reverse()
    let revString = reversed.toString()
    let revString2 =revString.replaceAll(',','')
    let isPalindrome = true
    if(revString2!==string){
        isPalindrome=false
    }
    return isPalindrome
}

const thisCounter = (string) => {
    let array = string.split(' ')
    let thisCount = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]=='this'){
            thisCount++
        }
    }
    return 'The word \"this\" occurs: ' +thisCount +' times.'
}

const shortestString = (array) => {
    let shortest = array[0]
    for(let i = 0; i<array.length; i++){
        if(array[i].length<shortest.length){
            shortest=array[i]
        }
    }
    return shortest
}

const longestString = (array) => {
    let longest = array[0]
    for(let i = 0; i<array.length; i++){
        if (array[i].length>longest.length){
            longest = array[i]
        }
    }
    return longest
}

const sort = (array) => {
    array.sort(function(a,b){return a-b})
    return array
}

const countWords = (string) => {
    let array = string.split(" ")
    let wordCount = array.length
    return wordCount
}

const countLetters = (array) => {
    let letterCount = 0
    for (const i of array) {
        letterCount += i.length
    }
    return 'The number of letters in this array is: ' + letterCount
}

const countS = (string) => {
    let sCount = 0
    let words = string.split(" ")
    for (const i of words) {
        if(i.endsWith('s'))
        sCount++
    }
    return 'The number of words that end in S is: '+sCount
}

const numbersOnly = (array) => {
    let numbers = new Array
    for (const i of array) {
        if(typeof(array[i]) ==="number")
        numbers.push(array[i])
    }
    return numbers
}

const countIt = (array, string) => {
    let retval = " "
    if(string=="numbers"){
       retval = countNumbers(array)
    }

    if(string=="strings"){
        retval = countStrings(array)
    }

    if(string=="decimals"){
       retval = countDecimals(array)
    }
    return retval
}

const countIt2 = (array) => {
    let retval = ""
    let numbers ="The number of numbers is "+ countNumbers(array)
    let strings = "The number of strings is "+countStrings(array)
    let decimals = "The number of decimals is "+countDecimals(array)
   
   retval = numbers + '\n' + strings + '\n' + decimals
    return retval
}






const countItems = (array) => {
    let numbers = countNumbers(array)
    let strings = countStrings(array)
    let decimals = countDecimals(array)

    let result = {
        numIntegers: numbers,
        numDecimals: decimals, 
        numStrings: strings
    }
    return result
}

const main = async () => {
    exJ6()
}

main();
