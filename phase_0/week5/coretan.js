// function konversiMenit(menit) {
//     var count = 0
//     //buat kondisi apakah 'menit' > 60
//     if (menit > 60) {
//         while (menit >= 60) {
//             menit = menit - 60
//             count++
//         }
//         if (menit < 10) { 
//             menit = count+':0'+menit
//         }
//         else {
//             menit = count+':'+menit
//         }       
//     }
//     else {
//         menit = '0:' + menit
//     }
//     return menit
// }

// // TEST CASES
// console.log(konversiMenit(63)); // 1:03
// console.log(konversiMenit(124)); // 2:04
// console.log(konversiMenit(53)); // 0:53
// console.log(konversiMenit(88)); // 1:28
// console.log(konversiMenit(120)); // 2:00



// function xo(str) {
//     var o = 0;
//     var x = 0;
//     var i = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == 'o') {
//             o++
//         }
//         if (str[i] == 'x') {
//             x++
//         }
//     }
//     if (x === o) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// // TEST CASES
// console.log(xo('xoxoxo')); // true
//   console.log(xo('oxooxo')); // false
//   console.log(xo('oxo')); // false
//   console.log(xo('xxxooo')); // true
//   console.log(xo('xoxooxxo')); // true

// function angkaPalindrome(num) {
//     var angka = num;
//     var isTrue = true;
//     var numStr = num.toString()
//     if (angka < 9) {
//         return angka + 1
//     }
//     else {
//         while (isTrue = true) {
//             num = num + 1
//             for (var i = 0; i < numStr.length; i++) {
//                 if (numStr[i] == numStr[numStr.length-1-i]) {
//                     break;
//                 }
//             }
//         }
//         isTrue = false

//     }
//     return num
// }

// TEST CASES
//console.log(angkaPalindrome(8)); // 9
//   console.log(angkaPalindrome(10)); // 11
//    console.log(angkaPalindrome(117)); // 121
//    console.log(angkaPalindrome(175)); // 181
//   console.log(angkaPalindrome(1000)); // 1001


// Cari Modus Pakai Object
// function modus(str) {
//     var obj = {}
//     var modus = 0
//     // apakah didalam object ada isinya
//     for (var i = 0; i < str.length; i++) {
//         if (obj[str[i]] === undefined ) {   //jika ya, isi keys dan values nya
//             obj[str[i]] = 1     
//         } 
//         else {                              //jika tidak values ditambah
//             obj[str[i]] += 1
//         }
//         if (modus < obj[str[i]]) {          //mencari modus
//             modus = obj[str[i]]
//             var output = str[i]
//         }
//     }
//     return output
// }
// console.log(modus('hacktiv8888'))

// function medaliAsianGames(array) {
//     var obj = {}
//     for (var i = 0; i < array.length; i++) {
//         var negara = array[i][0]
//         var medali = array[i][1]
//         // buat template
//         if (obj[negara] === undefined) {
//             obj[negara] = {
//                 negara: negara,
//                 emas: 0,
//                 perak: 0,
//                 perunggu: 0
//             }
//         }

//         if (medali === array[i][1]) {
//             obj[negara][medali] += 1
//         }
//     }
//     return obj
// }

// console.log(medaliAsianGames([
//     ['indonesia', 'emas'],
//     ['india', 'perak'],
//     ['korea', 'emas'],
//     ['india', 'perak'],
//     ['india', 'emas'],
//     ['indonesia', 'perak'],
//     ['indonesia', 'emas']]));


// var input = [
//     ['indonesia', 'emas'],
//     ['india', 'perak'],
//     ['korea', 'emas'],
//     ['india', 'perak'],
//     ['india', 'emas'],
//     ['indonesia', 'perak'],
//     ['indonesia', 'emas']]
// var obj = {}
// for (var i = 0; i < input.length; i++) {
//     obj[input[i][0]] = {
//         negara: input[i][0],
//         emas: 0,
//         perak: 0,
//         perunggu: 0
//     }
// }
// for (var i = 0; i < input.length; i++) {
//     obj[input[i][0]][input[i][1]] += 1
// }
// console.log(Object.values(obj))

//Masih Salah
// var words = "paassionate"
// var obj = {
//     mod: 0,
//     arr: []
// }
// for (var i = 0; i < words.length-1; i++) {
//     var total = 1
//     for (var j = i + 1; j < words.length; j++) {
//         //console.log(words[i],' ',words[j]);
      
//         if (words[i] === words[j]) {
//             total+=1
//             if (obj.mod < total) {
//                 obj.mod += total
//                 obj.arr.push(words[i])
//             }
//             else {
//                 obj.arr.push(words[i])
//             }
//             console.log(words[i],' ',words[j]);
            
//             console.log(total)
//         }
//     }
// }
// console.log(obj)
