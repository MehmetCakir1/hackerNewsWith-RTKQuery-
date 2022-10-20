import {useState} from 'react'
import { useGetStoriesQuery } from './features/api/newsSlice'
import SingleNews from './components/SingleNews'

const Home = () => {
  const [content,setContent]=useState("")
  const [firstIndex,setFirstIndex]=useState(0)
  const [lastIndex,setLastIndex]=useState(30)

    const {
        data,
        isLoading,
        isError,
        error
    }=useGetStoriesQuery(!content ? "newstories" : content )

    const handleStory=(e:any)=>{
      setFirstIndex(0)
      let tempArr=e.target.innerText.split(" ")
      let tempContent=tempArr[0].toLowerCase()+tempArr[1].toLowerCase()
    setContent(tempContent)
    }



    const increaseIndex=()=>{
    setFirstIndex(firstIndex+30)
    setLastIndex(lastIndex+30)
    }
    
// console.log("content",content)
let tempData=data?.slice(firstIndex,lastIndex)



  return (
    <div>
      <div>
        <button onClick={handleStory}>New Stories</button>
        <button onClick={handleStory}>Best Stories</button>
        <button onClick={handleStory}>Top Stories</button>
      </div>
      <div>
        <button
        onClick={increaseIndex}
        >MORE</button>
      </div>
      {
        tempData?.map((item:any,index:number)=>{
          return(
            <SingleNews key={index}
             storyId={item} index={index+firstIndex}/>
          )
        })
      }
     
    </div>
  )
}

export default Home