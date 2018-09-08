function groupAnimals(animals) {
    var banding = animals[0][0]
    var tampung = []
    var outputAnimals = []

    // sort array sesuai abjad
    animals.sort()
    console.log(animals)

    for (var i = 0; i < animals.length; i++) {
        console.log(i)
        //cek banding dengan huruf depan, kalau sama tampung dulu
        if (banding == animals[i][0]) {
            console.log('masuk if>>>>>', banding, '=====', animals[i])
            tampung.push(animals[i])
        }
        // kalau banding tidak sama, push tampung ke output
        else {
            outputAnimals.push(tampung)
            banding = animals[i][0]
            console.log('masuk else>>>', banding)
            tampung = []
            console.log('//////////////',i)
            tampung.push(animals[i])
            console.log(tampung)
        }
        // kondisi untuk push tampung ke output, jika looping mau beres
        if (i == animals.length -1) {
            console.log('masuk if bawah')
            outputAnimals.push(tampung)
        }
    }
    //console.log(tampung)
    return outputAnimals

}

//var kosong = []
//     var output = []
//     var tampung = []
//     var cari = ''
//     var binatangArr = []
//     // membandingkan string dengan index 0 dari array

//     // sort dulu, selesaisort 
//     // data pertama ambil huruf pertamanya ==> jadikan patokan untuk pencarian

//     animals.sort()
//     console.log(animals)

//     // ambil huruf pertama sebagai variabel banding
//     var banding = animals[0][0] 
//     for (var i = 0; i < animals.length; i++) { 
//         console.log(i)
//         console.log(banding,'<------- banding')
//         // jika huruf pertama array sama dengan banding, maka tampung.
//         if (banding == animals[i][0]) {
//             console.log('------------masuk if') 
//             tampung.push(animals[i]) 
//             sortir = animals[i][0]

//         }
//         else {
//             console.log('------------masuk else')
//             // jika huruf pertama beda dengan banding, maka tampung push ke binatangArr. kosongkan push
//             banding = animals[i][0]
//             binatangArr.push(tampung)
//             tampung = []
//             if (i < animals.length -1) {
//                 console.log('masuk if')
//                 tampung.push(animals[i])
//             }
//             else  {
//                 console.log('masuk else')
//                 tampung.push(animals[i])
//                 binatangArr.push(animals[i])
//             }
//             banding = animals[i][0]
//             // if (banding == animals[i][0]) {
//             //     console.log('<><><><><><>masuk if')
//             //     binatangArr.push(tampung)
//             // }

//         }




//     }


//         return binatangArr
// }
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));


//cara faishal
//     var sortir = animals[0][0]
//     for (var i = 0; i < animals.length; i++) {
//         console.log(sortir)
//         if (sortir == animals[i][0]) {
//             tampung.push(animals[i])
//             sortir = animals[i][0]
//             console.log('^^^^', sortir)
//             console.log("--------", i)
//         }
//         else {
//             binatangArr.push(tampung)
//             tampung = []
//             sortir = animals[i][0]
//             console.log('=====', sortir)
//             console.log(i)
//             if (sortir == animals[i][0]) {
//                 tampung.push(animals[i])
//                 if (sortir == animals[i][0]) {
//                     binatangArr.push(tampung)
//                 }
//             }
//         }
//     }
//      return binatangArr
//  }
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));


// cara mbak icha
// cari = animals[0][0]
// var grup = []   

//     for (var i = 0; i < animals.length ; i++) {
//         //cari = animals[i][0]
//         if (cari == animals[i][0]) {
//             grup.push(animals[i])  

//         } else {
//             //console.log("MASUK ELSE")
//             binatangArr.push(grup) 
//             cari = animals[i][0]
//             grup = []
//             grup.push(animals[i])

//         }  
//     }

//console.log(grup)


//CARA HAMPIR BENAR TAPI SALAH
// for (var i = 0; i < string.length; i++) {
//     for (var j = 0; j < animals.length; j++) {
//         // jika huruf depan sama dengan string[i]
//         if (string[i] == animals[j][0]) {
//             // tampung dulu 
//             tampung.push(animals[j])
//             // binatangArr.push(tampung)
//         }
//     }
//     binatangArr.push(tampung)
// }





// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]


  //[bebek, kancil, kambing, kuda, rakun, rubah]

