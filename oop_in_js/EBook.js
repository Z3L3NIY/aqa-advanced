import Book from "./Book.js";

export default class EBook extends Book {
	constructor(title, author, publicationYear, fileExtension) {
		super(title, author, publicationYear);
		this._fileExtension = fileExtension;
	}

	set fileExtension(value) {
		if (typeof value !== "string" || value.trim() === "") {
			throw new Error("File extension must be a valid non-empty string!");
		}
		this._fileExtension = value;
	}

	get fileExtension() {
		return this._fileExtension;
	}

	printInfo() {
		console.log(
			`"${this.title}", ${this.author}, ${this.publicationYear} - ${this.fileExtension}`
		);
	}

	static convertBookToEbook(book, fileType) {
		if (book.constructor !== Book) {
			throw new Error("First parameter must be of Book type!");
		}

		if (typeof fileType !== "string" || fileType.trim() === "") {
			throw new Error("Second parameter must be a valid non-empty string!");
		}

		return new EBook(book.title, book.author, book.publicationYear, fileType);
	}
}
