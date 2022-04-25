import React from "react";
import { Link } from "react-router-dom";

/// Scroll


const Header = ({ onNote, toggle, onProfile, onActivity, onNotification}) => {
   var path = window.location.pathname.split("/");
   var name = path[path.length - 1].split("-");
   var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
   var finalName = filterName.includes("app")
      ? filterName.filter((f) => f !== "app")
      : filterName.includes("ui")
      ? filterName.filter((f) => f !== "ui")
      : filterName.includes("uc")
      ? filterName.filter((f) => f !== "uc")
      : filterName.includes("basic")
      ? filterName.filter((f) => f !== "basic")
      : filterName.includes("form")
      ? filterName.filter((f) => f !== "form")
      : filterName.includes("table")
      ? filterName.filter((f) => f !== "table")
      : filterName.includes("page")
      ? filterName.filter((f) => f !== "page")
      : filterName.includes("email")
      ? filterName.filter((f) => f !== "email")
      : filterName.includes("ecom")
      ? filterName.filter((f) => f !== "ecom")
      : filterName.includes("chart")
      ? filterName.filter((f) => f !== "chart")
      : filterName.includes("editor")
      ? filterName.filter((f) => f !== "editor")
      : filterName;
	
	var page_name = (finalName.join(" ") === '')?'Dashboard':finalName.join(" ");	
	  
   return (
      <div className="header">
         <div className="header-content">
            <nav className="navbar navbar-expand">
               <div className="collapse navbar-collapse justify-content-between">
                  <div className="header-left">
                     <div
                        className="dashboard_bar"
                        style={{ textTransform: "capitalize" }}
                     >
                        {page_name}
                     </div>
                  </div>

                  <ul className="navbar-nav header-right">
                   
					 
                     <li className="nav-item dropdown notification_dropdown">
                        <Link to={"/app-cart"}
                           className="nav-link bell bell-link"
                           
                        >
                           <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.132 2.504 4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.263A2.004 2.004 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.145-5.504-1.736-.992zM14 13h2v5h-2v-5zm-6 0h2v5H8v-5z"/></svg>
                           <span className="badge light text-white bg-primary">5 </span>
                        </Link>
                     </li>
                     <li
                        className={`nav-item dropdown header-profile ${
                           toggle === "profile" ? "show" : ""
                        }`}
                        onClick={() => onProfile()}
                     >
                        <Link to={"#"}
                           className="nav-link"
                           role="button"
                           data-toggle="dropdown"
                        >
                           <div className="header-info">
								
                           </div>
                           <img src="https://s3.eu-central-1.amazonaws.com/stagiaires.ma/candidates/pictures/2021/12/x600/146197_mohamed-bouzri.jpeg?v=1639848316" width="20" alt="" />
                        </Link>
                        <div
                           className={`dropdown-menu dropdown-menu-right ${
                              toggle === "profile" ? "show" : ""
                           }`}
                        >
                           <Link
                              to="/app-profile"
                              className="dropdown-item ai-icon"
                           >
                              <svg
                                 id="icon-user1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="text-success"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                 <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              <span className="ml-2">Profile </span>
                           </Link>
                           <Link
                              to="/page-login"
                              className="dropdown-item ai-icon"
                           >
                              <svg
                                 id="icon-logout"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="text-danger"
                                 width="18"
                                 height="18"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                 <polyline points="16 17 21 12 16 7"></polyline>
                                 <line x1="21" y1="12" x2="9" y2="12"></line>
                              </svg>
                              <span className="ml-2">Logout </span>
                           </Link>
                        </div>
                     </li>
					 
                  </ul>
               </div>
            </nav>
         </div>
      </div>
   );
};

export default Header;

