import React, { useState } from "react";

/// React router dom
import { Link } from "react-router-dom";

/// images
import logo from "../../../images/logo.png";
import logoText from "../../../images/logo1.png";
import logo1 from "../../../images/logo1.png";

const NavHader = () => {
   const [toggle, setToggle] = useState(false);

   /* App logo */
   return (
      <div className="nav-header">
         
         <Link to="/ecom-product-list" className="brand-logo">
            <img className="brand-title" src={logo1} alt="" />
         </Link>
         

         <div className="nav-control" onClick={() => setToggle(!toggle)}>
            <div className={`hamburger ${toggle ? "is-active" : ""}`}>
               <span className="line"></span>
               <span className="line"></span>
               <span className="line"></span>
            </div>
         </div>
      </div>
   );
};

export default NavHader;
