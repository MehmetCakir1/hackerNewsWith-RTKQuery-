import {useState} from 'react'
import { useGetStoriesQuery } from './features/api/newsSlice'
import SingleNews from './components/SingleNews'

const Home = () => {
  const [content,setContent]=useState("")

    const {
        data,
        isLoading,
        isError,
        error
    }=useGetStoriesQuery(!content ? "newstories" : content )

    const handleStory=(e:any)=>{
      let tempArr=e.target.innerText.split(" ")
      let tempContent=tempArr[0].toLowerCase()+tempArr[1].toLowerCase()
    setContent(tempContent)
    }
    
console.log("content",content)
  return (
    <div>
      <div>
        <button onClick={handleStory}>New Stories</button>
        <button onClick={handleStory}>Best Stories</button>
        <button onClick={handleStory}>Top Stories</button>
      </div>
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