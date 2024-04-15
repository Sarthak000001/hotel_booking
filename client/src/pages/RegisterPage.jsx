import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const RegisterPage=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    async function registerUser(e){
        e.preventDefault();  
        try{
            const data={
                name,email,password
             };
             await axios.post('/register',data);
              alert('Registration Successfull. Now You Can Login !');   
        }catch(error){
             alert('Registration Failed. Try Again !');  
        }
          
          
    }
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={(e)=>registerUser(e)}>
                    <input type="text" placeholder="Sarthak Nirgude" 
                         value={name} 
                        onChange={(e)=>setName(e.target.value)}>
                    </input>
                    <input type="email" placeholder="your@email.com"
                         value={email}
                        onChange={(e)=>setEmail(e.target.value)} >
                     </input>
                    <input type="password" placeholder="password"
                         value={password}
                        onChange={(e)=>setPassword(e.target.value)}>
                     </input>
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already A Member ? <Link className="underline text" to="/login"> Login</Link>   
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage;