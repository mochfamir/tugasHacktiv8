function sorting(arrNumber) {
    var arr = arrNumber.sort()
    return arr
}

function getTotal(arrNumber) {
    var sort = sorting(arrNumber)
    var banding = sort[0]
    var jumlah = []
    if (sort.length !== 0) {
        for (var i = 0; i < sort.length; i++) {
            if (banding <= sort[i]) {
                banding = sort[i]
            }
        }
        for (var i = 0; i < sort.length; i++){
            if (banding === sort[i]) {
                jumlah.push(sort[i])
            }
        }
    }
    else {
        return `''`
    }
    return 'angka paling besar adalah '+ banding + ' dan jumlah kemunculan sebanyak ' + jumlah.length + ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
