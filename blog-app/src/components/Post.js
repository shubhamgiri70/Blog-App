import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Post(props) {
  const { author, createdAt, favoritesCount, title, description } = props;

  if (!author) {
    return <div>Error: Author data is missing.</div>;
  }

  return (
    <article className="post">
      <div className="flex item-center justify-between">
        <div className="flex item-center">
          <img
            src={
              author.image || "https://api.realworld.io/images/demo-avatar.png"
            }
            alt={author.username}
          />
          <div className="flex flex-column">
            <span>{author.username}</span>
            <small>{new Date(createdAt).toLocaleDateString()}</small>
          </div>
        </div>
        <div className="likes flex item-center">
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              color: "rgb(2, 189, 2)",
              fontSize: "24px",
              cursor: "pointer",
            }}
          />
          <small id="no-of-likes">{favoritesCount}</small>
        </div>
      </div>
      <div className="post-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Read More</button>
      </div>
      <hr />
    </article>
  );
}

export default Post;
