/*
cari bilangan terbesar yang dapat membagi habis angka1 dan angka2
*/


function fpb(angka1, angka2) {
    var output = []
    // cari angka yang dapat membagi keduanya
    for (var i = 1; i<=angka1*angka2; i++) {
        // jika angka1 habis dibagi i dan angka2 habis dibagi i
        if (angka1 % i == 0 && angka2 % i == 0) {
            //output push dengan i
            output.push(i)
        }
    }   
    // return nilai terbesar
    return output[output.length -1]
}


  
  // TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
