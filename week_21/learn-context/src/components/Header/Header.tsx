import { userStore } from "../../store/userStore";

export default function Header() {
    const user = userStore((s) => s.user?.age);
    const setUser = userStore((s) => s.setUser);
    return (
        <div>
            {user}
            <button onClick={() => setUser({ username: "momo", age: 90 })}>
                change user
            </button>
        </div>
    );
}
