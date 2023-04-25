class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
	}
	set state(number) {
		if (number < 0) {
			this._state = 0
		}
		if (number > 100) {
			this._state = 100
		} else {
			this._state = number
		}
	}
	get state() {
		return this._state;
	}
}
class Magazine extends PrintEditionItem {
	type = "magazine";

}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;

	}
}
class NovelBook extends Book {
	type = "novel"
}
class FantasticBook extends Book {
	type = "fantastic"
}
class DetectiveBook extends Book {
	type = "detective"
}
class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book._state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		return this.books.find(book => book[type] == value) || null;
	}
	giveBookByName(bookName) {
		const book = this.findBookBy('name', bookName);
		if (book) {
			this.books.splice(this.books.indexOf(book), 1);
		}
		return book;
	}
}