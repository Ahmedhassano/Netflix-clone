"use client"
import Image from "next/image"
import { small_img_url,poster_path_url } from "../api"
import {MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos} from "react-icons/md"
import { useEffect,useState,useRef } from "react"
export default function Slider({data}) {
 console.log(data);
  let slider=useRef()
  let [clientWidth,setClientwidth]=useState(0)
  useEffect(()=>{
    setClientwidth(slider.current.clientWidth )
     window.addEventListener("resize",()=>{
      setClientwidth(slider.current.clientWidth)
    
     })
  },[])
  useEffect(()=>{

     
  },[clientWidth])
  return (
   <div className="w-full h-full relative">
   
    <div
    ref={slider}
    className="w-full h-full absolute left-0 top-0 flex gap-2 overflow-x-auto">
    {data.map(el=> <div className=" relative min-w-[250px] h-full">
      <Image
      fill
       src={`${poster_path_url}${el.backdrop_path}`}
      />
    </div> )}
   </div>
   <div
     onClick={()=>slider.current.scrollLeft-=clientWidth}
     className="h-full flex items-center p-3 absolute left-0 cursor-pointer ">
      <MdOutlineArrowBackIosNew  className=" text-zinc-900 font-extrabold" size={30}/>
      </div>
   <div 
     onClick={()=>slider.current.scrollLeft+=clientWidth}
     className="h-full flex items-center p-3 absolute right-0  cursor-pointer ">
      <MdOutlineArrowForwardIos className=" text-zinc-900" size={30}/>
     </div>
   </div>
  )
}
