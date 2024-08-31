import React from "react";
import { tagsURL } from "../utils/Constant";
import Loader from "./Loader";

class Sidebar extends React.Component {
  state = {
    tags: null,
    error: "",
  };

  componentDidMount() {
    fetch(tagsURL)
      .then((res) => res.json())
      .then(({ tags }) => {
        this.setState({ tags, error: "" });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch tags!" });
      });
  }
  render() {
    const { tags, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    if (!tags) {
      return <Loader />;
    }

    return (
      <>
        <div className="tags">
          <ul className="flex wrap">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
