const CONVERT_CELSIUS_TO_FARENHIT = () => {
  //The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

  //You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

  /*******/
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
    //Reverse the provided string and return the reversed string.

    //For example, "hello" should become "olleh".
    /******/
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
    //Return the factorial of the provided integer.

    //If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

    //Factorials are often represented with the shorthand notation n!

    //For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
    /*****/
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
    //Return the length of the longest word in the provided sentence.
    //Your response should be a number.

    /******/
    //create regex to match a-z and log matches in an array to iterate through array to check for string with most characters
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
    //Check if a string (first argument, str) ends with the given target string (second argument, target).

    //This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
    Tests;
    /******/
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
    //Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

    /*****/
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
    //Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
    /*******/
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
// TITLE_CASE_A_SENTENCE();

const SLICE_AND_SPLICE = () => {
  function frankenSplice(arr1, arr2, n) {
    //You are given two arrays and an index.

    //Copy each element of the first array into the second array, in order.
    //
    //Begin inserting elements at index n of the second array.
    //
    //Return the resulting array. The input arrays should remain the same after the function runs.
    /********/
    //two arrays and an index "n" foro the parameters
    //copy each element of arr1 into arr2 beginning the insertion at index of arr2
    //both input arrays should be untouched
    //have to copy arr2 into a new array using slice method

    let newArr2 = arr2.slice(0);
    // let resultArr = []; //don't need this because splice returns the DELETED elements
    // console.log(newArr2);

    //create for loop it iterate through arr1 and insert each iteration into newArr2 at index n + i of newArr2
    //REMEMBER: n + i otherwise each index of newArr2 is being inserted at that same  index every iteration which will return newArr2 with arr1 indexes reversed
    for (let i = 0; i < arr1.length; i++) {
      //use splice method now to insert the arr1[i] into newArr2.
      // resultArr = newArr2.splice(n + i, 0, arr1[i]); // incorrect because splice stores DELETED elements so this would return an empty arr
      newArr2.splice(n + i, 0, arr1[i]);
    }
    console.log(newArr2);
    return newArr2;
  }

  frankenSplice([1, 2, 3], [4, 5, 6], 1);
};
// SLICE_AND_SPLICE();

const FALSY_BOUNCER = () => {
  // Remove all falsy values from an array. Return a new array; do not mutate the original array.

  // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  /*******/
  function bouncer(arr) {
    //init resultArr to empty arr so I can push values that are true in it
    let resultArr = [];

    //create for loop to iterate through arr
    for (let i = 0; i < arr.length; i++) {
      //create if statement to check if value at arr[i] exists, push it into resultArr
      if (arr[i]) {
        resultArr.push(arr[i]);
      }
    }
    console.log(resultArr);
    return resultArr;
  }

  bouncer([7, "ate", "", false, 9]);
};
// FALSY_BOUNCER();

const WHERE_DO_I_BELONG = () => {
  //Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

  //For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
  /*******/
  //look and geeks for geeks bubble sort
  //bubble sort iterates through an array and compares current index to current index + 1 and puts the index wth higher value on the right
  //not suitable for larger data types, average case and worst care are awful
  //Time Complexity = O(N^2) or QUADRATIC TIME
  function getIndexToIns(arr, num) {
    // bubble sort method
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        // the arr.length - 1 - i is used to ensure the loop doesn't unnessecarily check elements that have already been sorted
        if (arr[j] > arr[j + 1]) {
          //need to make a temporary variable to store the 5 so I can change arr[j] + 1 to 5 and so and so forth
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr); // [ 3, 3, 5, 20 ]
    //create new forLoop with sorted arr
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;
      }
    }
    return arr.length;
  }

  getIndexToIns([5, 3, 20, 3], 5);
};
// WHERE_DO_I_BELONG();

const MUTATIONS = () => {
  const mutation = (arr) => {
    // turn in lowercase with toLowerCase method ()
    let a = arr[0].toLowerCase();
    let b = arr[1].toLowerCase();
    //since we're comparing the first string to the second string  it shoudl be for as long as "i" is less than b.length
    for (let i = 0; i < b.length; i++) {
      // indexOf() returns the position(index number) of the first occurrence of a value in a string
      if (a.indexOf(b[i]) < 0) {
        //if indexOf(b at "i") is less than zero, return false REMEMBER -1 is returned if argument doesn't exist
        return false;
      }
    }
    return true;
  };
  let ans = mutation(["hello", "Hello"]);
  console.log(ans);
};
// MUTATIONS();

const CHUNKY_MONKEY = () => {
  function chunkArrayInGroups(arr, size) {
    //first init my result array and and my temp array
    //result array is going to the temp array pushed inside it

    let result = [];
    let temp = [];

    //create for loop to iterate through the arr
    for (let i = 0; i < arr.length; i++) {
      //no matter what i'll be pushing arr[i] at each iteration into the temp array
      temp.push(arr[i]);

      //now create if statement with the condition if temp.length == size or if i == arr.length - 1 (if i equals the last index of the array) push the temp array into the result array
      if (temp.length === size || i === arr.length - 1) {
        result.push(temp);
        //REMEMBER: don't forget to reset temp to empty for the next set of numbers or indexes
        temp = [];
      }
    }
    console.log(result);
    return result;
  }

  chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h"], 3);
};
CHUNKY_MONKEY();
