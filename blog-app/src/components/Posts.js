import React from "react";
import Post from "./Post";
import { articlesURL } from "../utils/Constant";
import Loader from "./Loader";

class Posts extends React.Component {
  state = {
    articles: null,
    error: "",
  };

  componentDidMount() {
    fetch(articlesURL + "/?limit=10")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ articles: data.articles, error: "" });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch Articles!" });
      });
  }

  render() {
    const { articles, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

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
