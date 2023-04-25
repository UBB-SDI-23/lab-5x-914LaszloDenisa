import { useState } from "react";
import { BookStore } from "../../models/BookStore";
import { BACKEND_API_URL } from "../../constants";
import axios from "axios";
import { Button, Card, CardActions, CardContent, IconButton, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Book } from "../../models/Book";
import { MenuItem } from "../../../node_modules/@mui/material/index";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
};

export const AddBookStore = () => {
    const navigate = useNavigate();

    const [bookstore, setBookStore] = useState<BookStore>({
        id: 0,
        store_name: "",
        store_manager: "",
        store_location: "",
        store_country: "",
        founding_year: 0,
        best_seller: 1
    });

    const addBookStore = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            await axios.post(`${BACKEND_API_URL}/bookstores/`, bookstore);
            navigate("/bookstores");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Card>
                <CardContent>
                    <IconButton component={Link} sx={{ mr: 3 }} to={`/bookstores/`}>
                        <ArrowBackIcon />
                    </IconButton>{" "}
                    <form onSubmit={addBookStore}>
                        <TextField
                            id="store_name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setBookStore({ ...bookstore, store_name: event.target.value })}
                        />
                        <TextField
                            id="store_manager"
                            label="Manager"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setBookStore({ ...bookstore, store_manager: event.target.value })}
                        />
                        <TextField
                            id="store_location"
                            label="Location"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setBookStore({ ...bookstore, store_location: event.target.value })}
                        />
                        <TextField
                            id="store_country"
                            label="Country"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setBookStore({ ...bookstore, store_country: event.target.value })}
                        />
                        <TextField
                            id="founding_year"
                            label="Founding Year"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setBookStore({ ...bookstore, founding_year: event.target.value })}
                        />
                        <TextField
                            id="best_seller"
                            label="Best Seller"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setBookStore({ ...bookstore, best_seller: event.target.value })}
                        />
                        <Select
                            labelId="book-select-label"
                            id="book-select"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => {
                                const bookId = event.target.value as number;
                                //   const selectedAuthor = author?.find((a) => a.id === authorId);
                                setBookStore((bookstore) => ({
                                    ...bookstore,
                                    best_seller: bookId,
                                }));
                                
                            }}
                        >
                            {book?.map((a) => (
                                <MenuItem key={a.id} value={a.id}>
                                    {a.title}
                                </MenuItem>
                            ))}
                        </Select>

                        <Button type="submit">Add BookStore</Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )


}