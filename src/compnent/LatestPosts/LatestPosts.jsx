import { Link } from "react-router-dom";
import blogData from "../Data/blogData.js";
import "./LatestPosts.css";

export default function LatestPosts() {

  const latestPosts = blogData.posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="latest-posts">
    
      <div className="latest-header">
     
 
          <Link to="/blogs" className="view-all">
          عرض جميع المقالات →
        </Link>

           <div>

          
         <span className="badge">الأحدث</span>
          <h2>أحدث المقالات</h2>
          <p>محتوى جديد طازج من المدونة</p>
        </div>
      </div>

    
      <div className="latest-grid">
        {latestPosts.map((post) => (
          <Link
            to={`/blogs/${post.id}`}
            key={post.id}
            className="latest-card"
          >
            <div className="image-wrap">
              <img src={post.image} alt={post.title} />
              <span className="category">{post.category}</span>
            </div>

            <div className="content">
              <div className="meta">
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>

              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>

              <div className="author">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                />
                <span>{post.author.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}