import React, { Fragment, useEffect, useState } from "react";
import SingleProductList from "./SingleProductList";
import axios from "axios";

import { Row, Col, Card, Tab, Nav, Button } from "react-bootstrap";

import PageTitle from "../../../../layouts/PageTitle";

const ProductList = () => {
   const [productData, setData] = useState([])
   const [categories, setCategories] = useState([])

  

    useEffect(() => {
        getData();
        getCategories()
    }, [])

    async function getData()
    {
        await axios.get('http://localhost:8080/user/produits').
        then(res => {
        setData(res.data)
        //console.log(res.data)
        })
    }
    async function getCategories()
    {
        await axios.get('http://localhost:8080/user/categories').
        then(res => {
         setCategories(res.data)
        //console.log(res.data)
        })
    }
   return (
      <Fragment>
         <PageTitle headingPara= "" activeMenu="Products" motherMenu="Shop" />
         <Tab.Container
                     defaultActiveKey={"Hamburger".toLowerCase()}
                  >
                     <Nav as="ul" className="nav-pills mb-4">
                        {categories.map(
                           (data, i) =>
                              (
                                 <Nav.Item as="li" key={i}>
                                    <Nav.Link
                                       eventKey={data.designation.toLowerCase()}
                                    >
                                       {data.designation}
                                       
                                    </Nav.Link>
                                 </Nav.Item>
                              )
                        )}
                     </Nav>
                     <Tab.Content className="pt-4">
                        {categories.map(
                           (data, i) =>
                              (
                                 <Tab.Pane
                                    eventKey={data.designation.toLowerCase()}
                                    key={i}
                                 >
                                    <div className="row">
                                    {
                                       productData.filter(p => p.cat.designation === data.designation).map(product => (
                                          <SingleProductList key={product.id} product={product} />
                                       ))
                                    }
                                    </div>
                                    
                                 </Tab.Pane>
                              )
                        )}
                     </Tab.Content>
                  </Tab.Container>
      </Fragment>
   );
};

export default ProductList;
