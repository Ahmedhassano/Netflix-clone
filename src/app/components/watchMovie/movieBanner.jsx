import Image from "next/image"
import { backdrop_url,poster_path_url } from "@/app/api"
import {AiFillStar} from "react-icons/ai"
export default function movieBanner({movie}) {
  return (
    <section className=" relative section-full-screen flex items-center justify-center  p-3   ">
      <div className=" absolute inset-0  z-0">
        <Image
        fill
        src={`${backdrop_url}${movie.backdrop_path||movie.poster}`}
        objectFit=" cover"
        />
        <div className=" absolute inset-0  backdrop-blur-sm bg-[#ffffff26] "></div>
      </div>
        <div className=" w-full max-w-[1024px] h-fit grid gap-3 md:grid-cols-[350px_1fr] grid-cols-[fit-content]   z-10 ">
        <div className=" relative w-[300px] h-[400px]  shadow-black shadow-md">
           <Image
           fill
           src={`${poster_path_url}${movie.poster_path}`}
           />
        </div>
        <div className="">
          <h1 className=" text-red-600 text-3xl font-bold ">{movie.title||movie.name}</h1>
        <p className="">{movie.media_type}</p>
         <p className="flex gap-2 items-center">
          <AiFillStar className=" text-yellow-400"/>
         <span className=" text-white font-medium">{+movie.vote_average.toFixed(1)}</span>
         </p>
        <p className=" text-gray-200 max-w-lg">{movie.overview}</p>
          </div>
       </div>
    </section>
  )
}
