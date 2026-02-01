import React from 'react'
import styles from "./CategorySection.module.css"
export default function CategorySection() {


const categories = [
  { id: 1, title: "تقنيات", count: "5 مقالات" },
  { id: 2, title: "مناظر طبيعية", count: "2 مقالات" },
  { id: 3, title: "بورتريه", count: "3 مقالات" },
  { id: 4, title: "إضاءة", count: "3 مقالات" },
  { id: 5, title: "معدات", count: "3 مقالات" },
]; 

  return (
    <>
     <section className={styles.section}> 
      
        <span className={styles.badge}>التصنيفات</span>
        <h2 className={styles.title}>استكشف حسب الموضوع</h2>
    <p className={styles.subtitle}>اعثر على محتوى مصمم حسب اهتماماتك</p>

    <div className={styles.grid}>
  {categories.map((cat) => (
    <div key={cat.id} className={styles.card}>
      <div className={styles.iconBox}></div>
      <h3 className={styles.cardTitle}>{cat.title}</h3>
      <span className={styles.cardCount}>{cat.count}</span>
    </div>
  ))}
</div>
     </section>
    </>
  )
}
