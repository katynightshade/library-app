/*Form action may not be the problem, may be the link between the form data and JS. Website automatically loads with the read/remove buttons, remove and read buttons function as expected, but other form data is not populating. Directing the form to itself seems like it might work */
/*Changed bookTtle, Author, Pages, and Read because the id's within the form were the same as what is being created below, this cause the remove and read buttons to disappear, still having issues with the connection between the form data and the JS */
/*Issue may be the render function or the Books object constructor. */

const popUp = document.getElementById('pop-up');
const addBtn = document.getElementById('add-btn');
const newBookBtn = document.getElementById('new-btn');
const libraryDiv = document.getElementById('library-div');
const closeBtn = document.querySelector('.close');
const bookForm = document.getElementById('book-form');
const bookTitle = document.getElementById('formtitle');
const bookAuthor = document.getElementById('formauthor');
const bookPages = document.getElementById('formpages');
const bookRead = document.getElementById('formread');
let myLibrary = [];
let newBook;

function handleClicks() {
    addBtn.addEventListener('click', addBooks());
    newBookBtn.addEventListener('click', () => popUp.style.display = 'block');
    closeBtn.addEventListener('click', () => popUp.style.display = 'none');
}
handleClicks();

function Books(title, author, pages, read) {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read.checked;
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
    books.forEach(book => libraryDiv.appendChild(book));

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
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
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
    })
}

render();