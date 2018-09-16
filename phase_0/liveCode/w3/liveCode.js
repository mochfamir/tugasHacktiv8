
var name = faishal; // silakan berikan nilai bebas
var age 30; // silakan berikan nilai bebas
var money = 45000; // silakan berikan nilai bebas

// Buat code disini
if (name == faishal) {
    if (age >= 55 && money > 30000) { // lebih 55
        money = money - (30000*30/100) //diskon
        console.log('Anda bisa pesan steak. Sisa uang anda: ' + money)
    }
    else if (age <55 && money > 30000) { //kurang 55
        money = money - 30000
        console.log('Anda bisa pesan steak. Sisa uang anda: ' + money)
    }
    else {
        console.log('Uang tidak cukup. Anda harus pulang')
    }
}
else {
    console.log('Anda tidak boleh masuk')
}