function countProfit(shoppers) {
    var listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]];

    var result = []
    if (shoppers.length === 0) {
        return []
    }
    else {
        for (var i = 0; i < listBarang.length; i++) {
            result.push({
                product: '',
                shoppers: [],
                leftOver: 0,
                totalProfit: 0
            })
        }
        //console.log(result.length)
        for (var i = 0; i < result.length; i++) {
            for (var j = 0; j < shoppers.length; j++) {
                result[i].product = listBarang[i][0]
                if (result[i].product === shoppers[j].product) {
                    if (listBarang[i][2] >= shoppers[j].amount) {
                        listBarang[i][2] -= shoppers[j].amount
                        result[i].leftOver = listBarang[i][2]
                        result[i].shoppers.push(shoppers[j].name)
                        result[i].totalProfit = result[i].totalProfit + (listBarang[i][1] * shoppers[j].amount)
                    }
                }

            }
        }

    }

    return result
}

// // TEST CASES
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
{ name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
{ name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
// // //[ { product: 'Sepatu Stacattu',
// //   shoppers: [ 'Windi', 'Vanessa' ],
// //   leftOver: 5,
// //   totalProfit: 7500000 },
// // { product: 'Baju Zoro',
// //   shoppers: [],
// //   leftOver: 2,
// //   totalProfit: 0 },
// // { product: 'Sweater Uniklooh',
// //   shoppers: [],
// //   leftOver: 1,
// //   totalProfit: 0 } ]

//  console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
// { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
// { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
// { name: 'Devi', product: 'Baju Zoro', amount: 1 },
// { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
//console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]


//     for (var i = 0; i < shoppers.length; i++) {
//         // membandingkan dengan stok barang
//         if (shoppers[i].product == listBarang[0][0]) {
//             if (result[0].leftOver >= shoppers[i].amount) {
//                 result[0].leftOver = result[0].leftOver - shoppers[i].amount
//                 //console.log(result[0].leftOver)
//             }
//             else {
//                 shoppers[i].product = ' '
//                 //console.log(result[0].leftOver)
//             }   
//             result[0].shoppers.push(shoppers[i].name)

//             //console.log(result[0].leftOver)
//             for (var j = 0; j < shoppers[i].amount; j++) {
//                 result[0].totalProfit = result[0].totalProfit + listBarang[0][1]
//             }
//         }
//         else if (shoppers[i].product == listBarang[1][0]) {
//             result[1].shoppers.push(shoppers[i].name)
//             result[1].leftOver = result[1].leftOver - shoppers[i].amount
//             //console.log(result[0].leftOver)
//             for (var j = 0; j < shoppers[i].amount; j++) {
//                 result[1].totalProfit = result[1].totalProfit + listBarang[1][1]
//             }
//         }
//         else if (shoppers[i].product == listBarang[2][0]) {
//             result[2].shoppers.push(shoppers[i].name)
//             result[2].leftOver = result[2].leftOver - shoppers[i].amount
//             //console.log(result[0].leftOver)
//             for (var j = 0; j < shoppers[i].amount; j++) {
//                 result[2].totalProfit = result[2].totalProfit + listBarang[2][1]
//             }
//         }
//     }
// }
// tampilkan leftOver sesuai jumlah barang



// }
// if (shoppers[i].amount <= result[0].leftOver) {
//     result[0].leftOver = result[0].leftOver - shoppers[i].amount 
// }

// if (shoppers[0].product == listBarang[0][0]) {
//     result[0].product = shoppers
//   console.log('masuk')
//}


// function countProfit(shoppers) {
//     var listBarang = [['Sepatu Stacattu', 1500000, 10],
//     ['Baju Zoro', 500000, 2],
//     ['Sweater Uniklooh', 175000, 1]];

//     var result =

//         [{
//             product: 'Sepatu Stacattu',
//             shoppers: [],
//             leftOver: listBarang[0][2],
//             totalProfit: 0
//         },
//         {
//             product: 'Baju Zoro',
//             shoppers: [],
//             leftOver: listBarang[1][2],
//             totalProfit: 0
//         },
//         {
//             product: 'Sweater Uniklooh',
//             shoppers: [],
//             leftOver: listBarang[2][2],
//             totalProfit: 0
//         }]

//     if (shoppers == 0) {
//         return []
//     }
//     else {


//     }

//     return result
// }