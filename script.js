const input = document.getElementById("userInput");

const lettersArr = [];

const val = input.value;
const reverseVal = "";

const check = () => {

    // looping through the input value, and insert each letter in to the lettersArr 
    for(let i =0; i <= val.length; i++ ) {
        lettersArr.push(val[i]);
    }
    

    input.value=null;
}