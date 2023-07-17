import { configureStore } from "@reduxjs/toolkit";
import seriesSlice from "./features/seriesSlice";
import movieSlice from "./features/movieSlice";
let store=configureStore({
    reducer:{
        series:seriesSlice,
        movies:movieSlice
    }
})

export default store