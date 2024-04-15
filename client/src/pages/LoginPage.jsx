import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
const LoginPage=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [redirect,setRedirect]=useState(false)
    const {setUser}=useContext(UserContext) 
    async function handleLogin(e){
        e.preventDefault();
        try{
            const {data}=await axios.post('/login',{email,password});
            console.log(data);
            setUser(data);
            alert('Login Successful');
            setRedirect(true);
        }catch(error){
            alert('Login Failed');
        }
    }
    if(redirect){
        return <Navigate to={'/'}/>
    }
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto " onSubmit={(e)=>handleLogin(e)}>
                    <input type="email" placeholder="your@email.com"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}>
                    </input>

                    <input type="password" placeholder="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} >
                    </input>

                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't Have an Account yet ? <Link className="underline text" to="/register"> Register Now</Link>   
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage;