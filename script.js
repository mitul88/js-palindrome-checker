const input = document.getElementById("userInput");

const lettersArr = [];

const val = input.value;
const reverseVal = "";

const check = () => {

    // looping through the input value, and insert each letter in to the lettersArr as stack
    for(let i =0; i <= val.length; i++ ) {
        lettersArr.push(val[i]);
    }
    // looping through lettersArr, taking each item and concat them in reverse and storing in reverseVal 
    for(let i; i <= val.length; i++) {
        reverseVal += lettersArr.pop();
    }

    input.value=null;
}