function searchBooks() {
    // Mendapatkan nilai input pencarian
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
  
    // Mendapatkan semua baris data buku dalam tabel
    var rows = document.querySelectorAll("#bookTable tbody tr");
  
    // Melakukan pencarian dan menampilkan baris yang sesuai
    for (var i = 0; i < rows.length; i++) {
      var title = rows[i].getElementsByTagName("td")[0].textContent.toLowerCase();
      var author = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();
  
      if (title.includes(searchInput) || author.includes(searchInput)) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
  