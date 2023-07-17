"use client"
import Image from "next/image"
import {AiFillStar} from "react-icons/ai"
import { useState } from "react"
import { poster_path_url,backdrop_url,small_img_url } from "../api"
export let handleGenres=(arr)=>{
       
}
export default function Banner({movies}) {
  let[currentMovie,setCurrentMovie]=useState(movies.results[0])
  return (
    <section className=" relative section-full-screen flex  ">
      <div className=" absolute inset-0 max-h-screen z-0 ">
      <Image
      fill
      src={`${backdrop_url}${currentMovie.backdrop_path||currentMovie.poster_path}`}
      className=" object-cover"
      />
      <div className=" absolute inset-0 bg-gradient-to-t from-[#ff23234a] via-[#fc3c3c7d]  to-transparent backdrop-blur-sm  z-50"></div>
      </div>
      <div className=" w-full max-w-3xl mx-auto flex flex-col p-3 z-30  ">
        <div className="w-full  grid gap-4  grid-cols-1 sm:grid-cols-[250px_1fr] my-20 md:my-32 ">
          <div className=" relative w-full h-[400px] ">
             <Image
             fill
             src={`${poster_path_url}${currentMovie.poster_path||currentMovie.backdrop_path}`}
             className=" max-w-[250px] shadow-xl shadow-black  "
             />
          </div>
          <div className="">
           <h1  className=" text-xl text-white font-medium ">{currentMovie?.original_title||currentMovie?.original_name}</h1>
           <p className=" text-gray-200">{currentMovie.first_air_date||currentMovie?.release_date}</p>
           <p className="flex items-center gap-2">
            <AiFillStar className=" text-yellow-600"/>
             <span className=" text-lg text-white">{+currentMovie?.vote_average.toFixed(1)}</span>
             </p>
           <p className=" text-gray-200">{currentMovie?.overview}</p>
          </div>
        </div>
        <div className="w-full flex gap-3 ">
          {movies.results?.slice(0,5).map(el=>
          <div 
          className=" relative w-[calc(100%/5)] h-16 cursor-pointer  rounded-md overflow-hidden"
          onClick={()=>setCurrentMovie(el)}
          >
           <Image 
           fill 
           src={`${small_img_url}${el?.backdrop_path||el?.backdrop_path}`}
           className=" object-cover"
           />
          </div>)}
        </div>
      </div>
    </section>
  )
}
