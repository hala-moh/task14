import { Link } from "react-router-dom";
import blogData from "../Data/blogData";
import "./ExploreCategories.css";

// دالة اختيار الأيقونة
const getIcon = (category) => {
  switch (category) {
    case "تقنيات":
      return "fa-sliders";
    case "مناظر طبيعية":
      return "fa-mountain-sun";
    case "بورتريه":
      return "fa-user";
    case "إضاءة":
      return "fa-sun";
    case "معدات":
      return "fa-gear";
    default:
      return "fa-folder";
  }
};

export default function ExploreCategories() {
  const categories = {};

  blogData.posts.forEach((post) => {
    categories[post.category] =
      (categories[post.category] || 0) + 1;
  });

  return (
    <section className="blog-categories">
      <div className="blog-categories-header">
        <span className="pill">التصنيفات</span>
        <h2>استكشف حسب الموضوع</h2>
        <p>اعثر على محتوى مصمم حسب اهتماماتك</p>
      </div>

      <div className="blog-categories-grid">
        {Object.entries(categories).map(([name, count]) => (
          <Link
            key={name}
            to="/blogs"
            state={{ category: name }}
            className="category-card"
          >
            <div className="icon-box">
              <i className={`fa-solid ${getIcon(name)}`}></i>
            </div>

            <div className="category-text">
              <h4>{name}</h4>
              <span>{count} مقالات</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}