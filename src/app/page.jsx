import Image from 'next/image'
import { Requests } from './api' 

import HomeBanner from './components/home/HomeBanner'
import Slider from './components/slider'
export default async function Home() {
  let TrendingMovie=await Requests.getTrending("all") 
  let actionMovie=await Requests.getByGenres("movie",28) 
  let DramaMovie=await Requests.getByGenres("movie",18)  
  let HorrorMovie=await Requests.getByGenres("movie",27)    
  let ComedyMovie=await Requests.getByGenres("movie",35)  
  let TVmovie=await Requests.getByGenres("movie",10770) 
  return (
    <main className="w-full h-[150vh]  text-white  ">
     <HomeBanner movie={TrendingMovie.results}/>
     <section className=' section-full-screen space-y-10 pl-10 py-2'>
     <div className='w-full h-[125px] space-y-2 '>
      <h3 className=' font-medium text-red-600 text-2xl'>action</h3>
      <Slider data={actionMovie.results}/>
     </div>
     <div className='w-full h-[125px] space-y-2 '>
      <h3 className=' font-medium text-red-600 text-2xl'>Horror</h3>
      <Slider data={HorrorMovie.results}/>
     </div>
     <div className='w-full h-[125px] space-y-2 '>
      <h3 className=' font-medium text-red-600 text-2xl'>Drama</h3>
      <Slider data={DramaMovie.results}/>
     </div>
     <div className='w-full h-[125px] space-y-2 '>
      <h3 className=' font-medium text-red-600 text-2xl'>Comedy</h3>
      <Slider data={ComedyMovie.results}/>
     </div>
     <div className='w-full h-[125px] space-y-2 '>
      <h3 className=' font-medium text-red-600 text-2xl'>TV Movie</h3>
      <Slider data={TVmovie.results}/>
     </div>
     </section>
    </main>
  )
}
