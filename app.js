/*eslint-disabled*/

let bookslist = [];

const title = document.getElementById('book_title');
const authors = document.getElementById('book_authors');
const libraryForm = document.getElementById('AwsomeBkForm');
const allbooks = document.getElementById('BookRecord');
 class Book {
    constructor(book_title, book_author) {
        this.book_title = book_title;
        this.book_author = book_author;       
    }
}

function displayBook(book_title, book_author, id) {
    const templateHTML = `${book_title}<br> ${book_author}<br>
    <button type='button' class="remove" id="${id}">Remove</button>
    <hr>`;
    allbooks.insertAdjacentHTML('beforeend', templateHTML);
}
 
const mybooks = JSON.parse(localStorage.getItem('bookArchive')) || []; 
function getBooks() {
    const storage = JSON.parse(localStorage.getItem('bookArchive'));
    storage.forEach((book) => {
        displayBook(book.book_title, book.book_author, book.id);
    });
}

//add book functionality
function addBook() {
    AwsomeBkForm.addEventListener('submit', () => {
        const inputBook = new Book(title.value, authors.value);
        mybooks.push(inputBook);
        book_title.value = '';
        book_authors.value = '';
        book_title.focus();
        book_authors.focus();
        localStorage.setItem('bookArchive', JSON.stringify(mybooks));
        //add book to DOM
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