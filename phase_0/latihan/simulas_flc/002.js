/*
-------------------
Prime Number Cruncher
-------------------

Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.

7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 7.
22 BUKAN bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

PROBLEM:
Disediakan sebuah function primeNumberCruncher yang menerima sebuah parameter
berupa number, dan mengembalikan kumpulan angka prima yang lebih besar
dari rata-rata kumpulan angka prima dari inputan parameter tersebut.

Contoh 1:
---------
input: 10

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7 ]
 - 2 + 3 + 5 + 7 = 17
 - AVERAGE: 17/4 = 4.25

output: [5, 7]

Contoh 2:
---------
input: 44

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 + 31 + 37 + 41 + 43 = 281
 - AVERAGE: 281/14 = 20.07

Output: [ 23, 29, 31, 37, 41, 43 ]

Contoh 3:
---------
input: 23

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 = 100
 - AVERAGE: 100/9 = 11.11

output: [ 13, 17, 19, 23 ]

RULES
-----
 - DILARANG MENGGUNAKAN BUILT-IN FUNCTION JS APAPUN SELAIN .push 

*/
/**
 * cari bilangan prima
 * 
 */
function numberPrimeCruncher(num) {
    var arr = []
    var tmp = []
    var output = []
    var number = 0
    if (num < 2) {
        return []
    }
    else {
        for (var i = 2; i <= num; i++) {
            for (var j = 0; j <= num; j++) {
                if ( i % j === 0) {
                    tmp.push(i)
                }
            }
            arr.push(tmp)
            tmp = []
        }
        tmp = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length === 2) {
                tmp.push(arr[i][0])
            }
        }
        for (var i = 0; i < tmp.length; i++) {
            number += tmp[i]
        }
        number = number / tmp.length
        for (var i = 0; i < tmp.length; i++) {
            if (tmp[i] > number) {
                output.push(tmp[i])
            }
            
        }
    
        return output
    }
    
}
console.log(numberPrimeCruncher(10)); // [ 5, 7 ]
console.log(numberPrimeCruncher(44)); // [ 23, 29, 31, 37, 41, 43 ]
console.log(numberPrimeCruncher(23)); // [ 13, 17, 19, 23 ]
console.log(numberPrimeCruncher(1)); // []
console.log(numberPrimeCruncher(0)); // []