function tentukanDeretAritmatika(arr) {
    var beda = 0
    // mencari beda
    beda = arr[1] - arr[0]
    for (var i = 0; i < arr.length - 1; i++) {
        // jika indeks ke [i + 1] tidak sama dengan indeks[i]
        if (beda != arr[i + 1] - arr[i]) {
            return false
        }
    }
    return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false