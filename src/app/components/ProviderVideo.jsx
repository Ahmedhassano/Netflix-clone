import { Requests,video_url } from "../api"
export default async function ProviderVideo({id}) {
    let video=await Requests.getVideo("movie",id)
        console.log(video);
  return (
    <div className="p-3">
        <iframe className="w-full aspect-video shadow-red-600 shadow-md "
         src={video_url+video.results[0].key}/>
  
    </div>
  )
}
