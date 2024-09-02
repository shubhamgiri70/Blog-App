import React from "react";
import Loader from "./Loader";
import { articlesURL } from "../utils/Constant";
import { Link, useParams } from "react-router-dom";

class SinglePost extends React.Component {
  state = {
    article: null,
    error: "",
  };

  componentDidMount() {
    const { slug } = this.props.params;
    fetch(articlesURL + "/" + slug)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          article: data.article,
          error: "",
        });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch Articles!" });
      });
  }

  render() {
    const { article, error } = this.state;
    if (error) {
      return <p>{error}</p>;
    }

    if (!article) {
      return <Loader />;
    }

    return (
      <>
        <div className="single-post">
          <div className="post-banner">
            <h4>{article.title}</h4>
            <div className="flex item-center">
              <img src={article.author.image} alt="author" />
              <div className="flex flex-column">
                <span>{article.author.username}</span>
                <small>{new Date(article.createdAt).toDateString()}</small>
              </div>
            </div>
          </div>
          <div className="post-details">
            <div>
              <h5>{article.body}</h5>
              <div>
                {article.tagList.map((tag) => (
                  <span key={tag} id="post-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <hr id="hr-post" />
            <h6>
              <Link to="/signup">
                <small>Signup </small>
              </Link>
              or
              <Link to="/login">
                <small> Login </small>
              </Link>
              to add comments on this article
            </h6>
          </div>
        </div>
      </>
    );
  }
}

export default function SinglePostWrapper(props) {
  const params = useParams();
  return <SinglePost {...props} params={params} />;
}
