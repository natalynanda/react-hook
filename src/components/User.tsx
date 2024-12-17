import { useState } from "react";

interface User {
  id: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<User>();
  const login = () => {
    setUser({
      id: "1",
      name: "Fernando",
    });
  };
  return (
    <div className="mt-5">
      <h1>User</h1>
      <button onClick={login} className="btn btn-outline-primary mt-2">
        Login
      </button>
      {user ? <pre>{JSON.stringify(user)}</pre> : "No user"}
    </div>
  );
};
