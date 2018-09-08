function mengelompokkanAngka(arr) {
    var genapArr = []                           
    var ganjilArr = []
    var kelipatan3Arr = []
    var output =[]

    for (var i = 0; i < arr.length; i++) {
        // Mencari kelipatan 3. jika arr index mod 3 sama dengan 0, maka push ke array kelipatan3
        if (arr[i] % 3 == 0) {
            kelipatan3Arr.push(arr[i])
        }
        // Mencari angka ganjil. jika arr index mod 2 tidak sama dengan 0, maka push ke array ganjil
        else if (arr[i] % 2 !== 0) {
            ganjilArr.push(arr[i])
        }
        // Mencari angka genap. jika arr index mod 2 sama dengan 0, maka push ke array genap
        else if (arr[i] % 2 == 0) {
            genapArr.push(arr[i])
        }
    }
    //memasukan semua array ke array output
    output.push(genapArr)
    output.push(ganjilArr)
    output.push(kelipatan3Arr)
    return output
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]