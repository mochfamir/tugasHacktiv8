
//1. while

var text = "- I LOVE CODING";
var say = "- I will become fullstack developer";
var i = 0;

console.log("LOOPING PERTAMA");
while (i < 20) {
    i = i + 2;
    console.log(i+text);
}
console.log("LOOPING KEDUA");
while ( i !== 0) {
    console.log(i+say);
    i = i - 2;
}



//2. For

var text = "- I LOVE CODING";
var say = "- I will become fullstack developer";
//var i = 0;

console.log("LOOPING PERTAMA");
for (var i = 0; i <= 20; i++){
    console.log(i + text);
}
console.log("LOOPING KEDUA")
for (var j = 20 ; j > 0; j--) {
    console.log(j + say);
}


//3. Angka Ganjil dan Genap


//Ganjil Genap

for (var i = 1; i <= 100; i++) {        //buat deret 100
    if(i%2 === 0){                      //seleksi bilangan ganjil-genap
        console.log("ganjil");
    }
    else {
        console.log("genap");
    }
}


//Kelipatan 3
for (var i = 1; i <= 100; i = i+2) {    //buat deret +2
    if (i % 3 === 0) {                 //seleksi kelipatan 3
       console.log(i + " Kelipatan 3"); //tampilkan
    }
}

//Kelipatan 6
for (var j = 1; j <= 100; j = j+5) {
    if (j % 6 === 0) { 
        console.log(j + " kelipatan 6")
    }
}       

//Kelipatan 10
for (var k = 1; k <= 100; k = k+9) {
    if (k % 10 === 0) { 
        console.log(k + " kelipatan 10")
    }
}  





