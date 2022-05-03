const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addBooks());

const newBookBtn = document.getElementById('new-btn');
const libraryDiv = document.querySelector('.library-div');
const title = document.getElementById('formtitle');
const author = document.getElementById('formauthor');
const pages = document.getElementById('formpages');
const read = document.getElementById('formread');

let myLibrary = [];

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooks() {
    let newBook = new Books(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

function render() {
    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

function createBook(item) {
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

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        render();
    });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        render();
    });
}