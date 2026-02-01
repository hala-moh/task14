import "./Home.css";

export default function Home() {
  return (
   
<section className="home">
      <div className="home-content">

        <span className="home-badge">
          مرحبًا بك في عدسة
        </span>

        <h1 >
          اكتشف <span>فن</span><br />
          التصوير الفوتوغرافي
        </h1>

        <p className="fs-4 text-secondary">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br /> التصوير
        </p>

        <div className="home-buttons">
          <button className="btn-outline">اعرف المزيد <i className="fa-solid fa-circle-info"></i></button>
          <button className="btn-main text-white fs-6" >     <i className="fa-solid fa-arrow-left"></i> استكشف المقالات      </button>
        </div>

        <div className="home-stats">
          <div className="stat">
            <i class="fa-solid fa-pen-nib fs-4"></i>
            <h3 className="fw-bold">6</h3>
            <span className="text-secondary">كاتب</span>
          </div>
          <div className="stat">
              <i class="fa-solid fa-folder fs-4"></i>
            <h3  className="fw-bold">4</h3>
            <span className="text-secondary">تصنيفات</span>
          </div>
          <div className="stat">
            <i class="fa-solid fa-users fs-4"></i>
            <h3  className="fw-bold">10K+</h3>
            <span className="text-secondary">قارئ</span>
          </div>
          <div className="stat">
          <i class="fa-solid fa-newspaper fs-4"></i>
            <h3  className="fw-bold">50+</h3>
            <span className="text-secondary">مقالة</span>
          </div>
        </div>

      </div>
    </section>
  );

  
}