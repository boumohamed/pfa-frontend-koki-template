import React, { Fragment, useEffect, useState } from "react";
import SingleProductList from "./SingleProductList";
import axios from "axios";

import PageTitle from "../../../../layouts/PageTitle";

const ProductList = () => {
   const [productData, setData] = useState([])

    useEffect(() => {
        getData();
    }, [])

    async function getData()
    {
        await axios.get('http://localhost:8080/user/produits').
        then(res => {
        setData(res.data)
        //console.log(res.data)
        })
    }
   return (
      <Fragment>
         <PageTitle headingPara= "" activeMenu="Products" motherMenu="Shop" />

         <div className="row">
            {productData.map((product) => (
               <SingleProductList key={product.id} product={product} />
            ))}
         </div>
      </Fragment>
   );
};

export default ProductList;
