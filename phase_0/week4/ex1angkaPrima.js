function angkaPrima(angka) {
    var output = []
    var tampung = []

    for (var i = 1; i <= angka; i++) {
        if (angka % i == 0) {
            tampung.push(i)
        }
    }
    output.push(tampung)
    tampung = []
    if (output[0].length == 2){    // ambil yang memiliki length 2
        return true
    }
    else {
        return false
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false