import Banner from "./Banner";
import FeedNav from "./FeedNav";
import Pagination from "./Pagination";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <Banner />
      <div className="container flex">
        <section>
          <FeedNav />
          <Posts />
          <Pagination />
        </section>
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
