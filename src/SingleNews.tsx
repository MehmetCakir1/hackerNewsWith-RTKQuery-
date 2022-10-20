import React, { useEffect } from 'react'
import { useGetSingleNewsQuery } from './features/api/newsSlice'

const SingleNews = ({storyId}:any) => {

    const {data}=useGetSingleNewsQuery(storyId)
    console.log(data);
  return (
    <div>SingleNews</div>
  )
}

export default SingleNews