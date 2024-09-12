export default class Book {
    constructor(title, author, publicationYear) {
        this._title = title;
        this._author = author;
        this._publicationYear = publicationYear;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Title must be a valid non-empty string!');
        }
        this._title = value;
    }

    get title() {
        return this._title;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Author must be a valid non-empty string!');
        }
        this._author = value;
    }

    get author() {
        return this._author;
    }

    set publicationYear(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            this._publicationYear = value;
        } else {
            throw new Error('Publication year is not of Number type!');
        }
    }

    get publicationYear() {
        return this._publicationYear;
    }

    printInfo() {
        console.log(`"${this.title}", ${this.author}, ${this.publicationYear}`);
    }

    static getOldestBook(booksArray) {
        let oldestBookIndex;
        let oldestYear = Number.POSITIVE_INFINITY;
        let tmp;
        for (let i = booksArray.length - 1; i >= 0; i--) {
            tmp = booksArray[i].publicationYear;
            if (tmp < oldestYear) {
                oldestYear = tmp;
                oldestBookIndex = i;
            }
        }
        return booksArray[oldestBookIndex];
    }
}