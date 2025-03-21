import { Link, Outlet } from "react-router-dom";

export function BooksLayout() {
    return (
        <>
            <ul>
                <li><Link to="/books/1">Book 1</Link></li>
                <li><Link to="/books/2">Book 2</Link></li>
                <li><Link to="/books/3">Book 3</Link></li>
            </ul>
            <Outlet context={{ name: "Alex" }}/>
        </>
    );
}