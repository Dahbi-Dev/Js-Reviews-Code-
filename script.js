const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}


/*
// Destructuring :

let book = getBook(2)
book;
console.log(book)

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log({ author, title, genres });


// Rest Operator
// shows the two premier numbers:

const [primerGenre , secondGenre] = genres;
console.log(primerGenre, secondGenre);


//shows other Genres :

const[primarGen , secondGen , ...otherGen] = genres;
console.log(primarGen, secondGen, otherGen);

//Spread Operator add properties
const updatedBook = {...book, moviePublicationDate:'2001-12-19',pages:'1210',
translations:{English:'hello guy',...book.translations,Indian:'jdSJS JDSJF'},
};
updatedBook;
console.log(updatedBook)

//template Literals;

const samury = `${title} it is a ${pages}-page long book was written by ${author} and publish in ${publicationDate}. The book has ${
    hasMovieAdaptation ? "" : "not"
} ben adapter as a movie` ;

samury;
console.log(samury)

// Ternaries Instead Of IF-ELSE Statements

const pageRange = pages > 1000 ? 'over than 1000' : 'less than 1000';
pageRange;
console.log(pageRange)
console.log(`The book has a ${pageRange} pages`)


let x = 9;
const res = x = 9 ? "true" : "false";
res;

//-------------------------------------------------
// arrow function 
//-------------------------------------------------
//basic function 
function getYearOldFuncton(str){
    return str.split("-")[0]
}
console.log(getYearOldFuncton(publicationDate))


//arrow funciton
const getYearNewFunction = (str) => str.split("-")[0];
console.log(getYearNewFunction(publicationDate))

//Short-Ciruting and  Logical Operators && , || , ?? .

// && : 
console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "this book has a movie");

// || :

console.log(true || "Some String");
console.log(false || "Some String");


const spanish = book.translations.spanish || "Not Translated";
spanish;

//Optional Chaining :
book = getBook(3)
function getTotalReviewsCount(book){
    const goodreads = book.reviews?.goodreads?.reviewsCount;
    const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
    return goodreads + librarything
    
}

console.log(getTotalReviewsCount(book));

*/

/*

//-------------------------------------
//Array Map Method :

let books = getBooks();
books;


//Ex1:
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// Ex2:
const titles = books.map((book) => book.title);
console.log(titles);


//-------------------------------
// The Filter Array : 

// Ex1 :
const longBooks = books.filter((book) => book.pages > 500).map(book => book.title)
longBooks;

// Ex 2:
const longBooksWithMovie = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation)
longBooksWithMovie;

// Ex3:
const adventureBooks = books.filter((book) => book.genres.includes("adventure")).map(book => book.title);
adventureBooks;

//-----------------------
//The Reduce Method:

//Ex1:
const pageAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pageAllBooks;


//-----------------------
//The Sort Method
const arr = [3, 6, 9, 1, 7];

//💥 our array change on every sort we do  //important to add a copy usin slice()
//Solution is to add a slice to make a copy of the array and apply the sort on it 
const sortedCopy = arr.slice().sort((a, b) => a - b)
sortedCopy;
arr;
// Ex1:
const asc = arr.sort((a, b) => a - b);
asc;
arr;

const desc = arr.sort((a, b) => b - a);
desc;
arr;


//Ex 2: Sort Pages
const sortedPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedPages;


//Working with Immutable Arrays :

const newBook = {
    id: 6,
    title: "Bad Boys for life",
    author: "Will Smith",
}

// add a book to an array :
const addBook = [...books, newBook];
addBook

// delet a book from an array :
const deletBook = addBook.filter((book) => book.id !== 3);
deletBook;

// update a book from an array :
const updateBook = deletBook.map(book => book.id === 1 ? {...book,pages: 1} : book)
updateBook

*/

// Aysnchronous Javascript : Promises :
/*
const api = "https://jsonplaceholder.typicode.com"
fetch(`${api}/todos`)
.then((res)=> res.json())
.then((data)=> console.log(data));

console.log("Dahbi")
*/ 

// Asnc / Await:
const api = "https://jsonplaceholder.typicode.com"
async function getTodos(){
    const res = await fetch(`${api}/todos`)
    const data =  await res.json();

    console.log(data)
}

getTodos()