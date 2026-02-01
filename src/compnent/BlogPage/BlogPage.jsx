import { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "../Data/blogData";
import "./BlogPage.css";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "الكل",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  const clearFilters = () => {
    setActiveCategory("الكل");
    setSearchTerm("");
  };

  const filteredPosts = blogData.posts.filter((post) => {
    const matchCategory =
      activeCategory === "الكل" || post.category === activeCategory;

    const matchSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  const showClear =
    activeCategory !== "الكل" || searchTerm.trim() !== "";








return (
  <>
    <section className="blog-hero">
      <div className="blog-hero-content">

        <span className="blog-hero-badge">
          مدونتنا
        </span>

        <h1>
          استكشف <span>مقالاتنا</span>
        </h1>

        <p>
          اكتشف الدروس والرؤى وأفضل الممارسات
          <br />
          لتطوير مهاراتك في عالم التصوير
        </p>

      </div>
    </section>





    <section className="blog-filter">

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === "الكل" ? "جميع المقالات" : cat}
          </button>
        ))}

        {/* ===== SEARCH ===== */}
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="ابحث في المقالات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* ===== CLEAR FILTERS ===== */}
        {showClear && (
          <button className="clear-filters" onClick={clearFilters}>
            <i className="fa-solid fa-xmark"></i>
            مسح الفلاتر
          </button>
        )}
      </div>

      {/* ===== COUNT ===== */}
      <div className="posts-count">
        عرض {filteredPosts.length} مقالات
      </div>

      {/* ===== GRID ===== */}
      <div className="blog-grid">
        {filteredPosts.length === 0 ? (
          <p className="no-results">لا توجد مقالات مطابقة</p>
        ) : (
          filteredPosts.map((post) => (
            <Link
              to={`/blogs/${post.id}`}
              key={post.id}
              className="blog-card"
            >
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <span className="card-badge">{post.category}</span>
              </div>

              <div className="card-body">
                <div className="card-meta">
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>

                <div className="card-author">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                  <span>{post.author.name}</span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

    </section>
     </>
 );
}