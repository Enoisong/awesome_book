class Book {
  constructor(bookTitle, bookAuthors) {
    this.bookTitle = bookTitle;
    this.bookAuthors = bookAuthors;
    this.id = new Date().getTime().toString().concat(performance.now());
  }
}
export default Book;