"use client"

import requests from "../utils/requests"
import { useRouter } from 'next/navigation';


function Nav () {
 
  const router = useRouter()  
  
  console.log(router, "rou")

  return (
    <nav className="relative">
        <div className="flex mt-10 px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10
        sm:space-x-20 overflow-x-scroll scrollbar-hide">
           {Object.entries(requests).map( ( [key, {title, url}]) =>{
            return(
            <h2 key={key} 
                onClick={()=> router.push(`/?genre=${key}`)}
                className="cursor-pointer transition duration-100 transform 
                hover:scale-125 hover:text-white active:text-red-500">
                  {title}
            </h2>
            )
            } )}
        </div>
        <nav className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        
    </nav> 
  )
}

export default Nav