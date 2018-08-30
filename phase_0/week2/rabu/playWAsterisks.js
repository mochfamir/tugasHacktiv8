var star = ''
var star2 = ''
var rows = 5;
var i = 1;
var j = 1;
var k = 1;
var l = 1;


// //1 
for (var i = 1; i <= rows; i++){
    console.log('*')
}

// 2
while (j <= rows) {
    while (k <= rows) {
        star = star + '*'
        k++
    }
    console.log(star);
    j++;
}

//3
for (var l = 1; l <= rows; l++) {
    star2 = star2 + '*'
    console.log(star2)
}

