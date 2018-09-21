/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf / .includes!

*/
function encrypt(input) {
  /** 1. buat variabel kamus hurufBiasa untuk membaca input
   *  2. buat variabel kamus huruf H8BI sebagai output dari hasil perbandingan input
   *  3. buat variabel output diisi dengan string kosong, untuk menyimpan hasil
   *  4. buat looping dengan var i sama dengan 0, looping selama kurang dari length dari input
   *  5. buat looping dengan var j sama dengan 0, looping selama kurang dari length darinhurufBiasa 
   *  6. apakah 'input' terhadap i, sama dengan 'hurufBiasa' terhadap j
   *    a. jika ya, isi 'output' dengan 'hurufH8BI' terhadap j
   *  7. return output
   * 
   */
  
  var hurufBiasa = 'abcdefghijklmnopqrstuvwxyz'
  var hurufH8BI = '!@#$%^&*()-+1234567890[]{}'
  var output = ''
  for (var i = 0; i < input.length; i++) {
    var isTrue = false
    for (var j = 0; j < hurufBiasa.length; j++) {
      if (input[i] === hurufBiasa[j]) {
        isTrue = true
        output += hurufH8BI[j]
      }
    }
    if (isTrue = false) {
      output += input[i]
    }
    
  }
  return output
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2
