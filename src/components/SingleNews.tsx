import { secondsToMilliseconds, formatDistanceToNow } from "date-fns";
import { useGetSingleStoryQuery } from "../features/api/newsSlice";
import "../Styles/SingleNews.scss";

const SingleNews = ({ storyId, index }: any) => {
  const { data, isLoading } = useGetSingleStoryQuery(storyId);
  const milliseconds = secondsToMilliseconds(data?.time);



  return (
    <>
      {isLoading ? (
        null
      ) : (
        <div className="single-container">
          <p className="index-number">{index + 1}</p>
          <div>
            <a href={data?.url} target="_blank" className="link">
              {data?.title}
            </a>
            <div className="subtext">
              <p className="author">by {data?.by}</p>
              <span>|</span>
              <p className="date">
                {formatDistanceToNow(new Date(milliseconds), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleNews;
