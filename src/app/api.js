// ALL URLS
export let Base_url="https://api.themoviedb.org/3"
export let backdrop_url="https://image.tmdb.org/t/p/original"
export let poster_path_url="https://image.tmdb.org/t/p/w500"
export let small_img_url="https://image.tmdb.org/t/p/w200"
export let video_url="https://www.youtube.com/embed/"

// ALL Requests
export let Requests={
    search:(searchText)=>{
      return  fetch(`${Base_url}/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1&api_key=${process.env.Key_Api}`)
    },
    getTrending:async(mediaType)=>{
      let res=await fetch(`${Base_url}/trending/${mediaType}/week?language=en-US&api_key=${process.env.Key_Api}`)
      let data=await res.json()
      return data
    },
    getByGenres:async(mediaType,genres,pageNumber)=>{
      let res=await fetch(`${Base_url}/discover/${mediaType}?with_genres=${genres}&page=${pageNumber}&api_key=${process.env.Key_Api}`)
      let data=await res.json()
      return data
    },
    getId:async(mediaType,id)=>{
      let res=await fetch(`${Base_url}/${mediaType}/${id}/external_ids?api_key=${process.env.Key_Api}`)
      let data=await res.json()
      return data
    },
    getById:async(id)=>{
      let res=await fetch(`${Base_url}/find/${id}?external_source=imdb_id&api_key=${process.env.Key_Api}`)
      let data=await res.json()
      return data
    },
    getVideo:async(mediaType,id)=>{
      let res=await fetch(`${Base_url}/${mediaType}/${id}/videos?api_key=${process.env.Key_Api}`)
      let data=await res.json()
      return data
    },
    getSlimir:async(mediaType,id)=>{
      let res=await fetch(`${Base_url}/${mediaType}/${id}/similar?api_key=${process.env.Key_Api}`)
      let data=await res.json()
      return data
    }
   
}


