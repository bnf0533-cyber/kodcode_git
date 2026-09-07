
import "./App.css";
import useLocalStorage, { useFetch } from "./hook/useLocalStorage";
// import { ThemeContext } from "./context/ThemeConrext";
// import Page from "./components/Page/Page";
// import Header from "./components/Header/Header";
// import Counter from "./components/Counter.tsx/Counter";

function App() {
    const [username , setUserName] = useLocalStorage("user")
    const {error , data} = useFetch("https://jsonplaceholder.typicode.com/todos")
    // const [theme, setTheme] = useState("light");
    // const toggleTheme = () =>
    //     setTheme((t) => (t === "light" ? "dark" : "light"));
    return (
        <>
            {/* <ThemeContext value={{ theme, toggleTheme }}>
                <Header />
                <Page />
                <Counter />
            </ThemeContext> */}
            <div>
                {username || "default"}
                <input type="text" onChange={e => setUserName(e.target.value)} />
                {data}
                {error || data}
            </div>
        </>
    );
}

export default App;
