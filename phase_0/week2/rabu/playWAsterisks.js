var star = ''
var rows = 10;
var i = 1;
var j = 1;


// //1 
for (var i = 1; i <= rows; i++){
    console.log('*')
}

// 2
while (j <= rows) {
    while (i <= rows) {
        star = star + '*'
        i++
    }
    console.log(star);
    j++;
}

//3
for (var i = 1; i <= rows; i++) {
    star = star + '*'
    console.log(star)
}

