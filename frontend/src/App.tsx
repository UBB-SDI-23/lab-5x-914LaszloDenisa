import './App.css'
import { AuthorShowAll } from './components/author/AuthorShowAll'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppMenu } from "./components/AppMenu";
import { AddAuthor } from './components/author/AddAuthor';
import { AuthorDelete } from './components/author/AuthorDelete';
import { AuthorDetails } from './components/author/AuthorDetails';
import { AuthorEdit } from './components/author/AuthorEdit';
import { BookFilter } from './components/book/BookFilter';

function App() {
    return (

        <>
            <BrowserRouter>
                <AppMenu />
                <Routes>
                    <Route path="/authors/" element={<AuthorShowAll />} />
                    <Route path="/authors/add/" element={<AddAuthor />} />
                    <Route path="/authors/:authorId/delete" element={<AuthorDelete />} />
                    <Route path="/authors/:authorId/details" element={<AuthorDetails />} />
                    <Route path="/authors/:authorId/edit" element={<AuthorEdit />} />
                    <Route path="/findbooks/" element={<BookFilter />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
