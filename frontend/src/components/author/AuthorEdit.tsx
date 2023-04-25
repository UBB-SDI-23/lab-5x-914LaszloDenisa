import { Button, Card, CardActions, CardContent, Container, FormLabel, IconButton, TextField, colors } from "@mui/material";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Author } from "../../models/Author";
import { useEffect, useState } from "react";


export const AuthorEdit = () => {
    const { authorId } = useParams();
    const navigate = useNavigate();

    const [author, setAuthor] = useState<Author>({
        id: 0,
        first_name: "",
        last_name: "",
        agent: "",
        date_of_birth: "",
        country_of_origin: ""
    });

    const updateAuthor = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            await axios.put(`${BACKEND_API_URL}/authors/${authorId}/`, author);
            navigate("/authors/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleCancel = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        navigate("/authors/");
    };

    return (
        <Container>
            <Card>
                <CardContent>
                    <IconButton component={Link} sx={{ mr: 3 }} to={`/authors/`}>
                        <ArrowBackIcon />
                    </IconButton>{" "}
                    <form onSubmit={updateAuthor} style={{ display: "flex", flexDirection: "column", padding: "8px" }}>
                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                First Name
                            </FormLabel>
                            <TextField
                                id="First Name"
                                variant="outlined"
                                onChange={(event) => setAuthor({ ...author, first_name: event.target.value })}
                            />
                        </Container>

                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Last Name
                            </FormLabel>
                            <TextField
                                id="Last Name"
                                variant="outlined"
                                onChange={(event) => setAuthor({ ...author, last_name: event.target.value })}
                            />
                        </Container>

                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Agent
                            </FormLabel>
                            <TextField
                                id="Agent"
                                variant="outlined"
                                onChange={(event) => setAuthor({ ...author, agent: event.target.value })}
                            />
                        </Container>

                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Date of birth
                            </FormLabel>
                            <TextField
                                id="Date of birth"
                                variant="outlined"
                                onChange={(event) => setAuthor({ ...author, date_of_birth: event.target.value })}
                            />
                        </Container>

                        <Container sx={{ padding: "3px" }} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <FormLabel style={{ marginTop: "15px", fontSize: "18px" }}>
                                Country of origin
                            </FormLabel>
                            <TextField
                                id="Country of origin"
                                variant="outlined"
                                onChange={(event) => setAuthor({ ...author, country_of_origin: event.target.value })}
                            />
                        </Container>

                    </form>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button type="submit" onClick={updateAuthor} variant="contained" sx={{ backgroundColor: colors.green[500] }}>Update</Button>
                    <Button onClick={handleCancel} variant="contained" sx={{ backgroundColor: colors.green[500] }}>Cancel</Button>
                </CardActions>
            </Card>
        </Container>
    );
}