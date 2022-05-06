//array for compilation of books
let myLibrary = [];

//button event listener
let form = document.getElementById('book-form');
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
    addBooks();
    form.reset();
});

//object contructor to create books
function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//push books to library array and display in UI
function addBooks() {
    const title = document.getElementById('formtitle').value;
    const author = document.getElementById('formauthor').value;
    const pages = document.getElementById('formpages').value;
    const read = document.getElementById('formread').checked;
    let newBook = new Books(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

//display book cards
function render() {
    const display = document.getElementById('library-div');
    const books = document.querySelectorAll('.book');
    books.forEach((book) => display.removeChild(book));

    for (let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

//creates book cards for library
function createBook(item) {
    const cardDiv = document.querySelector('.cards');
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

    cardDiv.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        render();
    });

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        render();
    });
}

render();