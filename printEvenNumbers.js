//Print Even Numbers Functions
//Print all even numbers from 1 to 5,000
function sumEvenNumbers() {
    var sum;

    for (sum = 0; sum <= 5000; sum++) {
        if (sum % 2 == 0) {
            console.log(sum);
        }
    }
    return sum;
}


sumEvenNumbers();