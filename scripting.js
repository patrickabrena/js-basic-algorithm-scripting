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
    // Base case: if the string is empty, return an empty string
    // to prevent throwing err of "too much internal recursion"
    if (str === "") {
      return ""; // basecase

      //since str !== "" , execute code block below
    } else {
      // Recursive case: take the last character of the string at each recursion

      // first declare the variable lastChar and inside it, store the value of the variable index which is the number of characters in the string = 1.
      //so for "hello", lastChar starts at str[4] which stores letter "o"
      let lastChar = str[str.length - 1]; // in this case it's "o".

      // second, declare the variable reservedRest which stores the recursive call.
      // the argument passed through reseverseString1 function uses the slice method.
      //
      let reversedRest = reverseString1(str.slice(0, -1));
      // Above is the recursive call with the rest of the string (excluding the last character) at each recursion.
      // the function is calling the value from str.slice(0, -1).
      // that means
      // remember slice takes two parameters
      // - first one is the index to begin extraction
      // - second one is index BEFORE which to stop extraction
      // .slice(0, 5); would extract characters from index 0-4 including index 4

      /*in this case extraction begins at index 0 and the end is -1 which counts from the end of the string. */

      // Concatenate the last character at each recursion with the reversedRest var
      return lastChar + reversedRest;
    }
  }

  // Test the function
  reverseString1("hello");
};
REVERSE_A_STRING();
