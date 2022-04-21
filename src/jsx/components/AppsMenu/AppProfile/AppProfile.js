import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";

const AppProfile = () => {
   const [activeToggle, setActiveToggle] = useState("posts");
   return (
      <Fragment>
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
         
      </Fragment>
   );
};

export default AppProfile;
