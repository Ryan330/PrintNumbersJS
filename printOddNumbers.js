//Print Odd Numbers Functions
//Print all odd numbers from 1 to 5,000
function sumOddNumbers() {
    var sum;

    for (sum = 0; sum < 5000; sum++) {
        if (sum % 2 !== 0) {
            console.log(sum);
        }
    }
    return sum;
}


sumOddNumbers();