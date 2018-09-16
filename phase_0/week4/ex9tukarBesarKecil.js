function tukarBesarKecil(kalimat) {
    var tampung = []
    var abjad = "abcdefghijklmnopqrstuvwxyz"
    var ABJAD = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // ubah kalimat(string), ke tampung(array)
    for (var i = kalimat.length - 1; i >= 0; i--) {
        tampung.splice(0, 0, kalimat[i])
    }
    // balikan huruf
    for (var i = 0; i < tampung.length; i++) {
        for (var j = 0; j < ABJAD.length; j++) {
            if (tampung[i] == ABJAD[j]) {
                tampung[i] = abjad[j]
            }
            else if (tampung[i] == abjad[j]) {
                tampung[i] = ABJAD[j]
            }
        }
    }

    return tampung.join('')
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"