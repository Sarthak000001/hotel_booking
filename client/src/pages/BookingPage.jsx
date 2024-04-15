import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import AddressLink from "./AddressLink";
import PlaceGalaray from "./PlaceGalaray";
import BookingDates from "./BookingDates";

export default function  BookingPage(){
    const {id}=useParams();
    const [booking,setBooking]=useState(null);
    useEffect(()=>{
        if(id){
            axios.get('/bookings').then(responce=>{
                const foundBooking=responce.data.find(({_id})=>_id===id);
                if(foundBooking){
                    setBooking(foundBooking);
                }
            })
        }
    },[id])
    if(!booking){
        return '';
    }
    return(
        <div className="my-8">
           <h1 className="text-3xl">{booking.place.title}</h1>
           <AddressLink className="my-2 block">{booking.place}</AddressLink>
           <div className="bg-gray-200 p-6 my-4 rounded-2xl flex items-center justify-between">
            <div>
                <h2 className="text-2xl mb-4">Your Booking Information</h2>
                <BookingDates booking={booking}/>
            </div>
            <div className="bg-primary p-6 txet-white rounded-2xl">
                <div>Total Price</div>
                <div className="text-3xl">${booking.price}</div>
            </div>
            
           </div>
           <PlaceGalaray place={booking.place}></PlaceGalaray>
        </div>
    )
}