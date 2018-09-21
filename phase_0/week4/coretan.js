/**
 1. apakah length 'input' sama dengan 0
    a. jika ya tampilkan 'data kosong'
    b. jika tidak lanjut ke step 2
 2. buat looping untuk array 'input'
 3. buat kondisi 'scores' >= 75
    a. jika ya, push ke array 'output'
 4. buat kondisi untik hitung length 'output'
    a. apakah length 'output' sama dengan length 'input'
        a.1 jika ya, tampilkan 'Semua Lulus'
    b. jika tidak, bandingkan apakah length 'output' sama dengan 0
        b.1 jika ya, tampilkan tidak ada yg lulus
        b.2 jika tidak, tampilkan length 'output' + 'orang lulus'


1. Menyediaka variabel untuk menampung jumlah orang yang lulus
2. buat kondisi apakah 'scores'.length sama dengan 0 
 */

// function graduatesCount(scores) {
//     var count = 0
//     if (scores.length === 0) {
//         return 'data kosong'
//     }
//     for (var i = 0; i < scores.length; i++) {
//         if (scores[i] >= 75) {
//             count++
//         }
//     }
//     if (count === 0) {
//         return 'tidak ada yang lulus'
//     }
//     else {
//         if (count === scores.length) {
//             return 'semua lulus'
//         }
//         else {
//             return count + ' orang lulus'
//         }
//     }
// }

// console.log(graduatesCount([70, 85, 65, 90]));
// console.log(graduatesCount([55, 65, 60]));
// console.log(graduatesCount([75, 95, 80, 100]));
// console.log(graduatesCount([]));



// function graduatesCount(scores) {
//     var lulus = [];
//     var gagal = [];
//     var output = [];
//     if (scores.length === 0 ){
//         return []
//     }
//     else {
//         for (var i = 0; i < scores.length; i++) {
//             if (scores[i] >= 75) {
//                 lulus.push(scores[i]);
//             }
//             else {
//                 gagal.push(scores[i]);
//             }
//         }
//         output.push(lulus);
//         output.push(gagal);
//         return output
//     }
   
// }

// console.log(graduatesCount([70, 85, 65, 90]));
// console.log(graduatesCount([55, 65, 60]));
// console.log(graduatesCount([75, 95, 80, 100]));
// console.log(graduatesCount([]));


// function graduatesCount(scores) {
//     var obj = {}
//     var count = 0
//     var countGagal = 0
//     if (scores.length === 0) {
//         return 'data kosong'
//     }
//     else {
//         for (var i = 0; i < scores.length; i++) {
//             obj = {
//                 lulus: '' ,
//                 tidakLulus: ''
//             }

//             if (scores[i] >= 75) {
//                 count++
//             }
//             else {
//                 countGagal++
//             }
//         }
//         if (count > 0 && countGagal > 0) {
//             obj.lulus = count + ' orang'
//             obj.tidakLulus = countGagal + ' orang'
//         }
//         else if (count === 0 && countGagal === scores.length) {
//             obj.lulus = 'tidak ada yang lulus'
//             obj.tidakLulus = countGagal + ' orang'
//         }
//         else if (countGagal === 0 && count === scores.length) {
//             obj.lulus = count + ' orang'
//             obj.tidakLulus = 'lulus semua'
//         }
//         return obj
//     }
// }

// console.log(graduatesCount([70, 85, 65, 90]));
// console.log(graduatesCount([55, 65, 60]));
// console.log(graduatesCount([75, 95, 80, 100]));
// console.log(graduatesCount([]));


// function graduatesCount(scores) {
//     if (scores.length === 0) {
//         return 0
//     }
//     else {
//         if (scores[0] >= 75) {
//             return 1 + graduatesCount(scores.slice(1))
//         }
//         else {
//             return graduatesCount(scores.slice(1))
//         }
//     }
// }
//console.log(graduatesCount([70, 85, 65, 90]));
// console.log(graduatesCount([55, 65, 60]));
// console.log(graduatesCount([75, 95, 80, 100]));
// console.log(graduatesCount([]));

// var input = 'faishal ganteng'
// var obj = {}
// var count = 0
// for (var i = 0; i < input.length; i++) {
//     if (input[i] !== ' ') {
//         obj[input[i]] = 0
//     }
    
// }
// for (var i = 0; i < input.length; i++) {
//     if (input[i] !== ' ') {
//         obj[input[i]] += 1
//     }
// }
// console.log(obj)

// function hitungHurufUnik(str) {
//     var result = {}

//     for (var i = 0; i < str.length; i++) {
//         if (result[str[i]] === undefined && str[i] !== ' ') {
//             result[str[i]] = 1;
//         }
//         else if (result[str[i]] !== undefined && str[i] !== ' ') {
//             result[str[i]] += 1;
//         }
//     }
// }

// console.log(hitungHurufUnik('faishal ganteng'))


// var input = "katak dalam tempurung sedang berada di makam"
// var banding = []
// var arrInput = input.split(' ')
// for (var i = 0; i < arrInput.length; i++) {
//     var str = ''
//     for (var j = arrInput[i].length-1; j >= 0; j--) {
//         str += arrInput[i][j]      
//     }
//     banding.push(str)
// }
// banding

