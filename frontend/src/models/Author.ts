import { BookAuthors } from "./BookAuthors"

export interface Author{
	id: number;
	first_name: string;
    last_name: string;
    agent: string;
    date_of_birth: string;
    country_of_origin: string;
    books?: BookAuthors[];
}