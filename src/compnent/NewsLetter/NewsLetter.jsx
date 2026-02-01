import "./NewsLetter.css";

export default function Newsletter() {
  return (
    <section className="adasa-newsletter">
      <div className="adasa-newsletter-card">

        {/* ICON */}
        <div className="adasa-newsletter-icon">
          <i className="fa-regular fa-envelope"></i>
        </div>

        {/* TEXT */}
        <h2 className="adasa-newsletter-title">
       اشترك في  <span className="hala">  نشرتنا الإخباري </span >
        </h2>

        <p className="adasa-newsletter-desc">
          احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة
          في بريدك الإلكتروني
        </p>

        {/* FORM */}
        <div className="adasa-newsletter-form">
          <input
            type="email"
            placeholder="ادخل بريدك الإلكتروني"
          />
          <button>اشترك الآن</button>
        </div>

        {/* FOOTER */}
        <div className="adasa-newsletter-footer">
          <span>إلغاء الاشتراك في أي وقت</span>
          <span>بدون إزعاج</span>

          <div className="adasa-newsletter-users">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" />
            <img src="https://randomuser.me/api/portraits/women/45.jpg" />
            <img src="https://randomuser.me/api/portraits/men/76.jpg" />
            <span>+10,000 مصور</span>
          </div>
        </div>

      </div>
    </section>
  );
}