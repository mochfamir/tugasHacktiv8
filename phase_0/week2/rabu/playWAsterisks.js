var star = ''
var star2 = ''
var rows = 5;
var i = 1;
var j = 1;
var k = 1;
var l = 1;


//1 
for (var i = 1; i <= rows; i++) {
    console.log('*')
}

// 2 ver1
while (j <= rows) {
    while (k <= rows) {
        star = star + '*'
        k++
    }
    console.log(star);
    j++;
}

// 2 ver fix
for (var m = 1; m <= 5; m++) {
    for (var n = 1; n <= 5; n++) {
        star2 = star2 + '*';
    }
    console.log(star2)
    star2 = ''
}


//3
for (var l = 1; l <= rows; l++) {
    star2 = star2 + '*'
    console.log(star2)
}

