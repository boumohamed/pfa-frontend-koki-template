import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PageTitle from "../../../../layouts/PageTitle";
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from "react-toastify";

const ProductDetail = ({ match }) => {
   let history = useHistory();
   const notifyTopRight = () => {
      toast.info("Item Added Successfully", {
         position: "top-center",
         autoClose: 4000,
         hideProgressBar: true,
         closeOnClick: true,
         draggable: false,
         

      });
      setTimeout(() => {
         history.push('/ecom-product-list')
     }, 4000)
 

      
   };
   const [productData, setData] = useState([])
   
   

   function AddTocart() {
      
      var existingProducts = JSON.parse(localStorage.getItem("products"));
      if(existingProducts == null) existingProducts = [];
      // Save allEntries back to local storage
      localStorage.setItem("products", JSON.stringify(existingProducts));

      var newItem = {
         "product": productData,
         "quantity": 0
         };
         existingProducts.push(newItem);
         localStorage.setItem("newItem", JSON.stringify(newItem));
         localStorage.setItem("products", JSON.stringify(existingProducts));

         notifyTopRight()
         console.log(JSON.parse(localStorage.getItem("products")))
         
   }

    useEffect(() => {
        getData();
    }, [productData])

    async function getData()
    {
        await axios.get(`http://localhost:8080/user/produits/${match.params.id}`).
        then(res => {
        setData(res.data)
        //console.log(res.data)
        })
    }

   return (
      <div className="h-80">
        
		<PageTitle headingPara= "" activeMenu="Details" motherMenu="Products" />
         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
						<div className="col-xl-3 ">
							<div className="tab-content">
								<div role="tabpanel" className="tab-pane fade show active" id="first">
									<img className="img-fluid" src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg" alt="" />
								</div>
							</div>
							<div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
							
								
							</div>
						</div>	
                        <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                           <div className="product-detail-content">
                              <div className="new-arrival-content pr">
                                 <h4 >{productData.nomPrd}</h4>
                                 
                                 <p className="price">{productData.prixUt} MAD</p>
                                 <p>
                                    Availability:
                                    <span className="item">
                                       
                                       <i className="fa fa-shopping-basket"></i>
                                    </span>
                                 </p>
                                 
                                
                                 
                                 <p className="text-content">{productData.decription}</p>

                                 <div className="col-2 px-0">
                                    <input
                                       type="number"
                                       name="num"
                                       className="form-control input-btn input-number"
                                       defaultValue="1"
                                    />
                                 </div>
                                 <div className="shopping-cart mt-3">
                                    <Button
                                       className="btn btn-primary"
                                       onClick={AddTocart}
                                    >
                                       <i className="fa fa-shopping-basket mr-2"></i>
                                       Add to cart
                                    </Button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer
                           position="top-right"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
      </div>
   );
};

export default ProductDetail;
