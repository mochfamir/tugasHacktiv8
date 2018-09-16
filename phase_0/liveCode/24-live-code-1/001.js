/**

Buatlah sebuah ALGORITMA/PSEUDOCODE untuk kasus berikut:

Seorang anak memiliki uang sejumlah Rp.X (jumlah uang fleksibel)
Dia akan mengunjungi sebuah toko mainan dan akan membeli mainan yang diinginkannya.
Anak ini hanya akan membeli satu mainan saja dan akan membeli harga mainan paling mahal dari uang yang dimilikinya.

Berikut beberapa mainan dan harga yang ada pada daftar anak tersebut:
 - Rubik 3x3 => Rp35.000
 - Tamiya Mini 4wd => Rp185.000
 - Robot Star Wars => Rp350.000

Tampilkan mainan apa yang bisa dibeli oleh anak tersebut dan berapa jumlah kembaliannya.
Jika uang anak tidak mencukupi satupun dari permainan tersebut, maka tampilkan "Nabung lagi ya, dek!"

**/

// YOUR ALGORITMA OR PSEUDOCODE HERE

STORE 'uang' with any value
STORE 'rubik' with 35000
STORE 'tamiya' with 185000
STORE 'robot' with 350000

IF 'uang' >= 'robot' 
    CALCULATE 'uang' = 'uang' - 'robot'
    DISPLAY 'Mainan yang dibeli = 'robot''
    DISPLAY 'Sisa uang' with result of CALCULATE
IF ELSE 'uang' < 'robot' AND 'uang' >= 'tamiya'
    CALCULATE 'uang' = 'uang' - 'tamiya'
    DISPLAY 'Mainan yang dibeli = 'tamiya''
    DISPLAY 'Sisa uang' with result of CALCULATE
IF ELSE 'uang' < 'tamiya' AND 'uang' >= 'rubik'
    CALCULATE 'uang' = 'uang' - 'rubik'
    DISPLAY 'Mainan yang dibeli = 'rubik''
    DISPLAY 'Sisa uang' with result of CALCULATE
ELSE DISPLAY 'Nabung lagi ya, dek!'