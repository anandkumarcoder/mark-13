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


//-- ex 04 -formating the string of date from previous fucntion

function getAllDatesFromat(date) {
    var dateString = converDateToString(date)

    var ddmmyyyy = dateString.day + dateString.month + dateString.year;
    var mmddyyyy = dateString.month + dateString.day + dateString.year;
    var yyyymmdd = dateString.year + dateString.month + dateString.day;
    var ddmmyy = dateString.day + dateString.month + dateString.year;
    var mmddyy = dateString.month + dateString.day + dateString.year;
    var yymmdd = dateString.year + dateString.month + dateString.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}


// console.log(getAllDatesFromat(date))

//----

//-- ex 05 checking palindrome for all date formats

function isPalindromeForAllDatesFormat(date) {
    var listOfAllDates = getAllDatesFromat(date);

    var flag = false;

    for (var i = 0; i < listOfAllDates.length; i++) {
        if (isPalindrome(listOfAllDates[i])) {
            flag = true;
            break;
        }
    }
    return flag
}



// console.log(isPalindromeForAllDatesFormat(date))

//----

//-- 06 find the next palindrome datees 

//-- leap year check

function isLeapYear(year) {
    if (year % 4000 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

// console.log (isLeapYear(2021))

//----

//----

function toGetNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;

        }

        if (month > 12) {
            month = 1;
            year++;
        }



    }
    return {
        day: day,
        month: month,
        year: year

    };
}

function getNextPalindromeDate(date){
    var ctr = 0;
    var nextDate = toGetNextDate(date);
  
    while(1){
      ctr++;
      var isPalindrome = isPalindromeForAllDatesFormat(nextDate);
      if(isPalindrome){
        break;
      }
      nextDate = toGetNextDate(nextDate);
    }
    return [ctr, nextDate];
  }


var date = {
    day: 31,
    month: 12,
    year: 2020
};



console.log( getNextPalindromeDate(date));