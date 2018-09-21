/**

  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS)
  Contoh 1:
  ==========
  input: 3
  output:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]

  Contoh 2:
  ==========
  input: 4
  output:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]


NOTE & RULES:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
 - DILARANG MENGGUNAKAN BUILT-IN-FUNCTION JS SELAIN .push(), .unshift(), .shift(), .pop()
 - DILARANG MENGGUNAKAN SPREAD SYNTAX

**/


function squareNumber(num) {
  var tmp = []
  var arrKosong = []
  var output = []
  var angka = num * num
  if (num < 3) {
    return 'Minimal input adalah 3'
  }
  else {
    for (var i = 1; i <= angka; i++) {
      tmp.push(i)
    }

    for (var i = 0; i < tmp.length; i += num) {
      for (var j = 0; j < num; j++) {
        arrKosong.push(tmp[i + j])
      }
      output.push(arrKosong)
      arrKosong = []
    }


    return output
  }
}

// for (var i = 0; i < num; i++) {
//   result[i] = [];
//   if (i % 2 === 2) {
//     for (var kolom = 0; kolom < num; kolom++) {
//       result[i][kolom] = angka;
//       angka++
//     }
//   }
// }

console.log(squareNumber(3));
// [ [ 1, 2, 3 ], [ 6, 5, 4 ], [ 7, 8, 9 ] ]

console.log(squareNumber(4));
// [ [ 1, 2, 3, 4 ],
//   [ 8, 7, 6, 5 ],
//   [ 9, 10, 11, 12 ],
//   [ 16, 15, 14, 13 ] ]

console.log(squareNumber(5));
// [ [ 1, 2, 3, 4, 5 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 21, 22, 23, 24, 25 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3
