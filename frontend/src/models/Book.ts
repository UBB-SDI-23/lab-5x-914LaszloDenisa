import { BookAuthors } from "./BookAuthors"
import { BookStore } from "./BookStore"

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