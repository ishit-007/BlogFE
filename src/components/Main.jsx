import React from "react";
import Card from "./Card";
import makeRequest from "../util/makeRequest";
import { GET_BLOG_DATA } from "../constants/apiEndpoints";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const sortByTitleHandler = (a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return a.id - b.id;
    }
  };
  const [error, setError] = React.useState(null);
  const [blogsData, setBlogsData] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA, {}, navigate)
      .then((data) => {
        const sortedData = data.sort(sortByTitleHandler);
        setBlogsData(sortedData);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return blogsData ? (
    <main>
      <div className="cards">
        {blogsData.map((blogData) => (
          <Card
            key={Math.random()}
            id={blogData.id}
            title={blogData.title}
            image={blogData.image}
            reading_time={blogData.reading_time}
            description={blogData.description}
            claps={blogData.claps}
            date={new Date(blogData.date).toLocaleDateString()}
            liked={blogData.liked}
          />
        ))}
      </div>
    </main>
  ) : (
    <div data-testid="loading">Loading...</div>
  );
};
export default Main;
