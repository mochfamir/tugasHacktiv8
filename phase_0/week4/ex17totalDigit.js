// var hitung = function(val) {
//     if (val > 0) {
//         console.log(val);
//         return hitung(val - 1);
//     } else {
//         return val;
//     }
// };
// hitung(10);

function totalDigitRekursif(angka) {
    angka = angka.toString()
    if (angka.length <= 1) {
        return angka
    }
    else {
        console.log(angka)
        angka = Number(angka[0]) + totalDigitRekursif(angka.length-1)
        return angka
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
 console.log(totalDigitRekursif(1542)); // 12
 console.log(totalDigitRekursif(5)); // 5
 console.log(totalDigitRekursif(21)); // 3
 console.log(totalDigitRekursif(11111)); // 5