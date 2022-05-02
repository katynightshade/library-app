const textLine = document.getElementById('textline');

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} is written by ${author} and is ${pages} long. You have ${read} this book.`
    }
}

let theHobbit = new Books('The Hobbit', 'JRR Tolkien', '304 pages', 'read');
let hpSix = new Books('Harry Potter and the Half-Blood Prince', 'JK Rowling', '607 pages', 'not read');

console.log(hpSix.info());

//Not sure how to use object contructors quite yet, currently attempting to console log '(book title) is written by (author) and is (pages) long. you have (read/not read) this book.'.