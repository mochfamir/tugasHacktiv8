var nama = '';
var peran = '';

if (nama !== '' && peran == "Ksatria") {
  console.log("Selamat datang di dunia Proxytia, " + nama);
  console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
}

else if (nama !== '' && peran == "Tabib") {
  console.log("Selamat datang di dunia Proxytia, " + nama);
  console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
}

else if (nama !== '' && peran == "Penyihir") {
  console.log("Selamat datang di dunia Proxytia, " + nama);
  console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}

else if (nama !== '')
  console.log("Halo " + nama + ", pilih peranmu untuk memulai game.");

else 
  console.log("Nama harus diisi!");