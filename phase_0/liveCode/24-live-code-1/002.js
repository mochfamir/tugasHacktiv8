// Competencies: Mathematical Operation and Conditionals
/*
===============
Restaurant Visitation
===============
Instruksi
=========
Seseorang pengunjung bar direpresentasikan oleh JavaScript dengan memiliki variable name, age, dan money.
Ia masuk ke sebuah restaurant untuk makan, namun restaurant memiliki kondisi sebagai berikut:

Step 1. Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai.
Jika name tidak kosong, lanjut ke step ke 2.

Step 2. Jika age dari si pengunjung dibawah 55 tahun, maka ia dapat memesan steak.
Jika pengunjung memiliki usia 55 tahun ke atas ia boleh memesan steak dan mendapatkan diskon sebesar 30%

Step 3. Steak memiliki harga 300000

Jika money / uang yand pengunjung miliki tidak mencukupi, maka tampilkan
di-console "Uang tidak cukup. Anda harus pulang". Jika uang cukup, tampilkan
"Anda bisa pesan steak. Sisa uang anda: [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga steak dan diskon jika ada.

Ketentuan
=========
Diberikan variable name, age, dan money. Dipersilahkan mengganti nilai dari 3 variable tersebut,
sesuai data type yang cocok, namun dilarang mengganti nama variable.
*/

// SKELETON CODE (Code Sample)

var name = 'faishal'; // silakan berikan nilai bebas
var age = 60; // silakan berikan nilai bebas
var money = 45000; // silakan berikan nilai bebas

// Buat code disini
if (name == 'faishal') {
    if (age >= 55 && money >= 21000) { // lebih 55
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
