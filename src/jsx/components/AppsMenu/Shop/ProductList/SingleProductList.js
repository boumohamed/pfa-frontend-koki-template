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
                           <img className="img-fluid" src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-md-7 col-xxl-12">
                     <div className="new-arrival-content position-relative">
                        <h4><Link to={`ecom-product-list/${product.id}`} className="text-black">{product.nomPrd}</Link></h4>
                        <div className="comment-review star-rating">
                           
							   <p className="price">${product.prixUt}</p>
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
