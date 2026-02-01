import React from 'react'
import "./About.css"
import blogData from '../Data/blogData'
import {Link} from "react-router-dom"
export default function About() {
    const team = blogData.posts;
  return (
    <>
<section className="home">
      <div className="home-content">
        <span className="home-badge">
       من نحن
        </span>
        <h1 >
          اكتشف <span>فن</span><br />
       مهمتنا هي الإعلام والإلهام
        </h1>
        <p className="fs-4 text-secondary">
مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.<br /> التصوير
        </p>
        <div className="home-stats">
          <div className="stat">
            <i class="fa-solid fa-pen-nib fs-4"></i>
            <h3 className="fw-bold">+2مليون</h3>
            <span className="text-secondary">قارئ شهرياً</span>
          </div>
          <div className="stat">
              <i class="fa-solid fa-folder fs-4"></i>
            <h3  className="fw-bold">+500</h3>
            <span className="text-secondary">مقالة منشورة</span>
          </div>
          <div className="stat">
            <i class="fa-solid fa-users fs-4"></i>
            <h3  className="fw-bold">50K+</h3>
            <span className="text-secondary">كاتب خبير</span>
          </div>
          <div className="stat">
          <i class="fa-solid fa-newspaper fs-4"></i>
            <h3  className="fw-bold">15+</h3>
            <span className="text-secondary">تصنيف</span>
          </div>
        </div>
      </div>
    </section>
<section className="values-section">
  <div className="values-header">
    <h2>قيمنا</h2>
    <p>المبادئ التي توجه كل ما نقوم بإنشائه</p>
  </div>
  <div className="values-grid">
    <div className="value-card">
      <i className="fa-solid fa-rotate"></i>
      <h4>دائمًا نحدث</h4>
      <p>أحدث الاتجاهات وأفضل الممارسات</p>
    </div>
    <div className="value-card">
      <i className="fa-solid fa-users"></i>
      <h4>المجتمع</h4>
      <p>نتعلم مع آلاف المصورين</p>
    </div>
    <div className="value-card">
      <i className="fa-solid fa-bolt"></i>
      <h4>تركيز عملي</h4>
      <p>أمثلة واقعية يمكنك تطبيقها اليوم</p>
    </div>
    <div className="value-card">
      <i className="fa-solid fa-bullseye"></i>
      <h4>الجودة أولًا</h4>
      <p>محتوى مدروس ومكتوب بخبرة</p>
    </div>
  </div>
</section>
<section className="about-team">
      <div className="container">
        <span className="section-badge">فريقنا</span>
        <h2 className="section-title">تعرّف على كتابنا</h2>
        <p className="section-desc">
          فريقنا من المصورين والكتاب ذوي الخبرة، شغوفون بمشاركة معرفتهم مع المجتمع.
        </p>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="avatar-wrapper">
                <img src={member.author.avatar} alt={member.author.name} />
                <span className="verified">✓</span>
              </div>
              <h4>{member.author.name}</h4>
              <span className="role">{member.category}</span>
              <div className="socials">
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-x-twitter"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="questions-section">
      <div className="container questions-content">
        <h2 className="questions-title">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>
        <p className="questions-desc">
          نحب أن نسمع منك، سواء كان لديك سؤال حول محتوى،
          أو تريد المساهمة، أو تريد فقط إلقاء التحية.
          لا تتردد في التواصل.
        </p>
        <div className="questions-actions">
          <Link to="/blogs" className="btn-outline">
            تصفح المقالات
          </Link>
          <Link to="/contact" className="btn-solid">
            تواصل معنا
            <i className="fa-regular fa-envelope"></i>
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

