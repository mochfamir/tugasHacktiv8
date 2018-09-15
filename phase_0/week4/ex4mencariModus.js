function cariModus(arr) {
    var angka = []
    var banding = []
    var output = {
        modus: 0,
        nilai: []
    }
    // cek apakah isi array, apakah sama semua
    for (var a = 0; a < 1; a++) {
        for (var b = 0; b < arr.length; b++) {
            if (arr[a] === arr[b]) {
                angka.push(arr[b])      // jika sama, push ke angka
            }
        }
        banding.push(angka)
        angka = []
    }
    // bandingkan 'angka' dengan 'arr' apakah length nya sama
    if (banding[0].length === arr.length) {
        return -1                       // jika ya, maka return -1
    }
    // jika tidak lakukan proses mencari modus
    else {                              
        for (var i = 0; i < arr.length - 1; i++) {
            var count = 0
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    count++
                }
            }
            if (output.modus < count) {
                output.modus += count
                output.nilai = []
                output.nilai.push(arr[i])
            }
            else if (output.modus === count) {
                output.nilai.push(arr[i])
            }
        }

    }
    // jika modus 0 maka return -1
    if (output.modus === 0) {
        return -1
    }
    return output.nilai[0]
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4,])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1