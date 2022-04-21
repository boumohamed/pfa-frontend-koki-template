import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
   return (
      <div className="footer">
         <div className="copyright">
            <p>
               Copyright © Designed &amp; Developed by{" BOUZRI-FADOUACHE-OUBARI "}
               <Link to="http://dexignzone.com/" target="_blank">
                  Click&Collect
               </Link>{" "}
               2020
            </p>
         </div>
      </div>
   );
};

export default Footer;
