// Mendefinisikan fungsi untuk mengubah teks pada elemen h1
function changeText() {
  // Mendapatkan referensi ke elemen h1 dengan id 'myH1'
  var myH1 = document.getElementById("myH1");

  // Mengubah teks pada elemen h1 menjadi 'Teks diubah oleh my_code_1.js'
  myH1.innerHTML = "Hello";
}

// Memanggil fungsi changeText setelah halaman selesai dimuat
window.addEventListener("load", changeText);
