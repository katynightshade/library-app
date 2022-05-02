const textLine = document.getElementById('textline');
let myLibrary = [];
let newBook;

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Books.prototype.info = function() {
    return (this.title + ' is written by ' + this.author + ' and is ' + this.pages + ' long. You have ' + this.read + ' this book.')
}

function addBooks() {
    newBook = new Books(title, author, pages, read);
    myLibrary.push(newBook);
}

let theHobbit = new Books('The Hobbit', 'JRR Tolkien', '304 pages', 'read');
let hpSix = new Books('Harry Potter and the Half-Blood Prince', 'JK Rowling', '607 pages', 'not read');