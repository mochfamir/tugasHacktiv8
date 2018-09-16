function hitungJumlahKata(kalimat) {
    // hitung jumlah spasi 
    var spasi = 0
    for (var i = 0; i < kalimat.length; i++ ) {
        // jika ada spasi, simpan di var spasi
        if (kalimat[i] === ' ') {
            spasi++
        }
    }
    spasi++
    return spasi
  }
  
  // TEST CASES
 console.log(hitungJumlahKata('I have a dream')); // 4
 console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
 console.log(hitungJumlahKata('I')); // 1
 console.log(hitungJumlahKata('I believe I can code')); // 5
// var spasi = ' '

//  I
  
//  h
//  a
//  v
//  e
  
//  a
  
//  d
//  r
//  e
//  a
//  m


 