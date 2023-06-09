// Get the modal
var addModal = document.getElementById("myModal");
var editModal = document.getElementById("editModal");
let nim = document.getElementById("nim");
let nama = document.getElementById("nama");
let tanggal_peminjaman = document.getElementById("tanggalpeminjaman");
let tanggal_pengembalian = document.getElementById("tanggalpengembalian");


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
    nim.value = "";
    nama.value = "";
    tanggalpeminjaman.value = "";
    tanggalpengembalian.value = "";
    addModal.style.display = "none";
    
}


span[1].onclick = function() {
    nim.value = "";
    nama.value = "";
    tanggalpeminjaman.value = "";
    tanggalpengembalian.value = "";
    editModal.style.display = "none";
  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == addModal || event.target == editModal) {
    nim.value = "";
    nama.value = "";
    tanggalpeminjaman.value = "";
    tanggalpengembalian.value = "";
    addModal.style.display = "none";
    editModal.style.display = "none";
  }
}


var submit = document.getElementById("submit")
submit.onclick = ()=>{
    addModal.style.display = "none";
}
