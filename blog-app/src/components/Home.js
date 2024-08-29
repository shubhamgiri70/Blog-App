import Banner from "./Banner";
import FeedNav from "./FeedNav";
import Posts from "./Posts";

function Home() {
  return (
    <>
      <Banner />
      <div>
        <section>
          <FeedNav />
          <Posts />
        </section>
      </div>
    </>
  );
}

export default Home;
