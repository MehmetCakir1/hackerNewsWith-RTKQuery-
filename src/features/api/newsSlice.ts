import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const newsSlice=createApi({
    reducerPath:"news",
    baseQuery:fetchBaseQuery({baseUrl:"https://hacker-news.firebaseio.com/v0"}),
    endpoints:(builder)=>({
        getStories:builder.query<any,string>({
            query:(content)=>`/${content}.json`
        }),
        getSingleStory:builder.query<any,void>({
            query:(storyId)=>`/item/${storyId}.json`
        }),
    })
})

export const {useGetStoriesQuery,useGetSingleStoryQuery}=newsSlice