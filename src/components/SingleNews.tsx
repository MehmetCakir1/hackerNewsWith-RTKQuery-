import { useGetSingleStoryQuery } from '../features/api/newsSlice'
import { mapTime } from '../utils/utils'


const SingleNews = ({storyId,index}:any) => {

    const {data,isLoading}=useGetSingleStoryQuery(storyId)
    // console.log(data);
    // const {by,id,time,title,url}=data;
    // console.log(isLoading);

    if(isLoading){
    return <h1>loading...</h1>
    }
  return (
    <div style={{padding:"2rem"}}>
      <p>{index+1}</p>
      <a href={data?.url} target="_blank">{data?.title}</a> 
      <p>by {data?.by}</p>
      <i>{mapTime(data?.time)}</i>
    </div>
  )
}

export default SingleNews

