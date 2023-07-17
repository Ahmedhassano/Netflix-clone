import Image from "next/image"
import Link from "next/link"
import { poster_path_url } from "../api"
export default function MovieCard({info,mediaType}) {
  return (
    <div className="max-w-[250px] h-[350px]  ">
     <Link
     href={mediaType=="movie"?"/watchMovie/"+info.id:"/watchSeries/"+info.id}
     >
     <div className=" relative w-full h-[300px]">
       <Image
       fill
       src={`${poster_path_url}${info.poster_path||info.backdrop_path}`}
       />
     </div>
     <div className=" p-2 text-gray-300">
     <h3 className="">{info.original_title||info.original_name}</h3>
     <div className="flex justify-between items-center">
     
     <p className="">{info.first_air_date||info.release_date}</p>
     <p className="">{+info?.vote_average.toFixed(1)}</p> 
     </div>
     </div></Link>
    </div>
  )
}
