/* eslint-disable */
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

class bookRack {
  constructor() {
    this.booksrecord = JSON.parse(localStorage.getItem('bookArchive')) || [];
  }

  static displayBook(bookTitle, bookAuthor, id) {
    const templateHTML = `
  <tr>
  <td class="table-item"><p>"${bookTitle}" by ${bookAuthor}</p>
    <button type='button' class="remove" id="${id}">Remove</button>
    </td>
    </tr>
    `;

    allbooks.insertAdjacentHTML('beforeend', templateHTML);
  }

  static getBooks() {
    const storage = JSON.parse(localStorage.getItem('bookArchive'));
    storage.forEach((book) => {
      bookRack.displayBook(book.bookTitle, book.bookAuthor, book.id);
    });
  }

  remove(button, key) {
    button.addEventListener('click', () => {
      if (key === 0) {
        this.booksrecord.splice(key, key + 1);
      } else {
        this.booksrecord.splice(key, 1);
      }

      allbooks.innerHTML = '';
      localStorage.setItem('bookArchive', JSON.stringify(this.booksrecord));
      window.location.reload();
      localStorage.setItem('bookArchive', JSON.stringify(this.booksrecord));
    });
  }

  addBook() {
    AwsomeBkForm.addEventListener('submit', () => {
      const inputBook = new Book(bookTitle.value, bookAuthors.value);
      this.booksrecord.push(inputBook);
      localStorage.setItem('bookArchive', JSON.stringify(this.booksrecord));
      bookTitle.value = '';
      bookAuthors.value = '';
      bookTitle.focus();
      bookAuthors.focus();
      bookRack.getBooks();
    });
    localStorage.setItem('bookArchive', JSON.stringify(this.booksrecord));
    bookRack.getBooks();
  }
}

const keep = new bookRack();
keep.addBook();

const removeAction = document.querySelectorAll('.remove');
removeAction.forEach((btn, index) => {
  keep.remove(btn, index);
});
