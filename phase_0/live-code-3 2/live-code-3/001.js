/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULE:
  - WAJIB menyertakan algoritma / pseudocode
  - Dilarang menggunakan .filter, .map, .reduce
  
*/

function evenPairsSum(str) {
  var arrTmp = []
  var output = 0;
  //buat str menjadi berpasangan
  // if (str.length % 2 !== 0) {
  //   str + str = str[0]
  // }
  //ubah str menjadi berpasangan
  for (var i = 0; i < str.length; i+=2) {
    var tmp = ''
    tmp = tmp + str[i] + str[i+1]
    if (Number(tmp) % 2 == 0) {
      output = output + Number(tmp)
    }    
  }
  

  return output
  
}


function evenPairSumBestPractice(str) {
  var total = 0;

  for (var i = 0; i < str.length; i+=2) {
    var angka = 0;
    if (str[i+1] === undefined) {
      angka = Number(str[i] + str[0]);
    } else {
      angka = Number(str[i] + str[i+1]);
    }

    if (angka % 2 === 0) {
      total += angka;
    }
  }

  return total;
}

console.log(evenPairSumBestPractice('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 128
console.log(evenPairSumBestPractice('2478201')); // 134
