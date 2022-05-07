import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const AppProfile = () => {
   
   return (
      <Fragment>
         <div className="mr-auto d-none d-lg-block">
						<Link to={"#"} className="text-primary d-flex align-items-center mb-3 font-w500" >
						<svg className="mr-3" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.274969 5.14888C0.27525 5.1486 0.275484 5.14827 0.275812 5.14799L5.17444 0.272997C5.54142 -0.0922061 6.135 -0.090847 6.5003 0.276184C6.86555 0.643168 6.86414 1.23675 6.49716 1.60199L3.20822 4.87499H23.0625C23.5803 4.87499 24 5.29471 24 5.81249C24 6.33027 23.5803 6.74999 23.0625 6.74999H3.20827L6.49711 10.023C6.86409 10.3882 6.8655 10.9818 6.50025 11.3488C6.13495 11.7159 5.54133 11.7171 5.17439 11.352L0.275764 6.47699C0.275483 6.47671 0.27525 6.47638 0.274921 6.4761C-0.0922505 6.10963 -0.0910778 5.51413 0.274969 5.14888Z" fill="#EA4989"/>
						</svg>
						Back</Link >
						<h3 className="text-black font-w600 mb-0 fs-22 mb-2">Order ID #5552351</h3>
						<Link to={"#"} className="mb-0 text-black font-w500" >Orders  /</Link >
						<Link to={"#"} className="mb-0 font-w500" > Order Detaills </Link >
					</div>
         <div className="row page-titles mx-0">
			<div className="col-sm-6 p-md-0">
				<div className="welcome-text">
					<h4>Hi, welcome back!</h4>
				</div>
			</div>
			<div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><Link to={"/ecom-product-list"}>App</Link></li>
					<li className="breadcrumb-item active"><Link to={"#"}>Profile</Link></li>
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
												<tr>
													<td>
														<div className="media">
															<Link to={"/ecom-product-detail"} >
																<img className="mr-3 img-fluid rounded" width="85" src={require("../../../../images/card/pic5.jpg").default} alt="DexignZone" />
															</Link >
															<div className="media-body">
																<small className="mt-0 mb-1 font-w500"><Link to={"#"} className="text-primary" >MAIN COURSE</Link ></small>
																<h5 className="mt-0 mb-2 mb-4"><Link to={"/ecom-product-detail"} className="text-black" >Watermelon juice with ice</Link ></h5>
															</div>
														</div>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">1x</h4>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">$4.12</h4>
													</td>
													<td className="d-md-none d-lg-table-cell">
														<h4 className="my-0 text-secondary font-w600">$4.12</h4>
													</td>
													<td>
														<Link to={"#"}  className="ti-close fs-28 text-danger las la-times-circle"></Link >
													</td>
												</tr>
												<tr>
													<td>
														<div className="media">
															<Link to={"/ecom-product-detail"} >
																<img className="mr-3 img-fluid rounded" width="85" src={require("../../../../images/card/pic6.jpg").default} alt="DexignZone" />
															</Link >
															<div className="media-body">
																<small className="mt-0 mb-1 font-w500"><Link to={"#"} className="text-primary" >MAIN COURSE</Link ></small>
																<h5 className="mt-0 mb-2 text-black mb-4"><Link to={"/ecom-product-detail"} className="text-black" >Chicken curry special with cucumber</Link ></h5>
															</div>
														</div>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">3x</h4>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">$14.99</h4>
													</td>
													<td className="d-md-none d-lg-table-cell">
														<h4 className="my-0 text-secondary font-w600">$44.97</h4>
													</td>
													<td>
														<Link to={"#"}  className="ti-close fs-28 text-danger las la-times-circle"></Link >
													</td>
												</tr>
												<tr>
													<td>
														<div className="media">
															<Link to={"/ecom-product-detail"} >
																<img className="mr-3 img-fluid rounded" width="85" src={require("../../../../images/card/pic7.jpg").default} alt="DexignZone" />
															</Link >
															<div className="media-body">
																<small className="mt-0 mb-1 font-w500"><Link to={"#"} className="text-primary" >MAIN COURSE</Link ></small>
																<h5 className="mt-0 mb-2 text-black mb-4"><Link to={"/ecom-product-detail"} className="text-black" >Italiano pizza with garlic</Link ></h5>
															</div>
														</div>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">1x</h4>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">$15.44</h4>
													</td>
													<td className="d-md-none d-lg-table-cell">
														<h4 className="my-0 text-secondary font-w600">$15.44</h4>
													</td>
													<td>
														<Link to={"#"}  className="ti-close fs-28 text-danger las la-times-circle"></Link >
													</td>
												</tr>
											</tbody></table>
										</div>	
									</div>
								</div>
							</div>
         
      </Fragment>
   );
};

export default AppProfile;
