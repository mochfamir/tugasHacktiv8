function ambilKata(str) {
    arr = [];
    kata = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            kata += str[i];
            if (i === str.length - 1) {
                arr.push(kata)
            }
        }
        else if (str[i] === ' ') {
            arr.push(kata);
            kata = '';
        }
    }
    return arr
}
//console.log(ambilKata('katak dalam tempurung sedang berada di makam'))

function kataDibalik(kata) {
    var balikKata = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        balikKata += kata[i]
    }
    return balikKata
}
//console.log(kataDibalik('katak dalam tempurung sedang berada di makam'))

function palindromeArr(arr) {
    var balikKata = '';
    var kata = ambilKata(arr)
    var tmp = []
    var outputPalindrome = []
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== ' ') {
            balikKata += arr[i]
            if (i === 0) {
                tmp.push(balikKata)
            }
        }
        else {
            tmp.push(balikKata)
            balikKata = ''
        }
    }
    for (var i = 0; i < tmp.length; i++) {
        if (kata[i] === tmp[tmp.length - 1 - i]) {
            console.log('masuk')
            outputPalindrome.push(kata[i])
        }
    }
    return outputPalindrome
}

console.log(palindromeArr('katak dalam tempurung sedang berada di makam'))

function cekPalindrome(arr) {
    var kataArr = ambilKata(arr)
    var balikArr = palindrome(kataArr)
    console.log(balikArr)
}
//console.log(cekPalindrome('katak dalam tempurung sedang berada di makam'))