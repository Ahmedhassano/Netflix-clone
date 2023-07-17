import { Requests } from "@/app/api"
import MovieBanner from "@/app/components/watchMovie/movieBanner"
import ProviderVideo from "@/app/components/ProviderVideo"
import MovieContanaier from "@/app/components/watchMovie/MovieContanaier"
export default async function page({params}) {
  let id=await Requests.getId("tv",params.id)
  let series=await Requests.getById(id?.imdb_id)
  let seriesSlimir=await Requests.getSlimir("tv",params.id)

  return (
    <div className="w-full flex flex-col items-center bg-zinc-900 ">
        <MovieBanner movie={series?.tv_results[0]}/>    
     <div className="w-fit ">
     <h1 className=" text-red-600 font-bold  text-3xl">series relate</h1>
     <MovieContanaier mediaType={"tv"} data={seriesSlimir}/>
      </div>       
    </div>
  )
}