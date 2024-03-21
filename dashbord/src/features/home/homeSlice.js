import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { comments, followers, weather } from "./homeApi"

const initialState = {
   comments:null,
   followers:null,
   weather:null,
   loading:{
    commentLoading:false,
    followerLoading:false,
   }
}

export const getFollowersAsync = createAsyncThunk(
    "home/follower",
    async()=>{
        const response = await followers()
        return response.data
    }
)
export const getCommentsAsync = createAsyncThunk(
    "home/comment",
    async()=>{
        const response = await comments()
        return response.data
    }
)
export const getWeatherAsync = createAsyncThunk(
    "home/weather",
    async()=>{
        const response = await weather()
        return response.data
    }
)
export const homeSlice = createSlice({
    name:"quto",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
          },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getFollowersAsync.pending,(state)=>{
           state.loading.followerLoading = true
        })
        .addCase(getFollowersAsync.fulfilled,(state,action)=>{
            state.loading.followerLoading = false
            state.followers = action.payload.users
            
        })
        .addCase(getFollowersAsync.rejected,(state)=>{
            console.log("erre ocured in getquto()")
        })
        .addCase(getCommentsAsync.pending,(state)=>{
            state.loading.commentLoading = true
         })
         .addCase(getCommentsAsync.fulfilled,(state,action)=>{
             state.loading.commentLoading = false
             state.comments = action.payload.comments
         })
         .addCase(getCommentsAsync.rejected,(state)=>{
             console.log("erre ocured in getquto()")
         })
         .addCase(getWeatherAsync.pending,(state)=>{
            state.loading.commentLoading = true
         })
         .addCase(getWeatherAsync.fulfilled,(state,action)=>{
             state.loading.commentLoading = false
             state.weather = action.payload
         })
         .addCase(getWeatherAsync.rejected,(state)=>{
             console.log("erre ocured in getquto()")
         })
        
    }
})

export const selectComments = (state)=>state.home.comments
export const selectFollowers = (state)=>state.home.followers
export const selectLoading  = (state)=>state.home.loading
export const selectWeather  = (state)=>state.home.weather
export default homeSlice.reducer