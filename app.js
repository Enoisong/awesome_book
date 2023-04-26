/* eslint-disabled */
const bookTitle = document.getElementById('bookTitle');
const bookAuthors = document.getElementById('bookAuthors');
const AwsomeBkForm = document.getElementById('AwsomeBkForm');
const allbooks = document.getElementById('BookRecord');
class Book {
  constructor(bookTitle, bookAuthor) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
  }
}

const mybooks = JSON.parse(localStorage.getItem('bookArchive')) || [];

// function to display books
function displayBook(bookTitle, bookAuthor, id) {
  const templateHTML = `${bookTitle}<br> ${bookAuthor}<br>
    <button type='button' class="remove" id="${id}">Remove</button>
    <hr>`;
  allbooks.insertAdjacentHTML('beforeend', templateHTML);
}

function getBooks() {
  const storage = JSON.parse(localStorage.getItem('bookArchive'));
  storage.forEach((book) => {
    displayBook(book.bookTitle, book.bookAuthor, book.id);
  });
}

// add book functionality
function addBook() {
  AwsomeBkForm.addEventListener('submit', () => {
    const inputBook = new Book(bookTitle.value, bookAuthors.value);
    mybooks.push(inputBook);
    bookTitle.value = '';
    bookAuthors.value = '';
    bookTitle.focus();
    bookAuthors.focus();
    localStorage.setItem('bookArchive', JSON.stringify(mybooks));
    // add book to DOM
    getBooks();
  });

  localStorage.setItem('bookArchive', JSON.stringify(mybooks));
  getBooks();
}

addBook();

// remove book functionality
const removeAction = document.querySelectorAll('.remove');
removeAction.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0) {
      mybooks.splice(index, index + 1);
    } else {
      mybooks.splice(index, index);
    }

    allbooks.innerHTML = '';
    localStorage.setItem('bookArchive', JSON.stringify(mybooks));
    window.location.reload();
    localStorage.setItem('bookStorage', JSON.stringify(mybooks));
  });
});