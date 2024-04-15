import { useState } from "react";

export default function PlaceGalaray({place}){
    const [showallphotos,setshowallphotos]=useState(false);
    if(showallphotos){
        return(
            <div className="absolute inset-0 bg-black text-white min-h-screen">
                <div className="bg-black p-8 grid gap-4">
                    <div>
                        <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
                        <button onClick={()=>setshowallphotos(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        Close Photos
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo=>(
                        <div>
                            <img src={'http://localhost:4000/uploads/'+photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    return(
        <div className="relative">
                <div className="flex ml-2 gap-5 rounded-3xl overflow-hidden">
                    <div className="flex w-96 h-196">
                        {place.photos?.[0]  && (
                            <div>
                                <img onClick={()=>setshowallphotos(true)}  className="cursor-pointer object-cover w-full h-full rounded-3xl" src={'http://localhost:4000/uploads/'+place.photos[0]} alt="" />
                            </div>  
                        )}
                    </div>
                    <div className="flex w-96 h-96">
                        {place.photos?.[1]  && (
                            <img onClick={()=>setshowallphotos(true)}  className="cursor-pointer object-cover w-full h-full rounded-3xl  " src={'http://localhost:4000/uploads/'+place.photos[1]} alt="" />
                        )}
                    </div>

                    <div className="flex w-96 h-96">
                        {place.photos?.[2]  && (
                            <img onClick={()=>setshowallphotos(true)}  className="cursor-pointer object-cover w-full h-full rounded-3xl  " src={'http://localhost:4000/uploads/'+place.photos[2]} alt="" />
                        )}
                    </div>

                    <div className="flex w-96 h-96">
                        {place.photos?.[3]  && (
                            <img onClick={()=>setshowallphotos(true)}  className="cursor-pointer object-cover w-full h-full rounded-3xl  " src={'http://localhost:4000/uploads/'+place.photos[3]} alt="" />
                        )}
                    </div>
                </div>   
                <button onClick={()=>setshowallphotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow  shadow-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <   path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    Show More Photos    
                </button>
            </div> 
    )
}