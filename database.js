// Get the modal
var addModal = document.getElementById("myModal");
var editModal = document.getElementById("editModal");


let idPeminjaman = document.getElementById("idPeminjaman");
let idBuku = document.getElementById("idBuku");
let nim = document.getElementById("nim");
let nama = document.getElementById("nama");
let tanggalPeminjaman = document.getElementById("tanggalPeminjaman");
let tanggalPengembalian = document.getElementById("tanggalPengembalian");



// Get the button that opens the modal
var btnTambah = document.getElementById("btnTambah");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");


// When the user clicks on the button, open the modal
btnTambah.onclick = function() {
  addModal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {

  idPeminjaman = "";
  idBuku = "";
  nim.value = "";
  nama.value = "";
  tanggalPeminjaman.value = "";
  tanggalPengembalian.value = "";
  addModal.style.display = "none";
}


span[1].onclick = function() {

  idPeminjaman = "";
  idBuku = "";
  nim.value = "";
  nama.value = "";
  tanggalPeminjaman.value = "";
  tanggalPengembalian.value = "";
  editModal.style.display = "none";
  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == addModal || event.target == editModal) {
    idPeminjaman = "";
    idBuku = "";
    nim.value = "";
    nama.value = "";
    tanggalPeminjaman.value = "";
    tanggalPengembalian.value = "";
    addModal.style.display = "none";
    editModal.style.display = "none";
  }
}


var submit = document.getElementById("submit")
submit.onclick = ()=>{
    addModal.style.display = "none";
}
