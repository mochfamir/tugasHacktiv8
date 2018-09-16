function targetTerdekat(arr) {
  var oArr = []
  var xArr = []
  // jika ada 'o' masukan i kedalam array
  for (var i = 0; i < arr.length ; i++) {
    if (arr[i] == 'o') {
      oArr.push(i)
    }
  }
  // jika ada 'x' masukan i kedalam array
  for (var j = 0; j < arr.length ; j++) {
    if (arr[j] == 'x') {
      xArr.push(j)
    }
  }

  var banding = []
  //jika xArr tidak ada nilai, maka return 0
  if (xArr == 0) {
    return 0
  }
  // jika oArr lebih kecil dari xArr, maka xArr indeks 0 dikurang oArr indeks 0
  if (oArr < xArr) {
    banding.push(xArr[0] - oArr[0])
  }
  else if (oArr > xArr) {

    banding.push(oArr[0] - xArr[xArr.length-1])
  }
  return banding[0]
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2