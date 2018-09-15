function cariMedian(arr) {
    // Cari nilai tengah dalam array
    //Bagi dua array.length, hasilnya jadikan index untuk array
    var output = 0
    var index
    // jika array.length tidak habis dibagi 2
    if (arr.length % 2 != 0) {
        // cari index dengan arr.length dibagi 2
        index = arr.length/2
        // hasilnya pasti decimal, jadi ambil angka depannya
        index = Math.floor(index)
        return arr[index]
    } 
    else {
        index = arr.length/2
        // mencari nilai rata2 dari index array yang ditengah
        output = (arr[index] + arr[index-1])/2
        return output
    }

}


  // TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5