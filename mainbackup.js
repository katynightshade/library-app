let myLibrary = [];

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addBooks());

const newBookBtn = document.getElementById('new-btn');

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooks() {
    myLibrary.push(validateForm());
    render();
}

function render() {
    const display = document.getElementById('library-div');
    const books = document.querySelectorAll('.book');
    books.forEach((book) => display.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

function createBook(item) {
    const libraryDiv = document.getElementById('library-div');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookDiv.classList.add('book');

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    titleDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('read');
    if (item.read == false) {
        readBtn.textContent = 'Not Read';
    } else {
        readBtn.textContent = 'Read';
    }
    bookDiv.appendChild(readBtn);

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);

    libraryDiv.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        render();
    });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        render();
    });
}

function validateForm(event) {
    const form = document.getElementById('book-form');
    const title = document.getElementById('formtitle').value;
    const author = document.getElementById('formauthor').value;
    const pages = document.getElementById('formpages').value;
    const read = document.getElementById('formread').checked;
    return new Books(title, author, pages, read);
}