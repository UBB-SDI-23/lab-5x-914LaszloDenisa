/*
import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BookStore } from "../../models/BookStore";

export const BookStoreDetails = () => {
	const { bookStoreId } = useParams();
	const [bookstore, setBookStore] = useState<BookStore>();

	useEffect(() => {
		const fetchCourse = async () => {
			// TODO: use axios instead of fetch
			// TODO: handle errors
			// TODO: handle loading state
			const response = await fetch(`${BACKEND_API_URL}/bookstores/${bookStoreId}/`);
			const bookstore = await response.json();
			setBookStore(bookstore);
		};
		fetchCourse();
	}, [bookStoreId]);

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/bookstores/`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<h1>BookStore Details</h1>
					<p>Name: {bookstore?.store_name}</p>
					<p>Manager: {bookstore?.store_manager}</p>
					<p>Location: {bookstore?.store_location} </p>
					<p>Founding Year: {bookstore?.founding_year}</p>
					<p>Best Seller: {}</p>

				</CardContent>
				<CardActions>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/bookstores/${bookStoreId}/edit`}>
						<EditIcon />
					</IconButton>

					<IconButton component={Link} sx={{ mr: 3 }} to={`/bookstores/${bookStoreId}/delete`}>
						<DeleteForeverIcon sx={{ color: "red" }} />
					</IconButton>
				</CardActions>
			</Card>
		</Container>
	);
};
*/