function palindrome(kata) {
    var kataPembanding = "";
    //balikin kata
    for (var i = kata.length-1; i >= 0; i--) {
        kataPembanding = kataPembanding + kata[i]
    }
    if (kata === kataPembanding) {
        return true
    }
    else {
        return false
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false