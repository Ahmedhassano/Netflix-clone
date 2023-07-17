"use client"
import { changeGenres,FetchSeries } from "../store/features/seriesSlice"
import { changeGenres as changeGenresmovie,FetchMovies } from "../store/features/movieSlice"
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
export default function Category({List,mediaType}) {
  let [activeCategory,setActiveCategory]=useState(List[0].id)
  let data=useSelector(data=>data.series)
  console.log(data);
  let Dispatch=useDispatch()
  useEffect(()=>{
    if(mediaType=="movie"){
      Dispatch(changeGenresmovie(activeCategory))
      Dispatch(FetchMovies(activeCategory))
    }else{
      Dispatch(changeGenres(activeCategory))
      Dispatch(FetchSeries(activeCategory))
    }
      
  },[])
  useEffect(()=>{
    if(mediaType=="movie"){
      Dispatch(changeGenresmovie(activeCategory))
    Dispatch(FetchMovies(activeCategory))
    }else{
      Dispatch(changeGenres(activeCategory))
      Dispatch(FetchSeries(activeCategory))
    }
      
  },[activeCategory])
  return (
    <div className="flex gap-2 py-2 px-3 overflow-x-auto">
      {List.map(el=> 
      <div 
      className={`${activeCategory==el.id?" border-b-red-600":" border-b-transparent"} 
                  border-b-4 p-3 white-space-nowrap text-white cursor-pointer`}
      onClick={()=>setActiveCategory(el.id)}>
        {el.name}
      </div> )}
      <h3 className=" text-red-600 ">{}</h3>
    </div>
  )
}
