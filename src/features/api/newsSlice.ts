import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const newsSlice=createApi({
    reducerPath:"news",
    baseQuery:fetchBaseQuery({baseUrl:"https://hacker-news.firebaseio.com/v0"}),
    endpoints:(builder)=>({
        getNews:builder.query<any,void>({
            query:()=>`/newstories.json`
        }),
        getSingleNews:builder.query<any,void>({
            query:(storyId)=>`/item/${storyId}.json`
        }),
    })
})

export const {useGetNewsQuery,useGetSingleNewsQuery}=newsSlice