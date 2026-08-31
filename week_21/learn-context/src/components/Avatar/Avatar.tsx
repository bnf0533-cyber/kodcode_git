import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeConrext";

export default function Avatar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <p>I am avatar my message is: {theme}</p>
            <button onClick={toggleTheme}>change</button>
        </div>
    );
}
