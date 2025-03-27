import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Forms } from "./pages/Forms";
import { Context } from "./pages/Context";
import { Books } from "./pages/Books";
import { Book } from "./pages/Book";
import { NotFound } from "./pages/NotFound";
import { BooksLayout } from "./layout/BooksLayout";
import { Users } from "./pages/Users";
import { AuthProvider } from "./context/AuthProvider";
import { MainLayout } from "./layout/MainLayout";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />}/>
                        <Route path="/forms" element={<Forms />}/>
                        <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>}/>
                        <Route path="/context" element={<Context />}/>
                        <Route path="/books" element={<BooksLayout />}>
                            <Route index element={<Books />}/>
                            <Route path=":id" element={<Book />}/>
                            <Route path=":id/:img?" element={<Book />}/>
                        </Route>
                        <Route path="*" element={<NotFound />}/>
                    </Route>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
