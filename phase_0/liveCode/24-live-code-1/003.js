// Competencies: Loopings
/*
=================
Odd Series
=================
Instruksi
=========
Buatlah sebuah proses pengecekan dengan menggunakan looping (boleh dengan while atau for).
Disediakan variabel max, dimana akan menampilkan deret ganjil dari terbesar ke kecil hingga mencapai angka 1.
Tampilkan deret ganjil sejumlah nilai max.

contoh 1 (max = 4)
31
31
31
31

contoh 2 (max = 5)
531
531
531
531
531

contoh 3 (max = 10)
97531
97531
97531
97531
97531
97531
97531
97531
97531
97531

Ketentuan
=========
Wajib menggunakan looping!
*/

// SKELETON CODE (Code Sample)
var max = 30; // isi dengan nilai max!
var hasil = ''
for (var i = max; i > 0; i--) {    // looping max
    if (i % 2 !== 0) {
        hasil = hasil + i
    }
}
for (var j = 1; j <= max; j++) {
    console.log(hasil)
}

