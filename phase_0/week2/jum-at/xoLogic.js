function xo(str) {
    var X = '';
    var O = '';

    for (var i = 0; i <= str.length - 1; i++) { // looping indeks string
        if (str[i] == 'x') {                    // menyeleksi 'x'
            X += str[i]                         // menyimpan 'x'
        } else {        
            O += str[i]                         // menyimpan 'o'
        }
    }
    
    if (X.length == O.length) {                 // bandingkan jumlah string di 'x' dan 'o'
        return true
    } else {
        return false
    }
}


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

