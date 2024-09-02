import React from "react";
import Banner from "./Banner";
import FeedNav from "./FeedNav";
import Pagination from "./Pagination";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import { articlesURL } from "../utils/Constant";

class Home extends React.Component {
  state = {
    articles: null,
    error: "",
    articlesCount: 0,
    articlesPerPage: 10,
    activePageIndex: 1,
  };

  componentDidMount() {
    fetch(articlesURL + `/?limit=${this.state.articlesPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          error: "",
          articlesCount: data.articlesCount,
        });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch Articles!" });
      });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.activePageIndex !== this.state.activePageIndex) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const limit = this.state.articlesPerPage;
    const offset = (this.state.articlesPerPage - 1) * limit;

    fetch(articlesURL + `/?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          error: "",
          articlesCount: data.articlesCount,
        });
      })
      .catch((err) => {
        this.setState({ error: "Not able to fetch Articles!" });
      });
  };

  updateCurrentPageIndex = (index) => {
    this.setState({ activePageIndex: index }, this.fetchData);
  };

  render() {
    const { articles, error, articlesCount, articlesPerPage, activePageIndex } =
      this.state;
    return (
      <>
        <Banner />
        <div className="container flex">
          <section>
            <FeedNav />
            <Posts articles={articles} error={error} />
            <Pagination
              articlesCount={articlesCount}
              articlesPerPage={articlesPerPage}
              activePageIndex={activePageIndex}
              updateCurrentPageIndex={this.updateCurrentPageIndex}
            />
          </section>
          <Sidebar />
        </div>
      </>
    );
  }
}

export default Home;
