import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from './welcome';

function Login() {

    const [name, setname ] = useState<string>("test");

    function handleOnClick(){
        const username = (document.getElementById("username") as HTMLInputElement).value;
        setname(username);
        <Routes>
            <Route path='/welcome:{name}' element={<Welcome />} />
        
        </Routes>
        
    }
    return (
        <>
            <h1>Login</h1>
            <input type="text" placeholder="Användarnamn" id="username"/>
            <button id="loginbtn" onClick={handleOnClick}>Logga in</button>
        </>
    )
}
export default Login 
