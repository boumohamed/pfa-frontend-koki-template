import React, { Fragment, useState, useEffect } from "react";
import Products from "./Products";
import axios from "axios";

/// Data
import PageTitle from "../../../../layouts/PageTitle";



const ProductGrid = () => {
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
		<PageTitle headingPara= "" activeMenu="" motherMenu="Produits" />
		<div className="row">
			{productData.map((product) => (
			<Products key={product.key} product={product} />
			))}
		</div>
      </Fragment>
   );
};

export default ProductGrid;
