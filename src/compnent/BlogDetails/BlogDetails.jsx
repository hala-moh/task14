import { useParams, Link } from "react-router-dom";
import blogData from "../Data/blogData";
import "./BlogDetails.css";

export default function BlogDetails() {
  const { id } = useParams();

  const post = blogData.posts.find(
    (item) => item.id === Number(id)
  );

  if (!post) {
    return <div className="blog-details">المقال غير موجود</div>;
  }

  // تقسيم المحتوى
  const parts = post.content.split("\n\n## ");
  const intro = parts[0];
  const sections = parts.slice(1).map((part) => {
    const lines = part.split("\n\n");
    return {
      title: lines[0].replace("##", "").trim(),
      text: lines.slice(1).join("\n\n"),
    };
  });

  return (
    <div className="blog-details">
 
      <header
        className="hero"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="overlay">

          <div className="breadcrumb">
            <i className="fa-solid fa-house"></i>
            <i className="fa-solid fa-chevron-left"></i>
            <span>المدونة</span>
            <i className="fa-solid fa-chevron-left"></i>
            <span className="active">{post.category}</span>
          </div>

          <div className="hero-content">

            <div className="post-meta">
              <span className="badge">{post.category}</span>

              <span className="meta-item">
                <i className="fa-regular fa-calendar"></i>
                {post.date}
              </span>

              <span className="meta-item">
                <i className="fa-regular fa-clock"></i>
                {post.readTime}
              </span>
            </div>

            <h1 className="post-title">{post.title}</h1>

            <div className="author-card">
              <div className="author-text">
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
              </div>

              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="author-avatar"
              />
            </div>

          </div>
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="blog-static">

        {/* مقدمة */}
        <div className="hero-box">
          {intro}
        </div>

        <div className="layout">

          {/* ========== SIDEBAR ========== */}
          <aside className="sidebar">

            <div className="sidebar-box toc-box">
              <h3>محتويات المقال</h3>
              <ul className="toc">
                {sections.map((section, index) => (
                  <li key={index}>
                    <span>{index + 1}</span>
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-box meta-box">
              <div className="meta-card">
                <i className="fa-regular fa-calendar"></i>
                <p>
                  {post.date}
                  <br />
                  تاريخ النشر
                </p>
              </div>

              <div className="meta-card">
                <i className="fa-regular fa-clock"></i>
                <p>
                  {post.readTime}
                  <br />
                  وقت القراءة
                </p>
              </div>
            </div>

            <div className="sidebar-box subscribe-box">
              <i className="fa-regular fa-envelope"></i>
              <h4>لا تفوت جديدنا</h4>
              <p>اشترك للحصول على أحدث المقالات</p>
              <button>تصفح المزيد</button>
            </div>

          </aside>

          {/* ========== CONTENT ========== */}
          <section className="content">

            {sections.map((section, index) => (
              <div className="section" key={index}>
                <h2>
                  <i className="fa-solid fa-camera"></i>
                  {section.title}
                </h2>
                <p>{section.text}</p>
              </div>
            ))}





            {/* ================= AFTER SUMMARY ================= */}
            <div className="after-summary">

              {/* TAGS */}
              <div className="box tags-box">
                <div className="box-header">
                  <i className="fa-solid fa-tag"></i>
                  <h4>الوسوم</h4>
                </div>

                <div className="tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* SHARE */}
              <div className="box share-box">
                <div className="box-header">
                  <i className="fa-solid fa-share-nodes"></i>
                  <h4>شارك المقال</h4>
                </div>

                <div className="share-icons">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-x-twitter"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-solid fa-link"></i>
                </div>
              </div>

              {/* AUTHOR */}
              <div className="box author-box">
                <span className="label">كاتب المقال</span>

                <div className="author-info">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <div>
                    <h5>{post.author.name}</h5>
                    <p>{post.author.role}</p>
                  </div>
                </div>
              </div>

            </div>

          </section>
        </div>
      </div>


            <section className="related">
              <div className="related-header">
                <h2>مقالات قد تعجبك</h2>
                <Link to="/blogs" className="show-all">
                  عرض الكل
                </Link>
              </div>

              <div className="related-grid">
                {blogData.posts
                  .filter((item) => item.id !== post.id)
                  .slice(3, 6)
                  .map((item) => (
                    <Link
                      to={`/blogs/${item.id}`}
                      key={item.id}
                      className="related-card"
                    >
                      <div className="related-image">
                        <img src={item.image} alt={item.title} />
                        <span className="related-badge">
                          {item.category}
                        </span>
                      </div>

                      <div className="related-body">
                        <h4>{item.title}</h4>

                        <div className="related-meta">
                          <span>{item.readTime}</span>

                          <div className="related-author">
                            <img
                              src={item.author.avatar}
                              alt={item.author.name}
                            />
                            <span>{item.author.name}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>

















    </div>
  );
}
















