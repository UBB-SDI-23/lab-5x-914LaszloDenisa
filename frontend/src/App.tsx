import './App.css'
import { AuthorShowAll } from './components/author/AuthorShowAll'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppMenu } from "./components/AppMenu";
import { AddAuthor } from './components/author/AddAuthor';
import { AuthorDelete } from './components/author/AuthorDelete';
import { AuthorDetails } from './components/author/AuthorDetails';
import { AuthorEdit } from './components/author/AuthorEdit';
import { BookFilter } from './components/book/BookFilter';
import { BookStoreShowAll } from './components/bookauthor/BookStoreShowAll';
import { AddBookStore } from './components/bookauthor/AddBookStore';
import { BookStoreDelete } from './components/bookauthor/BookStoreDelete';
import { BookStoreDetails } from './components/bookauthor/BookStoreDetails';
import { BookStoreEdit } from './components/bookauthor/BookStoreEdit';
/*
function App() {
    return (

        <>
            <BrowserRouter>
                <AppMenu />
                <Routes>
                    <Route path="/bookstores/" element={<BookStoreShowAll />} />
                    <Route path="/bookstores/add/" element={<AddBookStore />} />
                    <Route path="/bookstores/:bookStoreId/delete" element={<BookStoreDelete />} />
                    <Route path="/bookstores/:bookStoreId/details" element={<BookStoreDetails />} />
                    <Route path="/bookstores/:bookStoreId/edit" element={<BookStoreEdit />} />
                    <Route path="/findbooks/" element={<BookFilter />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

*/
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
