function hitungHuruf(kata) {
    var kataArr = kata.split(' ')
    var modusHufuf = []
    var output = []
    for (var i = 0; i < kataArr.length; i++) {
        kataHuruf = kataArr[i].split('')
        for (var j = 0; j < kataHuruf.length; j++) {
            var cek = kataHuruf[j]
            for (var k = 0; k < kataHuruf.length; k++) {
                if (cek === kataHuruf[k] && modusHufuf[j] !== 0 && j !== k) {
                    if (kataHuruf[k] !== '' || kataHuruf[j] !== '') {
                        modusHufuf.push(kataArr[i])
                        modusHufuf.push(kataArr[i])
                        kataHuruf[k] = ''
                        kataHuruf[j] = ''
                    }
                }
            }
        }
        if (modusHufuf.length > output.length) {
            output = modusHufuf
        }
        modusHufuf = []
    }
    return output[0]
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
