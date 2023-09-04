const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// database connection
let db = new sqlite3.Database('../data/books.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the books database.');
});

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Our RESTful API methods will go here
// create a new book
app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    // books.push(book);
    db.run(`INSERT INTO books(isbn, title) VALUES(?, ?)`,
    [book.isbn, book.title], function(err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A book has been added`);
    });

    res.send('Book is added to the database');
});

// get all books
app.get('/books', (req, res) => {
    db.all("SELECT isbn, title FROM books", [], (err, rows) => {
        if(err){
            throw err;
        }
        res.json(rows);
    });
});

// get one book by isbn
app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    db.get(`SELECT isbn, title FROM books WHERE isbn = ?`,
        [isbn], (err, row) => {
            if (err) {
                res.status(404).send('Book not found');
            }
        
            res.json(row);
            return;
        });
});

// delete one book
app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    db.run(`DELETE FROM books WHERE isbn = ?`,
        [isbn], function(err) {
            if (err) {
                return console.log(err.message);
            }
        
            console.log(`A book has been deleted`);
    });

    res.send('Book is deleted');
});

// Update one book
app.post('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    db.run(`UPDATE books SET title = ? WHERE isbn = ?`,
        [newBook.title, isbn], function(err) {
            if (err) {
                return console.log(err.message);
            }
        
            console.log(`A book has been updated`);
    });

    res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))