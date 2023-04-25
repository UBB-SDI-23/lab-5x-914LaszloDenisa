import { Author } from "./Author"
import { Book } from "./Book"

export interface BookAuthors{
	id: number;
	contribution: string;
    author_comments: string;
	book: Book;
    author: Author;
}