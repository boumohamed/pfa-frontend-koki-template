import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleProductList = (props) => {
   const [product, setProduct] = useState(props.product)
 
   return (
      <div className="col-lg-12 col-xl-6">
         <div className="card">
            <div className="card-body">
               <div className="row m-b-30">
                  <div className="col-md-5 col-xxl-12">
                     <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                        <div className="new-arrivals-img-contnent">
                           <Link to={`ecom-product-list/${product.id}`}>
                              <img className="img-fluid" 
                              src={product.cat.designation === "Hamburger" ? "https://insanelygoodrecipes.com/wp-content/uploads/2020/10/Hamburger-with-Sesame-Seeds-Cheese-and-Veggies.png" 
                                    : product.cat.designation === "Boisson" ? "https://www.fifteenspatulas.com/wp-content/uploads/2015/07/Refreshing-Summer-Drinks-Fifteen-Spatulas-1-500x500.jpg" :
                                    "https://assets.afcdn.com/recipe/20210901/121767_w1024h768c1cx2592cy1728.webp"}
                               alt="" />
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-7 col-xxl-12">
                     <div className="new-arrival-content position-relative">
                        <h4><Link to={`ecom-product-list/${product.id}`} className="text-black">{product.nomPrd}</Link></h4>
                        <div className="comment-review star-rating">
                           
							   <p className="price">{product.prixUt} MAD</p>
                        </div>
						
                        <p>
                           Availability:{" "}
                           <span className="item">    
                              <i className="fa fa-check-circle text-success"></i>
                           </span>
                        </p>                        
                        <p className="text-content">{product.description}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleProductList;
