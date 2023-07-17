import Image from "next/image"
import Link from "next/link"
import Slider from "../slider"
import { backdrop_url } from "@/app/api"
export default function HomeBanner({movie}) {

  return (
    <section className=" relative section-full-screen flex flex-col justify-end pl-10  gap-48 py-6">
     <div className=" absolutes inset-0 z-0 ">
      <Image
      fill
      objectFit="cover"
      quality={100}
      src={`${backdrop_url}${movie[1].backdrop_path||movie[1].poster_path}`}
      />
     </div>
     <div className="w-full max-w-[1024px] flex flex-col  gap-3  z-10">
     <h1 className=" text-2xl font-medium">{movie[1].title||movie[1].name}</h1>
     <p className=" max-w-3xl text-white">{movie[1].overview}</p>
     <Link 
     href={movie[1].media_type=="movie"?"/watchMovie/"+movie[1].id:"/watchSeries/"+movie[1].id}
     className=" watch-btn max-w-fit"
     >
     watch now   
     </Link>
     </div>
     <div className='w-full h-[125px] justify-self-end '>
      <Slider data={movie}/>
    </div>
    </section>
  )
}
