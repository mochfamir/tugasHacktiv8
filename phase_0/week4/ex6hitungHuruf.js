function hitungHuruf(kata) {
    var nilai = {
        modus: 0,
        huruf: []
    }

    var count = 0
    var arr = []
    var kataArr = kata.split(' ')
    //console.log(kataArr)
    // buat loop untuk cari kata yang sama
    for (var i = 0; i < kataArr.length; i++) {
        var count = 0
        for (var j = 0; j < kataArr[i].length - 1; j++) {
            for (var k = j+1; k < kataArr[i].length; k++) {
                if (kataArr[i][j] === kataArr[i][k]) {      //jika sama maka hitung
                    count++
                    if (nilai.modus <= count) {             //jika count lebih besar
                        nilai.modus = count                 // maka isi dengan count
                        //arr.push(kataArr[i][j])
                        arr.push(kataArr[i])                // tampung dulu niai yang sama
                    }
                }
            }
        }

        nilai.huruf.push(arr)       // push ke array nilai
        arr = []
    }
    //console.log(nilai.huruf, '   ', nilai.modus)
    nilai.huruf.sort()              // sort, ambil indeks yang paling belakang/terbanyak
    return nilai.huruf[nilai.huruf.length-1][0]     

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
