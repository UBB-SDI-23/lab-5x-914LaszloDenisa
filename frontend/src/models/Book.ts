import { BookAuthors } from "./BookAuthors"
import { BookStore } from "./BookStore"
import { Author } from "./Author"

export interface Book{
	id: number;
	title: string;
    publishing_date: string;
    publisher: string;
    description: string;
    price: number;
    bookstore?: BookStore[];
    authors?: BookAuthors[];
}