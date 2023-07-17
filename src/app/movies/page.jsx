import Banner from "../components/Banner"
import Category from "../components/Category"
import MoviesContanier from "../components/moviesContanier"

import { movieGenres } from "../constants/constants"
import { Requests } from "../api"
export default async function page() {
  let movies=await Requests.getTrending("movie")
  return (
    <main className="section-full-screen ">
      <Banner movies={movies}/>
      <Category List={movieGenres.slice(0,8)} mediaType={"movie"}/>
      <MoviesContanier mediaType={"movie"}/>
    </main>
  )
}
