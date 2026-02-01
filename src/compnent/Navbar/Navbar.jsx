import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png.png";
import"./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">

         {/* Button */}
            <li className="nav-item">
              <button className="btn btn-warning rounded-pill px-4 text-white asd">
                ابدأ القراءة
              </button>
            </li>
             Search icon 
             <li className="nav-item p-2">
              <i className="fa-solid fa-magnifying-glass text-col"></i>
            </li>


        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adasaNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        Links
         <div className="collapse navbar-collapse " id="adasaNav"
       
        >
         
          <ul className="navbar-nav mx-auto align-items-lg-center gap-3 nav-pill">

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                من نحن
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">
                المدونة
              </NavLink>
            </li>

            
            <li className="nav-item ">
              <NavLink  className="nav-link" to="/">
                الرئيسية
              </NavLink>
            </li>
            </ul>
            
            
<NavLink
  to="/"
  className="navbar-brand d-flex align-items-center gap-2"
> 
  <img
    src={logo}
    alt="عدسة"
    style={{
      width: "42px",
      height: "42px",
      objectFit: "contain",
    marginLeft:"50px",
    }}
  />
  <span
  style={{
       marginLeft:"-110px",
  }}
  className="fw-bold text-warning text-white">عدسة</span>
</NavLink>
<p className="text-white nmr">عالم التصوير الفوتغرافي</p>
          
        </div>
      </div>
    </nav>
  );
}