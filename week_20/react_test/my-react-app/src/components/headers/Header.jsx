import reactLogo from "../../assets/react.svg";




export default function Headers() {
    return (
        <div>
            <logo />
            <menu />
            <search />
        </div>
    );
}

function menu() {
    return <nav>
            <ul>
                <li>
                    <a href="">menu 1</a>
                </li>
                <li>
                    <a href="">menu 2</a>
                </li>
                <li>
                    <a href="">menu 3</a>
                </li>
                <li>
                    <a href="">menu 4</a>
                </li>
                <li>
                    <a href="">menu 5</a>
                </li>
            </ul>
        </nav>
}
function search() {
    return <input src="name" />
}

function logo() {
    return <img src={reactLogo} className="framework" alt="React logo" />
}