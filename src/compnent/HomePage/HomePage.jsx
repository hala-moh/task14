import Home from "../Home/Home";
import Main from "../Main/Main";
import LatestPosts from "../LatestPosts/LatestPosts"
import ExploreCategories from "../ExploreCategories/ExploreCategories";
import NewsLetter from "../NewsLetter/NewsLetter";
export default function HomePage({ setSelectedPost }) {
  return (
    <div>
      <Home />
      <Main setSelectedPost={setSelectedPost} />
      <LatestPosts/>
      <ExploreCategories/>
      <NewsLetter/>
    </div>

  );
}
