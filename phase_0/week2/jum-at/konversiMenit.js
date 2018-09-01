function konversiMenit(menit) {
    var jam = 60;
    // menit diseleksi, apakah lebih dari 60
    if (menit > jam) {
        angka2 = menit                  //menit
        angka1 = menit / jam;           // jam
        angka1 = Math.floor(angka1);    // ambil dan simpan angka di depan koma
        angka2 = menit % jam;           // 'menit' % jam untuk dapatkan hasil menit
        if (angka2 < 10) {                       
            output = angka1 + ':0' + angka2;    
            return output;
        }
        else {                                  
            output = angka1 + ':' + angka2;    
            return output
        }
    }
    else if (menit < 10) {              // 'menit' dibawah 10
        output = '0:0' + menit
        return output
    }
    else {                              // 'menit' di atas 10 dibawah 60
        output = '0:' + menit
        return output
    }
}


// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
 

