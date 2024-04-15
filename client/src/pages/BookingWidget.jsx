import { useContext, useEffect, useState } from "react";
import {differenceInDays} from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
export default function BookingWidget({place}){
    const [checkIn,setCheckIn]=useState('');
    const [checkOut,setCheckOut]=useState('');
    const [numberOfGuests,setNumberOfGuests]=useState(1);
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [redirect,setRedirect]=useState(''); 
    const {user}=useContext(UserContext);

    useEffect(()=>{
        if(user){
            setName(user.name);
        }
    },[user])
    let numberOfDays=0;
    if(checkIn && checkOut){
        numberOfDays=differenceInDays(new Date(checkOut), new Date(checkIn));
        console.log(numberOfDays);
    }
    async function bookThisPlace(){
        const data={checkIn,checkOut,
            numberOfGuests,name,phone,
            price:numberOfDays*place.price,
            place:place._id,
        }
        const responce=await axios.post('/bookings',data);
        const bookingId=responce.data._id;
        setRedirect('/account/bookings/'+bookingId);
    }

    if(redirect){
        return <Navigate to={redirect}/>
    }
    return (
        <div>
            <div className="bg-white shadow p-4 rounded-2xl">
                <div className="text-2xl text-center">
                    Price:${place.price} / per night
                </div>
                <div className="border rounded-2xl mt-4">
                        <div className="flex">
                            <div className=" py-3 px-4 ">
                                <lable>Check In:  </lable>
                                <input type="date" 
                                value={checkIn} 
                                onChange={e=>setCheckIn(e.target.value)}/>
                            </div>
                            <div className="py-3 px-4 border-l">
                                <lable>Check Out: </lable>
                                <input type="date" 
                                value={checkOut} 
                                onChange={e=>setCheckOut(e.target.value)}/>
                            </div>
                        </div>
                    <div className="py-3 px-4 border-t">
                        <lable>Number of Guest: </lable>
                        <input type="number" value={numberOfGuests} onChange={e=>setNumberOfGuests(e.target.value)}/>
                    </div>
                    {numberOfDays>0 && (
                        <div className="py-3 px-4 border-t">
                        <lable>Your Name: </lable>
                        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>

                        <lable>Phone Number: </lable>
                        <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)}/>
                    </div>
                    )}
                </div>
                
                <button  onClick={bookThisPlace} className="primary mt-4">
                    Book This Place At 
                    {numberOfDays > 0 && (
                        <>
                          <span> ${numberOfDays*place.price}</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}