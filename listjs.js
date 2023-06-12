// Ambil elemen-elemen yang dibutuhkan
const bookListBody = document.getElementById('book-list-body');
const bookForm = document.getElementById('book-form');
const bookTitleInput = document.getElementById('book-title');
const bookAuthorInput = document.getElementById('book-author');
const bookYearInput = document.getElementById('book-year');

// Fungsi untuk menambahkan buku baru ke dalam tabel
function addBook(event) {
  event.preventDefault(); // Mencegah submit form mengarahkan ke halaman baru

  const bookTitle = bookTitleInput.value; // Ambil judul buku dari input
  const bookAuthor = bookAuthorInput.value; // Ambil pengarang buku dari input
  const bookYear = bookYearInput.value; // Ambil tahun terbit buku dari input

  if (bookTitle === '' || bookAuthor === '' || bookYear === '') {
    return; // Jika salah satu input kosong, tidak melakukan apa-apa
  }

  const newRow = document.createElement('tr'); // Buat baris baru

  // Buat kolom-kolom baru dengan data buku
  const titleCol = document.createElement('td');
  titleCol.textContent = bookTitle;

  const authorCol = document.createElement('td');
  authorCol.textContent = bookAuthor;

  const yearCol = document.createElement('td');
  yearCol.textContent = bookYear;

  const actionCol = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Hapus';
  deleteButton.addEventListener('click', removeBook);
  actionCol.appendChild(deleteButton);

  // Tambahkan kolom-kolom ke dalam baris
  newRow.appendChild(titleCol);
  newRow.appendChild(authorCol);
  newRow.appendChild(yearCol);
  newRow.appendChild(actionCol);

  bookListBody.appendChild(newRow); // Tambahkan baris ke dalam tabel

  // Reset input keadaan awal
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
  bookYearInput.value = '';
}

// Fungsi untuk menghapus buku dari tabel
function removeBook(event) {
  const row = event.target.parentElement.parentElement; // Ambil elemen <tr> yang mengandung tombol hapus
  row.remove(); // Hapus elemen <tr> dari tabel
}

// Tambahkan event listener ke form untuk menangani submit
bookForm.addEventListener('submit', addBook);
