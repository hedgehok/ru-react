import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthStatus } from "../components/AuthStatus";

export function MainLayout() {
    return (
        <>
            <AuthStatus />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forms">Forms</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/context">Context</Link></li>
                <li><NavLink to="/books" style={({ isActive }) => isActive ? {color: 'red'} : {}}>Books</NavLink></li>
            </ul>
            <Outlet />
        </>
    );
}