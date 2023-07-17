import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { Requests  } from "@/app/api";
let initialState={
    loading:false,
    results:[],
    pageNumber:1,
    genres:"10759",
    
}
export let FetchSeries=createAsyncThunk("series/fetch", async(genre=initialState.genres,pageNumber=initialState.pageNumber)=>{
       let res=await Requests.getByGenres("tv",genre,pageNumber)
       return res 
}) 
let SeriesSlice=createSlice({
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
    builder.addCase(FetchSeries.pending,(state)=>{
        state.loading=true
    })
    builder.addCase(FetchSeries.fulfilled,(state,action)=>{
        state.loading=false
        state.results=action.payload.results
    })

    }
})
export let{changePagenumber,changeGenres} = SeriesSlice.actions
export default SeriesSlice.reducer