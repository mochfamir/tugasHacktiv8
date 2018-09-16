// /*
// Instruksi
// =========
// Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row.
// Function tidak perlu mengembalikan nilai (tidak perlu ada return).

// Contoh 1
// --------
// input: 3
// x
// xo
// x

// Contoh 2
// --------
// input: 6
// tampilan:
// x
// xo
// xox
// xox
// xo
// x

// */

// function drawLadder(row) {
//   var x = 'x';
//   var o = 'o';
//   var input = row;
//   var a = input/2
//   var output = '';
//   for (var i = 0; i < a; i++) {
//     for (var j = 0; j = a; j++) {
//       output = output + x;
//     }
//     for (var k = 0; k < a; k++) {
//       output = output + o;
//     }
//   console.log(output);
//   }
// }

// drawLadder(6);
// drawLadder(3);



var string = 'faishal'
for (var i = 0; i < string.length; i++) {
  //tampilkan length genap
  if (i % 2 !== 0) {
    console.log(string[i])
  }
  
}