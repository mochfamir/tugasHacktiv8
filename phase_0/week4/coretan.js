function totalDigitRekursif(angka) {
  angka = angka.toString()
  if (angka.length == 1) {
  return angka    
  }
  else {
    angka = angka + Number(angka[0])
    return angka
  }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
// console.log(totalDigitRekursif(1542)); // 12
// console.log(totalDigitRekursif(5)); // 5
// console.log(totalDigitRekursif(21)); // 3
// console.log(totalDigitRekursif(11111)); // 5


  // function makanTerusRekursif(waktu) {
//     if (waktu <= 0) {
//         return 0;
//     } else {
//         //console.log(waktu)
//         return 1 + makanTerusRekursif(waktu - 15);
//     }
// }
// // TEST CASES
// console.log(makanTerusRekursif(66)); // 5
// console.log(makanTerusRekursif(100)); // 7
// console.log(makanTerusRekursif(90)); // 6
// console.log(makanTerusRekursif(10)); // 1
// console.log(makanTerusRekursif(0)); // 0


