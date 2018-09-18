function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var output = [];
    var naik = 0;
    var turun = 0;
    for (var i = 0; i < arrPenumpang.length; i++) {
        for (var j = 0; j < arrPenumpang[i].length; j++) {
            obj = {
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: 0
            }
        }
        output.push(obj)
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] == arrPenumpang[i][1]) {
                naik = j
            }
            if (rute[j] == arrPenumpang[i][2]) {
                turun = j
            }   
        }
        var hasil = 0;
        hasil = (turun-naik) * 2000
        output[i].bayar = hasil

    }
    return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]