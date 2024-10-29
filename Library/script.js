let books = [];

document.getElementById("addBookBtn").addEventListener("click", addBook);

function addBook() {
    const bookTitle = document.getElementById("bookTitle").value.trim();
    
    if (!bookTitle) {
        alert("Book title cannot be empty!");
        return;
    }
    
    if (books.includes(bookTitle)) {
        alert("This book is already in the list!");
        return;
    }

    books.push(bookTitle);
    document.getElementById("bookTitle").value = '';
    displayBooks();
}

function removeBook(index) {
    books.splice(index, 1);
    displayBooks();
}

function displayBooks(filter = '') {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = '';

    const filteredBooks = books.filter(book => book.toLowerCase().includes(filter.toLowerCase()));

    filteredBooks.forEach((book, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${book} <button onclick="removeBook(${books.indexOf(book)})">Remove</button>
        `;
        bookList.appendChild(li);
    });
}

function searchBook() {
    const searchValue = document.getElementById("searchBook").value;
    displayBooks(searchValue);
}
