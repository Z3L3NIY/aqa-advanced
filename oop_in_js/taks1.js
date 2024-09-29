import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book(
	"The Lord of the Rings",
	"John Ronald Reuel Tolkien",
	1954
);
const book2 = new Book("Contact", "Carl Sagan", 1985);
const book3 = new Book("The Catcher in the Rye", "Jerome David Salinger", 1951);

book1.printInfo();
try {
	book1.title = "test title";
	book1.author = "test author";
	book1.publicationYear = 9999;
} catch (error) {
	console.log(`An error occurred: ${error.message}`);
}
book1.printInfo();

book2.printInfo();
book3.printInfo();

const ebook1 = new EBook(
	"The Great Gatsby",
	"Francis Scott Key Fitzgerald",
	1925,
	"EPUB"
);

ebook1.printInfo();

const oldestBook = Book.getOldestBook([book1, book2, book3, ebook1]);
oldestBook.printInfo();

try {
	const newEbook = EBook.convertBookToEbook(book2, "PDF");
	newEbook.printInfo();
} catch (error) {
	console.log(`An error occurred: ${error.message}`);
}
