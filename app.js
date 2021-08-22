// function to split ,reverse the string, join it and return the value
function reverseString(string) {
    var listOfChars = string.split("");
    var reverseList = listOfChars.reverse();
    reversedString = reverseList.join("");
    return reversedString;
    // Return str.split('').reverse().join('')    this will give the same output  
}

// console.log (reverseString("hello"));



//--function to check palindrome or not using previous function .
function isPalindrome(string) {
    var reverse = reverseString(string);

    return string === reverse;
}

// console.log(isPalindrome("mom"));
// console.log(isPalindrome("racecar"));

//----

//--converting date to string

function converDateToString(date) {
    var dateString = {
        day: '',
        month: '',
        year: ''
    };

    if (date.day < 10) {
        dateString.day = "0" + date.day;
    } else {
        dateString.day = date.day.toString();
    }

    if (date.month < 10) {
        dateString.month = "0" + date.month;
    } else {
        dateString.month = date.month.toString();
    }
    dateString.year = date.year.toString();
    

    return dateString;
    
}


function getAllDatesFromat( date){
    var dateString = converDateToString(date)

    var ddmmyyyy = dateString.day + dateString.month + dateString.year;
    var mmddyyyy  = dateString.month + dateString.day  + dateString.year;
    var yyyymmdd  = dateString.year + dateString.month + dateString.day;
    var ddmmyy = dateString.day + dateString.month + dateString.year;
    var mmddyy = dateString.month + dateString.day  + dateString.year;
    var yymmdd = dateString.year + dateString.month + dateString.day;

    return [ ddmmyyyy , mmddyyyy , yyyymmdd , ddmmyy , mmddyy , yymmdd ];
}

var date = {
    day: 5,
    month: 3,
    year: 2020
}

console.log(getAllDatesFromat(date))