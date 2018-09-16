function pasanganTerbesar(num) {
  var numArr = []
  var arrTampung = []
  var numString = ''

  // ubah nilai num ke string
  numString = num.toString() 
  
  // masukan string kedalam array
  for (var i = 0; i < numString.length; i++) {
    numArr.push(numString[i])
  }
  // menggabungkan dua array ke satu index baru
  for (var k = 0; k < numArr.length - 1; k++) {
    arrTampung[k] = numString[k] + numString[k + 1]
  }

  // sortir dari yang terbesar
  arrTampung.sort(function(a,b){ return a < b})
  
  // ubah tipe data string ke number
  arrTampung[0] = Number(arrTampung[0])
  return arrTampung[0]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
// console.log(pasanganTerbesar(12783456)); // 83
// console.log(pasanganTerbesar(910233)); // 91
// console.log(pasanganTerbesar(71856421)); // 85
// console.log(pasanganTerbesar(79918293)); // 99





 // var i = 0
  // for (i; i <= numArr.length - 2; i++) {
  //   arrTampung.push(numArr[i])
  //   arrTampung.push(numArr[i+1])

  // }

  // var arr = ''
  // arr = arrTampung[3]
  // arr = arrTampung[4]
  // arr
  // arrTampung[0] = numString[0] + numString[1]
  // arrTampung[1] = numString[1] + numString[2]
  // arrTampung[2] = numString[2] + numString[3]
  // arrTampung[3] = numString[3] + numString[4]
  // arrTampung[4] = numString[4] + numString[5]