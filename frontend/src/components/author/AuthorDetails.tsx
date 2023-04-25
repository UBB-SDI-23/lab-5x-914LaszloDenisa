import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Author } from "../../models/Author";
import { BookAuthors } from "../../models/BookAuthors";
import { Book } from "../../models/Book";

export const AuthorDetails = () => {
	const { authorId } = useParams();
	const [author, setAuthor] = useState<Author>();

	useEffect(() => {
		const fetchCourse = async () => {
			// TODO: use axios instead of fetch
			// TODO: handle errors
			// TODO: handle loading state
			const response = await fetch(`${BACKEND_API_URL}/authors/${authorId}/`);
			const author = await response.json();
			setAuthor(author);
		};
		fetchCourse();
	}, [authorId]);

	return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/authors/`}>
						<ArrowBackIcon />
					</IconButton>{" "}
					<h1>Author Details</h1>
					<p>First Name: {author?.first_name}</p>
					<p>Last Name: {author?.last_name}</p>
					<p>Agent: {author?.agent} </p>
					<p>Date pf birth: {author?.date_of_birth}</p>
					<p>Country of origin: {author?.country_of_origin}</p>
					<p>Books:</p>
					<ul>
						{author?.books?.map((data: BookAuthors, index) => (
							<li key={ index }>
								{data.author_comments}
							</li>
						))}
					</ul>
					
					
				</CardContent>
				<CardActions>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/authors/${authorId}/edit`}>
						<EditIcon />
					</IconButton>

					<IconButton component={Link} sx={{ mr: 3 }} to={`/authors/${authorId}/delete`}>
						<DeleteForeverIcon sx={{ color: "red" }} />
					</IconButton>
				</CardActions>
			</Card>
		</Container>
	);
};
