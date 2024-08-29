import React from "react";
import Post from "./Post";
import { articlesURL } from "../utils/Constant";
import Loader from "./Loader";

class Posts extends React.Component {
  state = {
    articles: null,
  };

  componentDidMount() {
    fetch(articlesURL + "/?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        this.setState({ articles: data.articles });
      });
  }

  render() {
    const { articles } = this.state;
    if (!articles) {
      return <Loader />;
    }
    return (
      <div>
        {articles.map((article) => (
          <Post key={article.slug} {...article} />
        ))}
      </div>
    );
  }
}

export default Posts;
