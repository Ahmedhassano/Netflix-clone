"use client"
import { useState } from "react"
import Link from "next/link"
import {NaviBaritems} from "../constants/constants"
export default function NavIbar() {
  let [activeLink,setActiveLink]=useState(NaviBaritems[0].title)
  return (
   <nav className="md:flex hidden">
    {NaviBaritems.map(el=> 
    <Link 
    href={el.href}
    className={`${activeLink==el.title?"text-red-600 border-b-red-600 font-bold":"text-white border-b-transparent"} py-3 px-2 cursor-pointer border-b-2`}
    onClick={()=>setActiveLink(el.title)}
    >
     {el.title}
    </Link>)}
   </nav>
  )
}
