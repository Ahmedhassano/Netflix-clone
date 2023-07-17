"use client"
import { useState,useEffect } from "react"
import {AiOutlineSearch} from "react-icons/ai"
import ResultsSearch from "./resultsSearch"
import {Requests} from "../api"
export default function SearchBar() {
  let [inputValue,setInputvalue]=useState("")
  let [results,setresults]=useState([])
  let [openSearchBar,setopenSearchBar]=useState(false)
  useEffect(()=>{
 
    Requests.search(inputValue)
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      console.log(res.results);
      setresults(res.results)       
  })
     
  },[inputValue])
  return (
    <div className="relative">
     <div className="h-10 flex  items-center gap-2 bg-glass border-solid  border-2 border-red-600 p-3 rounded-full ">
     <input
     className="h-full text-white bg-transparent p-3 "
     type="text"
    
     onChange={(e)=>setInputvalue(e.target.value)}
     />
     <AiOutlineSearch color="white" size={25}/>
     </div>
     <ResultsSearch results={results} loading={false} />
    </div>
  )
}
