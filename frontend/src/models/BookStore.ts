import { Book } from "./Book"

export interface BookStore{
	id: number;
	store_name: string;
    store_manager: string;
    store_location: string;
    store_country: string;
    founding_year: number;
    best_seller: Book;
}