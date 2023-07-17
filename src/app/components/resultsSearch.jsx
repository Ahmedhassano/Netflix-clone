import Image from "next/image";
import { small_img_url } from "../api";
export default function resultsSearch({results,loading}) {

  return (
<div className=" absolute inset-x-0 flex flex-col gap-2 p-2 bottom-[-3px] translate-y-[100%] bg-glass rounded-md h-[300px] overflow-y-auto ">
       {!results.length?
         <p className="text-gray-300">no results</p>:
         results.slice(0.7).map(el=> <div className="relative w-full bg-glass rounded-md ">
                            <div className="  w-full flex gap-2   p-2 cursor-pointer">
                             <div className=" relative w-14 h-14 rounded-md overflow-hidden">
                             <Image
                             fill
                             quality={100}
                             objectFit="cover"
                             src={`${small_img_url}${el.poster_path||el.backdrop}`}
                              />
                             </div>
                             <div>
                              <h3 className=" text-white">{el.original_name||el.original_title}</h3>
                              <p className=" text-gray-300">{el.release_date||el.first_air_date}</p>
                             </div>
                            </div>
                          </div> )
      }
   </div>
  )
}
