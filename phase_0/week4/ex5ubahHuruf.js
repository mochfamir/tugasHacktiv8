function ubahHuruf(kata) {
    var huruf = 'abcdefghijklmnopqrstuvwxyza'
    var output = ""

    // bandingkan huruf dengan kata
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < huruf.length-1; j++) {
            // jika index kata sama dengan index huruf
            if (kata[i] == huruf[j]) {
                // tampilkan index huruf + 1
                output = output + huruf[j + 1]
            }
        }
    }
    return output
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu