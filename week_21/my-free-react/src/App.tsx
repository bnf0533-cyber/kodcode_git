import { createContext, useState } from "react";
import Button from "./components/Button";

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState({
    username: "moshe",
    phone: 1000000000,
  });

  const urls = [
    "http://example.com",
    "http://example.com",
    "http://example.com",
    "http://example.com",
    "http://example.com",
    "http://example.com",
    "http://example.com",
    "http://example.com",
  ];

  const handleChangeUser = () => {
    setUser({ username: "david", phone: 2000000000 });
  };

  return (
    <div>
      <UserContext value={{ user, setUser }}>
        {urls.map((url, i) => (
          <Button 
            key={i}
            onClick={() => {
              console.log(url);
            }}
            label={i + 1 + ""}
          />
        ))}
        <button onClick={handleChangeUser}>change user</button>
      </UserContext>
    </div>
  );
}