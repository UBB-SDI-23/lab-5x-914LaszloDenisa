/*
import { Button, Card, CardActions, CardContent, Container, FormLabel, IconButton, TextField, colors } from "@mui/material";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BookStore } from "../../models/BookStore";
import { useState } from "react";


export const BookStoreEdit = () => {
    const { bookStoreId } = useParams();
    const navigate = useNavigate();

    const [bookstore, setBookStore] = useState<BookStore>({
        id: 0,
        store_name: "",
        store_manager: "",
        store_location: "",
        store_country: "",
        founding_year: 0,
    });

    const updateBookStore = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            await axios.put(`${BACKEND_API_URL}/bookstores/${bookStoreId}/`, bookstore);
            navigate("/bookstores/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleCancel = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        navigate("/bookstores/");
    };

    return (
        <Container>
            <Card>
                <CardContent>
                    <IconButton component={Link} sx={{ mr: 3 }} to={`/authors/`}>
                        <ArrowBackIcon />
                    </IconButton>{" "}
                    <form onSubmit={updateBookStore} style={{ display: "flex", flexDirection: "column", padding: "8px" }}>
                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Name
                            </FormLabel>
                            <TextField
                                id="Store Name"
                                variant="outlined"
                                onChange={(event) => setBookStore({ ...bookstore, store_name: event.target.value })}
                            />
                        </Container>

                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Manager
                            </FormLabel>
                            <TextField
                                id="Manager"
                                variant="outlined"
                                onChange={(event) => setBookStore({ ...bookstore, store_manager: event.target.value })}
                            />
                        </Container>

                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Location
                            </FormLabel>
                            <TextField
                                id="Location"
                                variant="outlined"
                                onChange={(event) => setBookStore({ ...bookstore, store_location: event.target.value })}
                            />
                        </Container>

                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Country
                            </FormLabel>
                            <TextField
                                id="Country"
                                variant="outlined"
                                onChange={(event) => setBookStore({ ...bookstore, store_country: event.target.value })}
                            />
                        </Container>

                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Founding Year
                            </FormLabel>
                            <TextField
                                id="Founding Year"
                                variant="outlined"
                                onChange={(event) => setBookStore({ ...bookstore, founding_year: event.target.value })}
                            />
                        </Container>

                    </form>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button type="submit" onClick={updateBookStore} variant="contained" sx={{ backgroundColor: colors.green[500] }}>Update</Button>
                    <Button onClick={handleCancel} variant="contained" sx={{ backgroundColor: colors.green[500] }}>Cancel</Button>
                </CardActions>
            </Card>
        </Container>
    );
}*/