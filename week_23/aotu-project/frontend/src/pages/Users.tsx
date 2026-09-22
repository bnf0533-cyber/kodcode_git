import { useEffect, useState } from "react";
import { getAllUser } from "../services/api";
import {useAuthState} from "../store/authStore"
function Users() {
    const {logout} = useAuthState()
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        getAllUser()
            .then((data) => setUsers(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
            </ul>
            <button onClick={() => logout()}>logout</button>
        </div>
    );
}

export default Users;
