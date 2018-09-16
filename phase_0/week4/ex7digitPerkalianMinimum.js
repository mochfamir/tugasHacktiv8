function  digitPerkalianMinimum(angka) {
    var output = []
    var tampung = []
    var str = ''

    // cari faktor
    for (var i = 0; i <= angka; i++) {
        // jika angka habis dibagi i, maka tampung di i
        if (angka % i == 0) {
        tampung.push(i)
        }
    }
    // looping dengan limit setengah dari array, agar output tidak ganda
    for (var i = 0; i < tampung.length/2 ;i++) {
        if (tampung[i] * tampung[tampung.length-1-i] == angka) {
            //gabung faktor pengali menjadi string
            str = tampung[i].toString()
            str = str + tampung[tampung.length-1-i].toString()
            output.push(str)
        }
    }
    //urutkan, tampilkan yang length paling kecil
    output.sort()
    return output[output.length-1].length
  }
  
  // TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2