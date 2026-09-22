import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import Login from "../src/pages/Login";
import Users from "./pages/Users";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />

            <Route
                path="/users"
                element={
                    <ProtectedRoute>
                        <Users />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;
