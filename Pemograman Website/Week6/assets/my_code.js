// Mendapatkan referensi ke tombol dengan id 'myButton'
var myButton = document.getElementById("myButton");

// Menambahkan event listener untuk menanggapi klik pada tombol
myButton.addEventListener("click", function () {
  // Mendapatkan referensi ke elemen h1 dengan id 'myH1'
  var myH1 = document.getElementById("myH1");

  // Mengubah teks pada elemen h1 menjadi 'Tombol Diklik!' saat tombol diklik
  myH1.innerHTML = "Hello World";
});
