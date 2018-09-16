function changeVocals(str) {
    var kamus = "aiueoAIUEO"
    var ganti = "bjvfpBJVFP"
    var arr = str.split('')
    for (var i = 0; i < kamus.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (kamus[i] == str[j]) {
                arr.splice(j,1, ganti[i])
            }
        }
    }
    return arr.join('')
}

function reverseWord(str) {
    var reverse = ""
    for(var i = str.length-1; i >= 0; i--) {
        reverse = reverse + str[i]
    }
    return reverse
}

function setLowerUpperCase(str) {
    var arr = str.split('')
    for (var i = 0; i < str.length; i++) {
        if (arr[i] == str[i].toLowerCase()) {
            arr.splice(i,1, str[i].toUpperCase())
        }
        else {
            arr.splice(i,1, str[i].toLowerCase())
        }
    }
    return arr.join('')
}

function removeSpaces(str) {
    var arr = str.split('')
    for (var i = 0; i < str.length; i++) {
        if (arr[i] == ' ') {
            arr.splice(i,1)
        }
    }
    return arr.join('')
}

function passwordGenerator(name) {
    var vocal = changeVocals(name)
    var reverse = reverseWord(vocal)
    var setLowUpCase = setLowerUpperCase(reverse)
    var rmSpace = removeSpaces(setLowUpCase)
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    else {
        return rmSpace
    }   
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'