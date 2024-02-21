const CONVERT_CELSIUS_TO_FARENHIT = () => {
  function convertCtoF(celsius) {
    //formula is C x (9/5) + 32
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }

  let display = convertCtoF(30);
  console.log(display);
};
// CONVERT_CELSIUS_TO_FARENHIT();

const REVERSE_A_STRING = () => {
  function reverseString(str) {
    /*PLAN*/
    //init empty array that I will push the value of str at index "i" while inside a for loop
    let newArr = [];
    //init i as str.length - 1 because the number of characters returned in the string "hello" is 5 and since javascript is zero indexing, str[4] = "o" which is the last character in the string
    //for as long as i is greater than or equal to 0, push str[i] into newArr
    //for loop stops when "i" decrements to 0 which pushes str[0] = "h" into newArr
    for (let i = str.length - 1; i >= 0; i--) {
      newArr.push(str[i]);
    }
    console.log(newArr);

    //now I need to concatenate these elements and return a string by init an empty string and using += (augmented addition) to add each element into the string using another for loop just regularly iterating through newArr
    let stringReversed = "";
    for (let i = 0; i < newArr.length; i++) {
      stringReversed += newArr[i];
    }
    console.log(stringReversed);
    return stringReversed;
  }

  // reverseString("hello");

  //trying it again but with recursion
  function reverseString1(str) {
    //create base case. If str is empty return empty string to stop recursion
    if (str === "") {
      return "";
    } else {
      //recursive case: take the last character of the string
      let lastChar = str[str.length - 1];

      //store the the recursive call in a variable so I can use it in the return statement later
      let reversedRest = reverseString1(str.slice(0, -1));
      //slice method used to start extraction at string index 0 and extract everything except last character.
      //reversedRest will keep calling reverseString func with modified string without last character until it reaches an empty string. (base case) the recursion starts to unwind
      let answer = lastChar + reversedRest;
      //answer = "olleh" because concatenation at each step looks like "o" + "l" + "l" + "e" + "h"

      console.log(answer);
      return answer;
    }
  }

  reverseString1("hello");
};
// REVERSE_A_STRING();

const FACTORIALIZE_A_NUMBER = () => {
  function factorialize(num) {
    //create a base case. if num is less than or equal to 0 return 1
    if (num <= 0) {
      return 1;
    } else {
      //store the recursive call in a variable
      // num * functionCall(num - 1). this will effectively recursively call current number multiplied by current number minus one until it reaches base case
      let recursionIsConfusion = num * factorialize(num - 1);

      console.log(recursionIsConfusion);

      return recursionIsConfusion;
      //return statement will be 5 * 4 * 3 * 2 * 1
    }
  }

  let ans = factorialize(5);
  console.log(ans);
};
// FACTORIALIZE_A_NUMBER();

const FIND_THE_LONGEST_WORD_IN_A_STRING = () => {
  function findLongestWordLength(str) {
    //create a regex to match all the words in the string and store them as an array inside the var wordsArray

    let allChar = /[a-z]+/gi;
    let wordsArray = str.match(allChar);
    //init largestNum variable that I'll use in the nested forLoop I'm going to make
    // console.log(wordsArray);
    let largestNum = 0;

    //create for loop to iterate through each index of wordsArray which stores each individual word as an index
    for (let i = 0; i < wordsArray.length; i++) {
      //create nested for loop to iterate through each character of each word
      for (let j = 0; j < wordsArray[i].length; j++) {
        //create if statement that states if wordsArray[i] is greater than j, assign the value of wordsArray[i].length to the var largestNum
        if (wordsArray[i].length > largestNum) {
          largestNum = wordsArray[i].length;
        }
      }
    }
    return largestNum;
  }

  let ans = findLongestWordLength("Google do a barrel roll");
  console.log(ans);
};

// FIND_THE_LONGEST_WORD_IN_A_STRING();

const RETURN_LARGEST_NUMBERS_IN_ARRAY = () => {
  function largestOfFour(arr) {
    // let biggestInt = 0; //instead I should init biggestInt inside top level for loop as arr[i][0] (initializng the var as the first element of the sub arr)
    let biggestIntArr = [];

    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i]);
      let biggestInt = arr[i][0];

      for (let j = 0; j < arr[i].length; j++) {
        // console.log(arr[i][j]);
        //create if statement inside nested for loop to check if index j of that subArr containing numbers is larger than the first index (the initialized var)
        if (arr[i][j] > biggestInt) {
          biggestInt = arr[i][j];
        }
      }
      //push biggestInt into biggestIntArr after finding the biggest number of each sub array. that's why it needs to be in the top level for loop
      biggestIntArr.push(biggestInt);
    }
    return biggestIntArr;
  }

  let ans = largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]);
  console.log(ans);
};
// RETURN_LARGEST_NUMBERS_IN_ARRAY();

const CONFIRM_THE_ENDING = () => {
  function confirmEnding(str, target) {
    //PLAN
    // - create a regex to test if the string has the lastRegex var
    //will make create regex using the "new RegExp()" constructor function
    let lastRegex = new RegExp(target + "$");
    //target + "$" will concatenate
    let result = lastRegex.test(str);
    console.log(result);
    return result;
  }

  confirmEnding("Bastian", "tian");
};
// CONFIRM_THE_ENDING();

const REPEAT_A_STRING_REPEAT_A_STRING = () => {
  function repeatStringNumTimes(str, num) {
    /*Plan*/
    // - use a for loop and while "i" is less than the "num" variable, keep iterating
    // at each iteration,  repeatedStr = repeatedStr + str

    //return an empty string if num is not a positive numer (eg. if num is less than or equal to)
    let repeatedStr = "";
    if (num <= 0) {
      return "";
    } else {
      //have the for loop here to use augmented addition on repeatedStr to concatenate str value at every iteration

      for (let i = 0; i < num; i++) {
        repeatedStr += str;
      }
    }
    return repeatedStr;
  }

  let ans = repeatStringNumTimes("abc", 3);
  console.log(ans);
};
// REPEAT_A_STRING_REPEAT_A_STRING();

const TRUNCATE_A_STRING = () => {
  function truncateString(str, num) {
    //create if statement to check if str.length is > num
    //if it is, str.slice(0, num)
    // // - eg. str.slice(0, 8)
    // // - second param in slice is not inclusive of that index
    // // - 0 to 7 index is extracted
    //store that extraction in a variable and return it
    //concatenate that variable containing extraction with "..."
    let extraction = ""; //init var to store slice
    if (str.length > num) {
      extraction = str.slice(0, num);
      // console.log(extraction)
    } else {
      return str;
    }
    console.log(extraction + "...");
    return extraction + "...";
  }

  let ans = truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(ans);
};
// TRUNCATE_A_STRING();

const FINDERS_KEEPERS = () => {
  function findElement(arr, func) {
    //create a for loop to look through (iterate) an array and returns the first element that passes the "truth" test
    // truth test is a function
    // return the arr[i] that satisfies the function or return unndefined
    // use if statement to wrap arouund arr[i]
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        return arr[i];
      }
    }
  }

  let ans = findElement([1, 2, 3, 4], (num) => num % 2 === 0);
  console.log(ans);
};
// FINDERS_KEEPERS();

const BOO_WHO = () => {
  function booWho(bool) {
    //use typeof to check what data type the parameter is
    let check = typeof bool;
    if (check === "boolean") {
      return true;
    }
    return false;
  }

  let ans = booWho(true);
  console.log(ans);
};
// BOO_WHO();

const TITLE_CASE_A_SENTENCE = () => {
  function titleCase(str) {
    /*PLAN*/
    // init titleCaseSentence = "" outside the for loop so I can return titleCase with the augmented addition
    let titleCaseSentence = "";

    // - use regex to capture each individual word)
    let nonSpaceRegex = /\S+/g;
    let captures = str.match(nonSpaceRegex);
    // console.log(captures)
    //create for loop to iterate through captures array
    for (let i = 0; i < captures.length; i++) {
      //use toLowerCase() on each word
      let lowerCase = captures[i].toLowerCase();

      //creeate regex here within for loop to match the first letter of each string in lowerCase var that stores each word of string in all lowerCase
      let firstLetterRegex = /./;
      let firstChar = lowerCase.match(firstLetterRegex);

      //this returns first letter as a capital in each of lowerCase index (each word in the string)
      let capitalLetter = lowerCase[0].toUpperCase();

      //use replace method on lowerCase with firstChar var as the regex and capitalLetter var as the replacement
      let answer = lowerCase.replace(firstChar, capitalLetter);
      // console.log(answer)

      //use += to concatenate each answer into titleCaseSentence var
      titleCaseSentence += answer + " ";
    }
    //use replace method agaain to take out whitespace from end of string
    //creating whitespace regex using capture group so i can use replace method.
    //whitespaces one or more times at the end of the string with global flag
    let wsRegex = /(\s+$)/g;

    let result = titleCaseSentence.replace(wsRegex, "");

    // console.log(titleCaseSentence)
    console.log(result);
    return result;
  }

  titleCase("I'm a little tea pot");
};
TITLE_CASE_A_SENTENCE();
