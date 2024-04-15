import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import PlacesPage from "./PlacesPage";
import AccountNav from "./AccountNav";
const AccountPage=()=>{
    const {ready,user,setUser}=useContext(UserContext);
    const [redirect,setRedirect]=useState(null);

    let {subpage}=useParams();

    if(subpage===undefined){
        subpage='profile';
    }
    
    async function logout()
    {   try{
            await axios.post('/logout'); 
            setRedirect('/');  
            setUser(null);  
        }catch(e){
            console.log(e.message)
        }
       
    }
    if(!ready)
    {
        return 'Loading.....';
    }

    if(ready && !user && !redirect){
        return <Navigate to={'/login'}/>
    }
    

    if(redirect){
        return <Navigate to={redirect}/>
    }    

    return(
        <div>
            <AccountNav/> 
            {subpage==='profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email}) <br/>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage==='places' &&
                (
                    <div>
                        <PlacesPage/>
                    </div>
                )
            } 
        </div> 
    );
}
export default AccountPage;