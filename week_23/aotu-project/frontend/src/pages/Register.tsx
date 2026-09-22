import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../services/api";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    registerUser({ username, email, password })
                        .then(() => {
                            alert("registered successfully");
                            navigate("/login");
                        })
                        .catch((err) => {
                            setErrorMsg(
                                err.response?.data?.message ||
                                    err.response?.data ||
                                    "Action failed"
                            );
                        });
                }}
            >
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
                <input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="userName"
                />

                <button type="submit">Register</button>
                <button type="button" onClick={() => navigate("/login")}>
                    Already have an account? Login
                </button>
                {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            </form>
        </div>
    );
}

export default Register;
