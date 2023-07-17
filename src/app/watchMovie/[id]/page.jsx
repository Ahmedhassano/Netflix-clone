import { Requests } from "@/app/api"
import MovieBanner from "@/app/components/watchMovie/movieBanner"
import ProviderVideo from "@/app/components/ProviderVideo"
import MovieContanaier from "@/app/components/watchMovie/MovieContanaier"
export default async function page({params}) {
  let id=await Requests.getId("movie",params.id)
  let movie=await Requests.getById(id?.imdb_id)
  let movieSlimir=await Requests.getSlimir("movie",params.id)
  return (
    <div className="w-full   ">
        <MovieBanner movie={movie?.movie_results[0]}/>    
        <div className="w-full ">
          <ProviderVideo id={params.id}/>
        </div>
      <MovieContanaier mediaType={"movie"} data={movieSlimir}/>
    </div>
  )
}
