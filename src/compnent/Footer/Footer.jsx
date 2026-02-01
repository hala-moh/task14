import "./Footer.css";

export default function Footer() {
  return (
    <footer className="adasa-footer">
      <div className="adasa-footer-container">

        {/* COLUMN 1 */}
        <div className="footer-col newsletter">
          <h4>
           <p className="hero" >  <span className="shar"></span>    ابقَ على اطلاع  </p>
          </h4>
          <p className="sup">اشترك للحصول على أحدث المقالات والتحديثات.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="أدخل بريدك الإلكتروني" />
            <button className="sups">اشترك</button>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>
              <p className="hero" >  <span className="shar"></span>استكشف</p>
          <h4 />
           
          </h4>
          <ul>
            <li>إضاءة</li>
            <li>بورتريه</li>
            <li>مناظر طبيعية</li>
            <li>تقنيات</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4 >
           <p className="hero" >  <span className="shar"></span>استكشف</p>
          </h4>
          <ul className="cero">
            <li>الرئيسية</li>
            <li>المدونة</li>
            <li>من نحن</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col brand">
          <div className="brand-logo">
            <span className="light">ع</span>
            <h3 className="stara">عدسة</h3>
          </div>

          <p className="brand-desc">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارككم أسرار
            المحترفين ونصائح عملية لتطوير مهاراتكم.
          </p>

          <div className="social">
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>سياسة الخصوصية</span>
        <span>شروط الخدمة</span>
        <p>© 2026 عدسة. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}