"use client"
import { useEffect ,useState } from "react"
import Logo from "./Logo"
import NavIbar from "./NavIbar"
import SearchBar from "./SearchBar"

export default  function Header() {
  function handleScroll() {
    if(document.documentElement.scrollTop >0)
    setactiveHeader(true)  
    else 
    setactiveHeader(false)
  }
  let [activeHeader,setactiveHeader]=useState(false)

   useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
   },[])
  return (
    <header className={`${activeHeader?"bg-black":"bg-transparent "} w-full fixed top-0 left-0 flex justify-between px-3 duration-200 z-40`}>
     <div className="flex items-center gap-2">
      <Logo/>
      <NavIbar/>
     </div>
     <div className="flex flex-col justify-center gap-2">
       <SearchBar/>
     </div>
    </header>
  )
}
