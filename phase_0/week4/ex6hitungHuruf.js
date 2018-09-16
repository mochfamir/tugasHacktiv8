function hitungHuruf(kata) {
    var nilai = {
        modus: 0,
        huruf: []
    }

    var count = 0
    var output = ''
    var arr = []
    var kataArr = kata.split(' ')
    //console.log(kataArr)
    // buat loop untuk cari kata yang sama
    for (var i = 0; i < kataArr.length; i++) {
        var count = 0
        for (var j = 0; j < kataArr[i].length - 1; j++) {
            for (var k = j+1; k < kataArr[i].length; k++) {
                if (kataArr[i][j] === kataArr[i][k]) {
                    count++
                    if (nilai.modus < count && nilai.modus <= count) {
                        nilai.modus = count
                        //arr.push(kataArr[i][j])
                        arr.push(kataArr[i])
                    }
                }
            }
        }

        nilai.huruf.push(arr)
        arr = []
    }
    //console.log(nilai.huruf, '   ', nilai.modus)
    nilai.huruf.sort()
    return nilai.huruf[nilai.huruf.length-1][0]

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
