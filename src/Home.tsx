import React from 'react'
import { useGetNewsQuery } from './features/api/newsSlice'
import SingleNews from './SingleNews'

const Home = () => {

    const {
        data,
        isLoading,
        isError,
        error
    }=useGetNewsQuery()

    
  return (
    <div>
      {
        data?.slice(0,10)?.map((item:any,index:number)=>{
          return(
            <SingleNews key={index}
             storyId={item}/>
          )
        })
      }
    </div>
  )
}

export default Home