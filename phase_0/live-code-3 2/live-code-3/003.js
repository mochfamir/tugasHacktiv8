/*
 * Array of Object
 * ----------------------------
 * Buatlah code validation untuk setiap user yang terdaftar
 * code validation merupakan hasil dari pertukaran karakter indexk ganjil dan genap dari nama user
 * ditambah tanggal bulan dan tahun join.
 * Jika index huruf terakhir adalah genap maka tidak memiliki pasangan
 * maka huruf terakhir tersebut tidak mengalami proses pertukaran.
 *
 * contoh
 *  user aldo join pada 22 08 2018 maka validation codenya laod22092018
 */

function addValidationCode(users) {
  var arr = []
  obj = {}
  for (var i = 0; i < users.length; i++) {
    obj = {
      name: users[i].name,
      validationCode: users[i].name
    }
    arr.push(obj)
  }
  var name = '';
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].validationCode.length - 1; j += 2) {
      name = name + arr[i].validationCode[j + 1] + arr[i].validationCode[j]
    }
    if (name.length !== arr[i].validationCode.length) {
      name = name + arr[i].validationCode[arr[i].validationCode.length - 1]
    }
    arr[i].validationCode = name
    var tanggal = ''
    for (var k = 0; k < users.length; k++) {
      tanggal = users[k]['join date'].split('-')
      tanggal = tanggal.join('')
    }
    arr[i].validationCode = arr[i].validationCode + tanggal
    name = '' 
  }
  return arr
}

//Test case
console.log(addValidationCode([
  {
    name: 'Antonio', //nAotino
    'join date': '09-08-2018'
  },
  {
    name: 'Banderaz',
    'join date': '10-08-2018'
  },
]));
/**
 Hasil Output
 [
  {
    name: 'Antonio',
    validationCode: 'nAotino09082018'
  },
  {
    name: 'Banderaz',
    validationCode: 'aBdnreza10082018'
  },
]
 */
//console.log(addValidationCode([
//   {
//     name: 'Cecile',
//     'join date': '01-02-2018'
//   },
//   {
//     name: 'Dominique',
//     'join date': '10-09-2018'
//   },
// ]));
/**
 Hasil Output
 [
  {
    name: 'Cecile',
    validationCode: 'eCicel01022018'
  },
  {
    name: 'Dominique',
    validationCode: 'oDiminuqe10092018'
  },
]
 */
//console.log(addValidationCode([]));
/**
 Hasil Output
 []
 */
