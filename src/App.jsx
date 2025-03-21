import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Forms } from "./pages/Forms";
import { Books } from "./pages/Books";
import { Book } from "./pages/Book";
import { NotFound } from "./pages/NotFound";
import { BooksLayout } from "./layout/BooksLayout";

function App() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forms">Forms</Link></li>
                <li><NavLink to="/books" style={({ isActive }) => isActive ? {color: 'red'} : {}}>Books</NavLink></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/forms" element={<Forms />}/>
                <Route path="/books" element={<BooksLayout />}>
                    <Route index element={<Books />}/>
                    <Route path=":id" element={<Book />}/>
                    <Route path=":id/:img?" element={<Book />}/>
                </Route>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );
}

export default App;
