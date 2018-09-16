function checkAB(num) {
  var a = [];
  var b = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] == 'a') {
      a.push(i)
    }
    if (num[i] == 'b') {
      b.push(i)
    }
  }
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] - b[j] == 4 || b[j] - a[i] == 4) {
        return true
      }
    }
  }
  return false

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false