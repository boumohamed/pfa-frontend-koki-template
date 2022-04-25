import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

class MM extends Component {
   componentDidMount() {
      this.$el = this.el;
      this.mm = new MetisMenu(this.$el);
   }
   componentWillUnmount() {
      this.mm("dispose");
   }
   render() {
      return (
         <div className="mm-wrapper">
            <ul className="metismenu" ref={(el) => (this.el = el)}>
               {this.props.children}
            </ul>
         </div>
      );
   }
}

class SideBar extends Component {
   /// Open menu
   componentDidMount() {
      // sidebar open/close
      var btn = document.querySelector(".nav-control");
      var aaa = document.querySelector("#main-wrapper");

      function toggleFunc() {
         return aaa.classList.toggle("menu-toggle");
      }

      btn.addEventListener("click", toggleFunc);
   }
   render() {
      /// Path
      const path = window.location.pathname;

      /// Active menu
      let deshBoard = [
            "",
            "analytics",
            "companies",
            "statistics",
			
         ],
         app = [
            "app-profile",
            "app-calender",
            "email-read",
            "ecom-product-grid",
            "ecom-product-list",
            "ecom-product-list",
            "ecom-product-order",
            "ecom-checkout",
            "ecom-invoice",
            "ecom-customers",
         ],
         
         bootstrap = [
            "ui-accordion",
            "ui-badge",
            "ui-alert",
            "ui-button",
            "ui-modal",
            "ui-button-group",
            "ui-list-group",
            "ui-media-object",
            "ui-card",
            "ui-carousel",
            "ui-dropdown",
            "ui-popover",
            "ui-progressbar",
            "ui-tab",
            "ui-typography",
            "ui-pagination",
            "ui-grid",
         ],
         forms = [
            "form-element",
            "form-wizard",
            "form-editor-summernote",
            "form-pickers",
            "form-validation-jquery",
         ],
         table = ["table-bootstrap-basic", "table-datatable-basic"];

      return (
         <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
               <MM className="metismenu" id="menu">


               <li
                     className={`${
                        app.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                     >
                        
                        <span className="nav-text">Shoping</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/app-profile">Profile</Link>
                        </li>
                        <li>
                           
                              <li>
                                 <Link to="/ecom-product-grid">
                                    Product Grid
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/ecom-product-list">
                                    Product List
                                 </Link>
                              </li>
                              <li>

                                 <Link to="/ecom-product-order">Orders</Link>

                              </li>
                              
                              <li>
                                 <Link to="/ecom-customers">Customers</Link>
                              </li>
                           
                        </li>
                     </ul>
                  </li>
                  {/* 
                  <li
                     className={`${
                        deshBoard.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <span className="nav-text">Dashboard</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/">Dashboard</Link>
                        </li>
						      <li>
                           <Link to="order-list">Order List</Link>
                        </li>
						   <li>
                           <Link to="customer-list">Customer List</Link>
                        </li>
                     </ul>
                  </li>
                  
               
                  <li
                     className={`${
                        bootstrap.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                       
                        <span className="nav-text">Bootstrap</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/ui-accordion">Accordion</Link>
                        </li>
                        <li>
                           <Link to="/ui-alert">Alert</Link>
                        </li>
                        <li>
                           <Link to="/ui-badge">Badge</Link>
                        </li>
                        <li>
                           <Link to="/ui-button">Button</Link>
                        </li>
                        <li>
                           <Link to="/ui-modal">Modal</Link>
                        </li>
                        <li>
                           <Link to="/ui-button-group">Button Group</Link>
                        </li>
                        <li>
                           <Link to="/ui-list-group">List Group</Link>
                        </li>
                        <li>
                           <Link to="/ui-media-object">Media Object</Link>
                        </li>
                        <li>
                           <Link to="/ui-card">Cards</Link>
                        </li>
                        <li>
                           <Link to="/ui-carousel">Carousel</Link>
                        </li>
                        <li>
                           <Link to="/ui-dropdown">Dropdown</Link>
                        </li>
                        <li>
                           <Link to="/ui-popover">Popover</Link>
                        </li>
                        <li>
                           <Link to="/ui-progressbar">Progressbar</Link>
                        </li>
                        <li>
                           <Link to="/ui-tab">Tab</Link>
                        </li>
                        <li>
                           <Link to="/ui-typography">Typography</Link>
                        </li>
                        <li>
                           <Link to="/ui-pagination">Pagination</Link>
                        </li>
                        <li>
                           <Link to="/ui-grid">Grid</Link>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`${
                        forms.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <span className="nav-text forms">Forms</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/form-element">Form Elements</Link>
                        </li>
                        
                        
                        <li>
                           <Link to="form-pickers">Pickers</Link>
                        </li>
                        <li>
                           <Link to="form-validation-jquery">
                              Jquery Validate
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li
                     className={`${
                        table.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <span className="nav-text">Table</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="table-bootstrap-basic">Bootstrap</Link>
                        </li>
                        <li>
                           <Link to="table-datatable-basic">Datatable</Link>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <span className="nav-text">Pages</span>
                     </Link>
                     <ul >
                        <li>
                           <Link
                              className="has-arrow"
                              to="#"
                              
                           >
                              Error
                           </Link>
                           <ul >
                              <li>
                                 <Link to="/page-error-400">Error 400</Link>
                              </li>
                              <li>
                                 <Link to="/page-error-403">Error 403</Link>
                              </li>
                              <li>
                                 <Link to="/page-error-404">Error 404</Link>
                              </li>
                              <li>
                                 <Link to="/page-error-500">Error 500</Link>
                              </li>
                              <li>
                                 <Link to="/page-error-503">Error 503</Link>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </li>
                  */}
               </MM>
				
               <div className="copyright">
                  <p>
                     <strong>Click&Collect</strong> ©All Rights Reserved
                  </p>
               </div>
            </PerfectScrollbar>
         </div>
      );
   }
}

export default SideBar;
