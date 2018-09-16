function kaliTerusRekursif(angka) {
    // ubah angka jadi string
    var angkaStr = angka.toString()
    // kalikan semua indeks di angkaStr
    var jumlah = 1;
    for (var i = 0; i < angkaStr.length; i++){
        jumlah = jumlah * Number(angkaStr[i])   
    }
    if (jumlah < 10) {
        return jumlah
    }
    else {
        return kaliTerusRekursif(jumlah)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6