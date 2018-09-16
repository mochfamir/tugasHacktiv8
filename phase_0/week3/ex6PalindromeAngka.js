function angkaPalindrome(num) {
    var numString = ''
    var isPalindrome = false
    //num = num + 1
    if (num < 9) {
        num = num + 1
    }
    else {
        while (isPalindrome === false) {
            numString = num.toString()  //119
            var berhasilCek = 0;
            for (var i = 0; i < numString.length; i++) {
                if (numString[i] != numString[numString.length - 1 - i]) {
                    num = num + 1;
                    berhasilCek++
                    break;
                }
                else {
                    isPalindrome = true
                }
            }

            if (berhasilCek === 0) {
                isPalindrome = true;
            }

        }
    }

    return num

}


// if (berhasilCek > 0) {
//     isPalindrome = false;
// } else {
//     isPalindrome = true;
// }



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001





















   // var numString = num.toString();
    // for (var i = 0; i < numString.length; i++) {
    //     if (numString[i] !== numString[numString.length - i]) {
    //         var numAngka = Number(numString)
    //     }
    // }
    // var numAngkaBaru = 0
    // console.log(numAngka)
    // while (numAngka !== numAngkaBaru) {
    // numAngkaBaru = numAngka + 1
    // if (numAngka.toString == numAngkaBaru) {

    // }
    // }


    //     var numString = 0
    // var numBaru = 0
    // while (num >= numString) {
    //     // nambahin sampai sama dengan string
    //     numBaru = num + 1
    //     console.log(numBaru)
    //     // ubah number ke string
    //      numString = numBaru
    //     console.log(numString)
    //     // apakah string sama dengan number            
    //     for (var i = 0; i < numString.length; i++) {
    //         if (numString[i] != numString[numString.length - i]) {
    //             numString

    //         }
    //     }
    // }