const popUp = document.getElementById('pop-up');
const addBtn = document.getElementById('add-btn');
const newBookBtn = document.getElementById('new-btn');
const libraryDiv = document.querySelector('.library-div');
const closeBtn = document.querySelector('.close');
const bookForm = document.getElementById('book-form');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
let myLibrary = [];
let newBook;

function handleClicks() {
    addBtn.addEventListener('click', addBooks());
    newBookBtn.addEventListener('click', () => popUp.style.display = 'block');
    closeBtn.addEventListener('click', () => popUp.style.display = 'none');
}
handleClicks();

function Books(title, author, pages, read) {
    this.title = bookTitle.value;
    this.author = bookAuthor.value;
    this.pages = bookPages.value;
    this.read = bookRead.checked;
}

Books.prototype.info = function() {
    return (this.title + ' is written by ' + this.author + ' and is ' + this.pages + ' long. You have ' + this.read + ' this book.')
}

function addBooks() {
    newBook = new Books(title, author, pages, read);
    myLibrary.push(newBook);
    
    resetForm();
    popUp.style.display = 'none';
}

function resetForm() {
    bookTitle.textContent = '';
    bookAuthor.textContent = '';
    bookPages.textContent = '';
    bookRead.value = 'unchecked';
}

function render() {
    const books = document.querySelectorAll('.book');
    books.forEach(book => libraryDiv.removeChild(book));

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
    bookDiv.setAttribute('id', myLibrary.indexOf(item));
    

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');

    readBtn.classList.add('read');
    if (item.read == false) {
        readBtn.textContent = 'Not Read';
    } else {
        readBtn.textContent = 'Read';
    }

    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('id', 'removeBtn');
    
    bookDiv.append(titleDiv, authorDiv, pageDiv, removeBtn, readBtn);
    libraryDiv.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        render();
    });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        render();
    })
}

render();