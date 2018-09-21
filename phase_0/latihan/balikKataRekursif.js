// Rekursif Balik Kata

// function balikKata(str) {
//     if (str.length === 0) {
//         return ''
//     }
//     else {
//         return str[str.length-1] + balikKata(str.substr(0,str.length-1))    
//     }
// }
// console.log(balikKata('kata'))

// Rekursif Angka Minimum
// function angkaMinimum(arr) {
//     if (arr.length === 1) {
//         return arr[0]
//     }
//     else {
//         if (arr[0] < arr[arr.length-1]) {
//             arr.pop()
//             return angkaMinimum(arr)
//         }
//         else {
//             arr.shift()
//             return angkaMinimum(arr)
//         }

//     }
// }
// console.log(angkaMinimum([4,3,2,5,6]))

//Palindrome Kata Rekursif
// function palindrome(kata) {
//    // return palindrome(substr(1,kata.length-2))
//     if (kata.length === 0 || kata.length === 1) {
//         return true
//     }
//     else {
//         if (kata[0] === kata[kata.length-1]) {
//             return palindrome(kata.substr(1,kata.length-2))
//         }
//         else {
//             return false
//         }
//     }
//   }
  
//   // TEST CASES
//   console.log(palindrome('katak')); // true
//   console.log(palindrome('blanket')); // false
//   console.log(palindrome('civic')); // true
//   console.log(palindrome('kasur rusak')); // true
//   console.log(palindrome('mister')); // false