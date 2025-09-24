import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/Users";
import userData from "../data/userdata.json";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [name, setName] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleClick = () => {
        setError("");
        const user = userData.find((u) => u.name === name);
        if (!user) {
            setError("User not found");
            return;
        }
        if (pw !== user.password) {
            setError("Incorrect password");
            return;
        }
        dispatch(login({
            name: name,
            password: pw
        }))
        setName("")
        setPw("")
        navigate("/")

    }

    return <div>
        <h1>Login</h1>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={(e) => setPw(e.target.value)}></input>

            <button onClick={handleClick}>Login</button>

            {error && <p>{error}</p>}
        </div>
    </div>;
};

