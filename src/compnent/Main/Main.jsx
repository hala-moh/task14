import { Link } from "react-router-dom";
import blogData from "../Data/blogData";
const{posts,categories,siteInfo}=blogData;
import "./Main.css";

export default function Main() {

  const sectionIds = [1, 2, 3];

  const sectionPosts = blogData.posts.filter(post =>
    sectionIds.includes(post.id)
  );

  return (
    <section className="featured-section">
      <div className="container featured-container">
       <h1 className="mb-4">{siteInfo.name}</h1>


        {sectionPosts.map((post) => (
          <div key={post.id} className="feature-card card border-0 overflow-hidden mb-4">
            <div className="row g-0 align-items-stretch">

              {/* LEFT */}
              <div className="col-lg-6">
                <div className="feature-left h-100 p-4 p-md-5">

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="pill pill-orange">
                      {post.category}
                    </span>
                    <span className="meta">
                      {post.readTime}
                    </span>
                 {/* <span className="meta">
  <i className="fa-regular fa-clock"></i>
  {post.readTime}s
</span> */}
                  </div>

                  <h2 className="feature-title mb-3">
                    {post.title}
                  </h2>

                  <p className="feature-desc mb-4">
                    {post.excerpt}
                  </p>

                  <div className="d-flex align-items-center  justify-content-between flex-wrap gap-3 shm ">
                    {/* <a className="read-more" href="#">
                     اقرأ المقال<i className="fa-solid fa-arrow-left arrow"></i>
                    </a> */}
                    <Link
                   to={`/blogs/${post.id}`}
                   className="read-more"
                    >
  اقرأ المقال <i className="fa-solid fa-arrow-left arrow"></i>
</Link>

                    <div className="author d-flex align-items-center gap-2">
                      <img
                        className="avatar"
                        src={post.author.avatar}
                        alt={post.author.name}
                      />
                      <div className="text-end">
                        <div className="author-name">
                          {post.author.name}
                        </div>
                        <div className="author-date">
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT */}
              <div className="col-lg-6 position-relative">
                <div className="feature-right h-100">
                  <img
                    className="feature-img"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}