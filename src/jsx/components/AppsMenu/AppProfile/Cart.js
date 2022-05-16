import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "react-bootstrap";
import axios from "axios";


export default function Cart() {

    

    let history = useHistory();
    const [existingProducts, setProduct] = useState([])
    const [Total, setTotal] = useState(JSON.parse(localStorage.getItem("Total")))
    




    async function AddOrder() {
        const commande = JSON.parse(localStorage.getItem("Commande"))
        const nbreProd = commande.products.length
        let ids = []
        for(let i = 0; i < nbreProd; i++)
            ids.push(commande.products[i].id)

        const formData = new FormData()
        console.log(ids)
        formData.append("products", ids)
        formData.append("total", commande.total)

        
        await axios.post('http://localhost:8080/user/add/commande',formData)
        
  
     }









    
    
    function removeProduct(id) {

        let newList = existingProducts.filter(item => item.id !== id);
        localStorage.removeItem("product"+id)
        localStorage.removeItem("products");
        localStorage.setItem("products", JSON.stringify(newList));
        setProduct(newList)
        totalCalculate();
        setTotal(JSON.parse(localStorage.getItem("Total")))
    }
    useEffect(() => {
        getData();
    }, [])
    
    const getData = () => {
        setProduct(JSON.parse(localStorage.getItem("products")))
        
    }
    const Order = () => {

        
        localStorage.setItem("products", JSON.stringify([]));
        localStorage.setItem("Total", JSON.stringify(0));
        let order = {

            'products' : existingProducts,
            'total'    : Total
        }
        localStorage.setItem("Commande", JSON.stringify(order));
        console.log(JSON.parse(localStorage.getItem("Commande")))
        AddOrder()
        Success()
        
    }

    const totalCalculate = () => {
        let total = 0;
        var existingProducts = JSON.parse(localStorage.getItem("products"));
        existingProducts.map(item => {
            total = total + item.quantity * item.product.prixUt
        })
        localStorage.setItem("Total", JSON.stringify(total));
        //console.log(Total)
    }
    const Success = () => {
        toast.success("Order Passed successfully ", {
           position: "top-right",
           autoClose: 2000,
           hideProgressBar: true,
           closeOnClick: true,
           draggable: false,
           

        });     
     };

  return (
    <Fragment>        
         <div className="row page-titles mx-0">
			<div className="col-sm-6 p-md-0">
				<div className="welcome-text">
					
				</div>
			</div>
			<div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><Link to={"/ecom-product-list"}>App</Link></li>
					<li className="breadcrumb-item active"><Link to={"#"}>Cart</Link></li>
				</ol>
			</div>
		</div>
        <div className="form-head d-flex mb-3 mb-md-5 align-items-start">
					<div className="mr-auto d-none d-lg-block">
						<Link to="/ecom-product-list" className="text-primary d-flex align-items-center mb-3 font-w500" >
						<svg className="mr-3" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.274969 5.14888C0.27525 5.1486 0.275484 5.14827 0.275812 5.14799L5.17444 0.272997C5.54142 -0.0922061 6.135 -0.090847 6.5003 0.276184C6.86555 0.643168 6.86414 1.23675 6.49716 1.60199L3.20822 4.87499H23.0625C23.5803 4.87499 24 5.29471 24 5.81249C24 6.33027 23.5803 6.74999 23.0625 6.74999H3.20827L6.49711 10.023C6.86409 10.3882 6.8655 10.9818 6.50025 11.3488C6.13495 11.7159 5.54133 11.7171 5.17439 11.352L0.275764 6.47699C0.275483 6.47671 0.27525 6.47638 0.274921 6.4761C-0.0922505 6.10963 -0.0910778 5.51413 0.274969 5.14888Z" fill="#28B463"/>
						</svg>
						Back</Link >
						<h3 className="text-black font-w600 mb-0 fs-22 mb-2">{existingProducts.length} {existingProducts.length > 1 ? "Items": "Item" } In your Current Order</h3>
						<h4  className="mb-0 text-black font-w500" >{Total} Mad </h4>
					</div>
					<div className="dropdown ml-auto">
						<Button
                            className="btn btn-success btn-rounded dd-block px-4"
                            onClick={Order} 
                            disabled={existingProducts.length < 1 ? 'disabled': ''}
                            >
							<svg className="mr-2 scale5" width="14" height="14" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.12885 22H6.87549C6.11615 22 5.50049 22.615 5.50049 23.375C5.50049 24.135 6.11615 24.75 6.87549 24.75H7.12894C7.69836 26.3471 9.21032 27.5 11.0005 27.5C12.7907 27.5 14.3027 26.3471 14.8721 24.75H18.1289C18.6984 26.3471 20.2103 27.5 22.0005 27.5C23.7985 27.5 25.3154 26.3366 25.8788 24.7285C27.5195 24.6187 28.8881 23.4711 29.2494 21.8443L30.9608 14.1408C31.2065 13.037 30.9413 11.897 30.233 11.0148C29.5247 10.1312 28.47 9.62501 27.338 9.62501H25.5407C25.4027 9.11082 25.1547 8.62591 24.8035 8.2057C24.0966 7.35976 23.0586 6.87502 21.9562 6.87502H8.25049C7.49115 6.87502 6.87549 7.49001 6.87549 8.25002C6.87549 9.01002 7.49115 9.62501 8.25049 9.62501H21.9562C22.3469 9.62501 22.5859 9.8412 22.694 9.97011C22.8014 10.099 22.9713 10.3716 22.9028 10.7543L21.3436 19.3164C19.8457 19.5586 18.6267 20.6036 18.1289 22H14.8721C14.3027 20.403 12.7907 19.25 11.0005 19.25C9.21032 19.25 7.69827 20.403 7.12885 22ZM28.0879 12.7349C28.196 12.8692 28.3632 13.1525 28.2766 13.5446L26.5652 21.2481C26.4852 21.6074 26.2128 21.8686 25.8719 21.9582C25.5383 21.0569 24.8921 20.2959 24.0492 19.8082L25.403 12.375H27.338C27.7395 12.375 27.9799 12.6006 28.0879 12.7349ZM22.0005 22C22.0878 22 22.1757 22.0067 22.2348 22.0161C22.8954 22.145 23.3755 22.7157 23.3755 23.375C23.3755 24.1337 22.7585 24.75 22.0005 24.75C21.2425 24.75 20.6255 24.1337 20.6255 23.375C20.6255 22.6163 21.2425 22 22.0005 22ZM11.0005 22C11.7585 22 12.3755 22.6163 12.3755 23.375C12.3755 24.1337 11.7585 24.75 11.0005 24.75C10.2425 24.75 9.62549 24.1337 9.62549 23.375C9.62549 22.6163 10.2425 22 11.0005 22Z" fill="white"></path>
								<path d="M5.5 15.125H11C11.7593 15.125 12.375 14.51 12.375 13.75C12.375 12.99 11.7593 12.375 11 12.375H5.5C4.74066 12.375 4.125 12.99 4.125 13.75C4.125 14.51 4.74066 15.125 5.5 15.125Z" fill="white"></path>
								<path d="M2.75049 19.25H6.87549C7.63483 19.25 8.25049 18.635 8.25049 17.875C8.25049 17.115 7.63483 16.5 6.87549 16.5H2.75049C1.99115 16.5 1.37549 17.115 1.37549 17.875C1.37549 18.635 1.99115 19.25 2.75049 19.25Z" fill="white"></path>
								<path d="M4.12451 9.62501C4.8839 9.62501 5.49951 9.0094 5.49951 8.25001C5.49951 7.49062 4.8839 6.87502 4.12451 6.87502C3.36512 6.87502 2.74951 7.49062 2.74951 8.25001C2.74951 9.0094 3.36512 9.62501 4.12451 9.62501Z" fill="white"></path>
								<path d="M2.75049 24.75C3.50988 24.75 4.12549 24.1344 4.12549 23.375C4.12549 22.6156 3.50988 22 2.75049 22C1.9911 22 1.37549 22.6156 1.37549 23.375C1.37549 24.1344 1.9911 24.75 2.75049 24.75Z" fill="white"></path>
							</svg>
							Order
						</Button>
						
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
                            {existingProducts &&
                                existingProducts.map((p) => (
                                <tr>
                                <td>
                                    <div className="media">
                                        <Link to={"/ecom-product-detail"} >
                                            <img className="mr-3 img-fluid rounded" width="85" src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg" alt="DexignZone" />
                                        </Link >
                                        
                                        <div className="media-body">
                                            <small className="mt-0 mb-1 font-w500 text-primary">{p.product.cat.designation}</small>
                                            <h5 className="mt-0 mb-2 text-black mb-4"><Link to={"/ecom-product-detail"} className="text-black" >{p.product.nomPrd}</Link ></h5>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h5 className="my-0 text-secondary font-w400">{p.quantity}</h5>
                                </td>
                                <td>
                                    <h5 className="my-0 text-secondary wspace-no font-w400">{p.product.prixUt} Mad</h5>
                                </td>
                                <td className="d-md-none d-lg-table-cell">
                                    <h5 className="my-0 text-secondary font-w400">{p.quantity * p.product.prixUt} Mad</h5>
                                </td>
                                <td>
                                <Button
                                    variant="outline-primary"
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
    </Fragment>
  )
}
