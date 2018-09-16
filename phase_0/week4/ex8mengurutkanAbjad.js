function urutkanAbjad(str) {
    output = []
    tampung = []
    //masukan setiap indeks str ke dalam array output
    for (var i = 0; i < str.length; i++) {
        output.splice(i+1,0, str[i])
    }
    //sortir output dari yang terkecil
    output.sort()
    //kembalikan nilai dalam array output kedalam string
    return output.join('')
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'