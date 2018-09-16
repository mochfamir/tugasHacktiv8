function totalDigitRekursif(angka) {
    //jika angka < 10 kembalikan nilai angka
    if (angka <= 10) {
      return angka    
    }
    else {
      // ubah dulu ke string
      var angkaStr = angka.toString()
      var angka0 = Number(angkaStr[0])      //ambil indeks 0, jadikan number
      angkaStr = angkaStr.slice(1)          //ambil nilai indeks 1, lalu potong indeks1
      //console.log(angkaStr)          
      angkaStr = Number(angkaStr)           //ubah ke number
      return angka0 + totalDigitRekursif(angkaStr) 
    }
  
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  // console.log(totalDigitRekursif(1542)); // 12
  // console.log(totalDigitRekursif(5)); // 5
  // console.log(totalDigitRekursif(21)); // 3
  // console.log(totalDigitRekursif(11111)); // 5
  
  
  
  