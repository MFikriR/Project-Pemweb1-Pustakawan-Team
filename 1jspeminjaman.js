// Get the modal
var addModal = document.getElementById("myModal");
var editModal = document.getElementById("editModal");
let judul = document.getElementById("judul");
let penulis = document.getElementById("penulis");
let tahun = document.getElementById("tahun");
let penerbit = document.getElementById("penerbit");
let jumlah = document.getElementById("jumlah");


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
  judul.value = "";
  penulis.value = "";
  tahun.value = "";
  penerbit.value = "";
  jumlah.value = "";
  addModal.style.display = "none";
}


span[1].onclick = function() {
    judul.value = "";
    penulis.value = "";
    tahun.value = "";
    penerbit.value = "";
    jumlah.value = "";
    editModal.style.display = "none";
  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == addModal || event.target == editModal) {
    judul.value = "";
    penulis.value = "";
    tahun.value = "";
    penerbit.value = "";
    jumlah.value = "";
    addModal.style.display = "none";
    editModal.style.display = "none";
  }
}


var submit = document.getElementById("submit")
submit.onclick = ()=>{
    addModal.style.display = "none";
}
