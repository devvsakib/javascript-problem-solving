let n = 12321;

if(palindrome(n)){
    console.log( n + " is a Palindrome number");
}else{
    console.log( n + " is not a Palindrome number");
}

/* function to check if a number is palindrome or not 
by reversing the number and comparing it with the original number */
function palindrome(n){
    // create a temp variable to store the value of n
    let temp = n;
    // create a variable to store the reverse of n
    let rev = 0;
    // reverse the number
    while(temp > 0){
        let lastDigit = temp % 10;
        rev = rev * 10 + lastDigit;
        temp = Math.floor(temp / 10);
    }
    // check if the reverse is equal to n
    return rev == n;
}

// using two pointers
function palindromeTwoPointer(n){
    // convert the number to string
    let str = n.toString();
    // create two pointers
    let start = 0;
    let end = str.length - 1;
    // loop through the string
    while(start < end){
        // check if the characters at the two pointers are equal
        if(str[start] != str[end]){
            return false;
        }
        // increment start and decrement end
        start++;
        end--;
    }
    return true;
}