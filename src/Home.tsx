import {useState} from 'react'
import { useGetStoriesQuery } from './features/api/newsSlice'
import SingleNews from './components/SingleNews'
import "./Styles/Home.scss"

const Home = () => {
  const [content,setContent]=useState("")
  const [firstIndex,setFirstIndex]=useState(0)
  const [lastIndex,setLastIndex]=useState(30)
  const [isLight,setIsLight]=useState(false)

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
    window.scrollTo(0,0)
    }
    
// console.log("content",content)
let tempData=data?.slice(firstIndex,lastIndex)



  return (
    <div className={`${isLight ? "light" : "dark"}`}>

    {
      isLoading ? (
        <h1>LOADING...</h1>
      ):(
        <div className="main-container">
      <div className='btn-div'>
        <button onClick={handleStory}>New Stories</button>
        <button onClick={handleStory}>Best Stories</button>
        <button onClick={handleStory}>Top Stories</button>
      </div>

      {
        tempData?.map((item:any,index:number)=>{
          return(
            <SingleNews key={index}
             storyId={item} index={index+firstIndex}/>
          )
        })
      }
           <div className='more'>
        <button
        onClick={increaseIndex}
        className="more-btn"
        >MORE</button>
      </div>
      <div className="switch"
      >
          <label className="theme-switch" htmlFor="checkbox" id="round1">
            <input type="checkbox" id="checkbox" 
            onClick={()=>setIsLight(!isLight)}/>
            <div className="slider round">
              {
                isLight ? (
                  <img src="images/sun.png" alt="sun" className="sun"/>
                ):(
                  <img src="images/moon.png" alt="moon" className="moon"/>
                )
              }
            
            
          </div>
          </label>
        </div>
    </div>
      )
    }
        </div>

  )
}

export default Home