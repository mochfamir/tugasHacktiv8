function cariMean(arr) {
    // tempat menampung nilai
    var nilai = 0
    // menjumlahkan semua angka pada arr
    for(var i = 0; i < arr.length; i++) {
        nilai = nilai + arr[i]
    }
    // membagi total nilai dengan length dari arr
    nilai = nilai/arr.length
    //membulatkan nilai
    nilai = Math.round(nilai)
    
    return nilai
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7