import React, { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Myorders() {
    const [existingProducts, setProduct] = useState([])
    
    //console.log(existingProducts)
    function removeProduct(id) {

        setProduct(existingProducts.filter(item => item.id !== id));
        //console.log(existingProducts.filter(item => item.id !== id))
        localStorage.removeItem("product"+id)
        localStorage.setItem("products", JSON.stringify(existingProducts));
        localStorage.removeItem("products");
        
    }
    useEffect(() => {
        getData();
    }, [])
    
    const getData = () => {
        setProduct(JSON.parse(localStorage.getItem("products")))
    }


    
  return (
    <Fragment>
         <div className="mr-auto d-none d-lg-block">
            <Link to="/ecom-product-list" className="text-primary d-flex align-items-center mb-3 font-w500" >
                <svg className="mr-3" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.274969 5.14888C0.27525 5.1486 0.275484 5.14827 0.275812 5.14799L5.17444 0.272997C5.54142 -0.0922061 6.135 -0.090847 6.5003 0.276184C6.86555 0.643168 6.86414 1.23675 6.49716 1.60199L3.20822 4.87499H23.0625C23.5803 4.87499 24 5.29471 24 5.81249C24 6.33027 23.5803 6.74999 23.0625 6.74999H3.20827L6.49711 10.023C6.86409 10.3882 6.8655 10.9818 6.50025 11.3488C6.13495 11.7159 5.54133 11.7171 5.17439 11.352L0.275764 6.47699C0.275483 6.47671 0.27525 6.47638 0.274921 6.4761C-0.0922505 6.10963 -0.0910778 5.51413 0.274969 5.14888Z" fill="#EA4989"/>
                </svg>
                Back
            </Link >
        </div>
         <div className="row page-titles mx-0">
			<div className="col-sm-6 p-md-0">
				<div className="welcome-text">
					
				</div>
			</div>
			<div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><Link to={"/ecom-product-list"}>App</Link></li>
					<li className="breadcrumb-item active"><Link to={"#"}>My Orders</Link></li>
				</ol>
			</div>
		</div>

        <div className="row">
            <div className="col-lg-12">
               <div className="profile card card-body px-3 pt-3 pb-0">
                  <div className="profile-head">
                     <div className="profile-info">
                    </div>
                  </div>
                </div>
            </div>
         </div>

         <div className="col-xl-12">
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive order-list">
                        <table className="table items-table">
                            <tbody><tr>
                                <th className="my-0 text-black font-w500 fs-20">Order Items</th>
                                <th style={{width:"10%"}} className="my-0 text-black font-w500 fs-20">Qty</th>
                                <th style={{width:"10%"}} className="my-0 text-black font-w500 fs-20">Price</th>
                                <th className="my-0 text-black font-w500 fs-20 wspace-no d-md-none d-lg-table-cell">Total Price</th>
                                <th></th>
                            </tr>
                            { existingProducts &&
                            existingProducts.map((p) => (
                                <tr>
                                <td>
                                    <div className="media">
                                        <Link to={"/ecom-product-detail"} >
                                            <img className="mr-3 img-fluid rounded" width="85" src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg" alt="DexignZone" />
                                        </Link >
                                        <div className="media-body">
                                            <small className="mt-0 mb-1 font-w500"><Link to={"#"} className="text-primary" >{p.product.nomPrd}</Link ></small>
                                            <p className="mt-0 mb-2 mb-4"><Link to={"/ecom-product-detail"} className="text-black" >{p.product.description}</Link ></p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h5 className="my-0 text-secondary font-w400">{p.quantity}</h5>
                                </td>
                                <td>
                                    <h5 className="my-0 text-secondary font-w400">{p.product.prixUt} Mad</h5>
                                </td>
                                <td className="d-md-none d-lg-table-cell">
                                    <h5 className="my-0 text-secondary font-w400">{p.quantity * p.product.prixUt} Mad</h5>
                                </td>
                                <td>
                                <Button
                                       className="btn btn-primary"
                                       onClick={() => {removeProduct(p.product.id)}}
                                    >
                                       <i class="fa-solid fa-x"></i>
                                    </Button>
                                    
                                </td>
                            </tr>
                            ))
                            }
                            
                           
                        </tbody></table>
                    </div>	
                </div>
            </div>
        </div>
        
    </Fragment>
  )
}
