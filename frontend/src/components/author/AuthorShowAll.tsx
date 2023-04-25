import { useEffect, useState } from "react";
import { Author } from "../../models/Author";
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

export const AuthorShowAll = () => {
    const [loading, setLoading] = useState(false);
    const [authors, setAuthor] = useState<Author[]>([]);

    useEffect(() => {
        fetch(`${BACKEND_API_URL}/authors/`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAuthor(data);
            });
    }, []);

    if (authors.length == 0) {
        return <div>No locations</div>;
    }

    return (
        <div>
            <h1>Authors List</h1>
            {!loading && authors.length === 0 && <p>No authors found</p>}
            {!loading && (
                <IconButton
                    sx={{ mr: 3 }}
                    onClick={() => {
                        window.location.href = '/authors/add/';
                    }}
                >
                    <Tooltip title="Add a new author" arrow>
                        <AddIcon color="primary" />
                    </Tooltip>
                </IconButton>
            )}
            {!loading && authors.length > 0 && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">First Name</TableCell>
                                <TableCell align="center">Last Name</TableCell>
                                <TableCell align="center">Agent</TableCell>
                                <TableCell align="center">Date of birth</TableCell>
                                <TableCell align="center">Country of origin</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {authors.map((author: Author, index) => (
                                <tr key={index}>
                                    <TableCell align="center">{index}</TableCell>
                                    <TableCell align="center">{author.first_name}</TableCell>
                                    <TableCell align="center">{author.last_name}</TableCell>
                                    <TableCell align="center">{author.agent}</TableCell>
                                    <TableCell align="center">{author.date_of_birth}</TableCell>
                                    <TableCell align="center">{author.country_of_origin}</TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            sx={{ mr: 3 }}
                                            onClick={() => {
                                                window.location.href = `/authors/${author.id}/details`;
                                            }}
                                        >
                                            <Tooltip title="View author details" arrow>
                                                <ReadMoreIcon color="primary" />
                                            </Tooltip>
                                        </IconButton>

                                        <IconButton
                                            sx={{ mr: 3 }}
                                            onClick={() => {
                                                window.location.href = `/authors/${author.id}/edit`;
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>

                                        <IconButton
                                            sx={{ mr: 3 }}
                                            onClick={() => {
                                                window.location.href = `/authors/${author.id}/delete`;
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
};




/*
export const AuthorShowAll = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/authors/")
            .then((res) => res.json())
            .then((data) => {
                setAuthors(data);
                console.log(data);
            });
    }, []);

    if (authors.length === 0) {
        return <div>No authors.</div>;
    }
    return (
        <>
            <h1>Authors list</h1>
            <table>
                <tr>
                    <th>#</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>agent</th>
                    <th>date of birth</th>
                    <th>country of origin</th>
                </tr>
                {authors.map((author: Author, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{author.first_name}</td>
                        <td>{author.last_name}</td>
                        <td>{author.agent}</td>
                        <td>{author.date_of_birth}</td>
                        <td>{author.country_of_origin}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}
*/
