import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { Requests  } from "@/app/api";
let initialState={
    loading:false,
    results:[],
    pageNumber:1,
    genres:"28",
    
}
export let FetchMovies=createAsyncThunk("movie/fetch", async(genre=initialState.genres,pageNumber=initialState.pageNumber)=>{
       let res=await Requests.getByGenres("movie",genre,pageNumber)
       return res 
}) 
let moviesSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
     changePagenumber:(state)=>{
       state.pageNumber="2"
     },
     changeGenres:(state,action)=>{
        state.genres=action.payload
      } 
    },
    extraReducers:(builder)=>{
    builder.addCase(FetchMovies.pending,(state)=>{
        state.loading=true
    })
    builder.addCase(FetchMovies.fulfilled,(state,action)=>{
        state.loading=false
        state.results=action.payload.results
    })

    }
})
export let{changePagenumber,changeGenres} = moviesSlice.actions
export default moviesSlice.reducer