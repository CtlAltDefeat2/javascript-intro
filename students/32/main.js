const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
  }
  
    const ex2 = () => {
    const array = [12, 55, 2, 11];
    console.log(minNumber(array));
    
   
  }
  
    const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));

  }
  
  const ex4 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
  }
  const ex5 = () => {
    let wordArray = "today this is a this is a this is a test.";
    const result = countOccurrence(wordArray, "this")
    console.log(result);
    
  }
    const ex6 = () => {
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
  }
  const ex7 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
  }
  const ex8 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
  }
  const ex9 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
  }
  const ex10 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
  }
  const ex11 = () => {
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
  }



  const countNumbers = (array) => {
    let retval = 0;
    for(let i of array){
        if(typeof(i)=='number'){
            retval++
        }
  
    }
  
    return retval;
}


  const minNumber = (array) => {
    let retval = array[0];
    for(let i of array){
        if(i<retval){
            retval=i;
           
        }
                        
   }

    return retval;
} 
  


  const interleave = (array1, array2) => {
    let retval= "";
    if(array1.length != array2.length){
        console.log(`ERROR: Array length mismatch`)
    }
    else{
        for(let i=0; i < array1.length; i++){
                retval += array1[i] + array2[i]
        }
    }return retval;
  }

   
  const countOccurrence = (text, searchWord) => {
    let retval = "";
    let wordCounter = 0;
    const wordArray = text.split(" ");
    for(let word of wordArray) {
        if(searchWord == word) {
            wordCounter++
        }
    }
    retval = "This appears: " + wordCounter+ " times"
    return retval;
 }


    const longestString = (array) => {
    let retval = array.sort((a,b) => a.length - b.length);
       return retval[array.length - 1];
   
    
 }

   
  const main = async () => {
    ex6();
  }
  
  main();
