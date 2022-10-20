import { secondsToMilliseconds,formatDistanceToNow } from 'date-fns';
import { useGetSingleStoryQuery } from '../features/api/newsSlice'


const SingleNews = ({storyId,index}:any) => {
    const {data,isLoading}=useGetSingleStoryQuery(storyId)
    const milliseconds=(secondsToMilliseconds(data?.time));

  return (
    <>
    {
      isLoading ? (
      <h1>loading...</h1>
      ):
      (
        <div style={{padding:"2rem"}}>
        <p>{index+1}</p>
        <a href={data?.url} target="_blank">{data?.title}</a> 
        <p>by {data?.by}</p>
        <i>{formatDistanceToNow( new Date(milliseconds),{addSuffix: true}) }</i>
      </div>
      )
    }
    </>
  )
}

export default SingleNews

