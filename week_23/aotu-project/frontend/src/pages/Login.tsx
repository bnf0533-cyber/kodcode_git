import { useNavigate } from "react-router";
import { loginUser } from "../services/api";
import { useAuthState } from "../store/authStore";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const useToken = useAuthState();
    const [errorMsg, setErrorMsg] = useState("");
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    loginUser({ email, password })
                        .then((currUser) => {
                            if (currUser.token) {
                                useToken.setToken(currUser.token);
                                navigate("/users");
                            }
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
                <button type="submit">Login</button>
                <button type="button" onClick={() => navigate("/register")}>
                    Don't have an account? Register
                </button>
                {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            </form>
        </div>
    );
}

export default Login;
