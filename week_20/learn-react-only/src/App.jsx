import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";

function App() {
    return (
        <MovieProvider>
        <div>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorite />} />
                </Routes>
            </main>
        </div>
        </MovieProvider>
    );
}

export default App;
