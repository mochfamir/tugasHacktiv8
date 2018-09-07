'use strict'
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
// nambahin array
function dataHandling2(arr) {

    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung") // menghapus 2 nilai di index 1
    input.splice(4, 2, "Pria", "SMA Internasional Metro")    // menghapus 2 nilai di index 4
    console.log(input)

    // pecah array yg dipisah pake '/'
    var inputSplit = input[3].split("/")                // ["21","05","1989"]

    // join tanggal peke '-'
    var inputJoin = inputSplit.join("-")            // 21-05-1989

    // menggabungkan string '0' dengan '5'
    var bulan = inputJoin[3] + inputJoin[4]         // 05

    // buat switch case, jika nilai '05' maka ganti 'mei'
    switch (bulan) {
        case '01': console.log("Januari")
            break;
        case '02': console.log("Februari")
            break;
        case '03': console.log("Maret")
            break;
        case '04': console.log("April")
            break;
        case '05': console.log("Mei")
            break;
        case '06': console.log("Juni")
            break;
        case '07': console.log("Juli")
            break;
        case '08': console.log("Agustus")
            break;
        case '09': console.log("September")
            break;
        case '10': console.log("Oktober")
            break;
        case '11': console.log("November")
            break;
        case '12': console.log("Desember")

            break;
    }

    //descending inputSplit

    // yang ini sayagak ngerti
    var inputShortDes = inputSplit.sort(function (a, b) { return b - a });
    console.log(inputShortDes)


    var tes = input[3].split("/")
    //console.log(input[3])
    console.log(tes.join("-"))

    // mengubah nilai array[1] menjadi string, lalu ambil dari indeks 0 sampai 14
    console.log(input[1].toString().slice(0, 14))
    
    return arr

}
dataHandling2()