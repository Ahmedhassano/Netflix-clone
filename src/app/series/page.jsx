import Banner from "../components/Banner"
import Category from "../components/Category"
import MoviesContanier from "../components/moviesContanier"
import { changeGenres,FetchSeries } from "../store/features/seriesSlice"
import { seriesCategorys } from "../constants/constants"
import { Requests } from "../api"
export default async function page() {
  let series=await Requests.getTrending("tv")
  return (
    <main className="section-full-screen ">
      <Banner movies={series}/>
      <Category List={seriesCategorys.slice(0,8)} mediaType={"tv"}/>
      <MoviesContanier mediaType={"tv"}/>
    </main>
  )
}
