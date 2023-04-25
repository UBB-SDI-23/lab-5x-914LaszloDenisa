/*
import { useEffect, useState } from "react";
import { BookStore } from "../../models/BookStore";
import { BACKEND_API_URL } from "../../constants";
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
    IconButton,
    Tooltip,
    Toolbar,
    Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const BookStoreShowAll = () => {
    const [loading, setLoading] = useState(false);
    const [bookstore, setBookStore] = useState<BookStore[]>([]);

    useEffect(() => {
        fetch(`${BACKEND_API_URL}/bookstores/`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setBookStore(data);
            });
    }, []);

    if (bookstore.length == 0) {
        return <div>No bookstores</div>;
    }

    return (
        <div>
            <h1>BookStores List</h1>
            {!loading && bookstore.length === 0 && <p>No bookstores found</p>}
            {!loading && (
                <IconButton
                    sx={{ mr: 3 }}
                    onClick={() => {
                        window.location.href = '/bookstores/add/';
                    }}
                >
                    <Tooltip title="Add a new bookstore" arrow>
                        <AddIcon color="primary" />
                    </Tooltip>
                </IconButton>
            )}
            {!loading && bookstore.length > 0 && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Manager</TableCell>
                                <TableCell align="center">Location</TableCell>
                                <TableCell align="center">Country</TableCell>
                                <TableCell align="center">Fouding Year</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookstore.map((author: BookStore, index) => (
                                <tr key={index}>
                                    <TableCell align="center">{index}</TableCell>
                                    <TableCell align="center">{author.store_name}</TableCell>
                                    <TableCell align="center">{author.store_manager}</TableCell>
                                    <TableCell align="center">{author.store_location}</TableCell>
                                    <TableCell align="center">{author.store_country}</TableCell>
                                    <TableCell align="center">{author.founding_year}</TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            sx={{ mr: 3 }}
                                            onClick={() => {
                                                window.location.href = `/bookstores/${author.id}/details`;
                                            }}
                                        >
                                            <Tooltip title="View bookstore details" arrow>
                                                <ReadMoreIcon color="primary" />
                                            </Tooltip>
                                        </IconButton>

                                        <IconButton
                                            sx={{ mr: 3 }}
                                            onClick={() => {
                                                window.location.href = `/bookstores/${author.id}/edit`;
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>

                                        <IconButton
                                            sx={{ mr: 3 }}
                                            onClick={() => {
                                                window.location.href = `/bookstores/${author.id}/delete`;
                                            }}
                                        >
                                            <DeleteForeverIcon sx={{ color: "red" }} />
                                        </IconButton>
                                    </TableCell>
                                </tr>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};*/