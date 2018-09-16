function shoppingTime(memberId, money) {
    var kembalian = 0
    var sale = [['CasingHandphone', 50000],
    ['SweaterUniklooh', 175000],
    ['BajuH&N', 250000],
    ['BajuZoro', 500000],
    ['SepatuStacattu', 1500000]]
    var result = {
        memberId: '',
        money: 0,
        listPurchased: [],
        changeMoney: 0
    }
    if (!memberId) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    if (money < 50000) {
        return "Mohon maaf, uang tidak cukup"
    }
    result.memberId = memberId;
    result.money = money;
    for (var i = sale.length -1; i >= 0; i--) {
        if (money > sale[i][1]) {
            result.listPurchased.push(sale[i][0])
            kembalian = money - sale[i][1];

        }
        else {
            result.changeMoney = kembalian
        }

    }

    return result
}




// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja