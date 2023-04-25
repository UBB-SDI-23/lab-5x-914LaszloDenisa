import { useState } from "react";
import { Author } from "../../models/Author";
import { BACKEND_API_URL } from "../../constants";
import axios from "axios";
import { Button, Card, CardContent, IconButton, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useNavigate} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const AddAuthor = () => {
    const navigate = useNavigate();

    const [author, setAuthor] = useState<Author>({
        id: 0,
        first_name: "",
        last_name: "",
        agent: "",
        date_of_birth: "",
        country_of_origin: ""
    });

    const addAuthor = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            await axios.post(`${BACKEND_API_URL}/authors/`, author);
            navigate("/authors");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Card>
                <CardContent>
                    <IconButton component={Link} sx={{ mr: 3 }} to={`/authors/`}>
                        <ArrowBackIcon />
                    </IconButton>{" "}
                    <form onSubmit={addAuthor}>
                        <TextField
                            id="first_name"
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setAuthor({ ...author, first_name: event.target.value })}
                        />
                        <TextField
                            id="last_name"
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setAuthor({ ...author, last_name: event.target.value })}
                        />
                        <TextField
                            id="agent"
                            label="Agent"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setAuthor({ ...author, agent: event.target.value })}
                        />
                        <TextField
                            id="date_of_birth"
                            label="Date of birth"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setAuthor({ ...author, date_of_birth: event.target.value })}
                        />
                        <TextField
                            id="country_of_origin"
                            label="Country of origin"
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                            onChange={(event) => setAuthor({ ...author, country_of_origin: event.target.value })}
                        />

                        <Button type="submit">Add Author</Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )


}