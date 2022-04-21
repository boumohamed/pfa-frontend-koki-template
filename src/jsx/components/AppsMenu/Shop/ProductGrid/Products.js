import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
   return (
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
         <div className="card">
            <div className="card-body">
               <div className="new-arrival-product">
                  <div className="new-arrivals-img-contnent">
                     <img className="img-fluid" src={"https://www.inspiredtaste.net/wp-content/uploads/2016/08/Easy-Homemade-Hamburger-Recipe-2-1200.jpg"} alt="" />
                  </div>
                  <div className="new-arrival-content text-center mt-3">
                     <h4>
                        <Link to="/ecom-product-detail"  className="text-black">{product.nomPrd}</Link>
                     </h4>
                     
                     <span className="price">{product.prixUt} MAD</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Products;
