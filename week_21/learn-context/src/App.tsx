import { useState } from "react";

import "./App.css";
import { ThemeContext } from "./context/ThemeConrext";
import Page from "./components/Page/Page";
import Header from "./components/Header/Header";
import Counter from "./components/Counter.tsx/Counter";

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () =>
        setTheme((t) => (t === "light" ? "dark" : "light"));
    return (
        <>
            <ThemeContext value={{ theme, toggleTheme }}>
              <Header/>
                <Page />
                <Counter/>
            </ThemeContext>
        </>
    );
}

export default App;
