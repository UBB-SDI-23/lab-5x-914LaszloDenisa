import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    CircularProgress,
    Container,
    Button,
} from "@mui/material";

import { useEffect, useState } from "react";
import { BACKEND_API_URL } from "../../constants";
import { Book } from "../../models/Book";


export const BookFilter = () => {
    const [loading, setLoading] = useState(true)
    const [book, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${BACKEND_API_URL}/findbooks/?var=25`)
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
    }, []);

    console.log(book);

    const sortBooks = () => {
        const sortedPlayers = [...book].sort((a: Book, b: Book) => {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;

        })
        console.log(sortedPlayers);
        setBooks(sortedPlayers);
    }


    return (
        <Container>

            <h1 style={{ marginTop: "65px" }}>All books filtered by price</h1>

            {loading && <CircularProgress />}

            {!loading && book.length == 0 && <div>No books found</div>}
            {!loading && (
                <Button sx={{ color: "white" }} onClick={sortBooks}>
                    Sort books by price
                </Button>
            )}

            {!loading && book.length > 0 && (

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 800 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="center"
                                    style={{ color: "#2471A3", fontWeight: 'bold' }}>Title</TableCell>
                                <TableCell align="center"
                                    style={{ color: "#2471A3", fontWeight: 'bold' }}>Publisher</TableCell>
                                <TableCell align="center"
                                    style={{ color: "#2471A3", fontWeight: 'bold' }}>Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {book.map((books: Book, index) => (
                                <TableRow key={books.id}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center">{books.title}</TableCell>
                                    <TableCell align="center">{books.publisher}</TableCell>
                                    <TableCell align="center">{books.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
            }
        </Container>

    );
};