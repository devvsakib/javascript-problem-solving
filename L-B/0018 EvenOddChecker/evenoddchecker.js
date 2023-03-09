function evenOddChecker(n){         // Function Definiton
    if (n % 2 === 0){               // If a number is divisible by 2 its a even number.
        return "Even Number";
    }
    else{
        return "Odd Number";        // Or else it is a odd number.
    }
}

n = 10;
console.log(evenOddChecker(n));     // Calling the function