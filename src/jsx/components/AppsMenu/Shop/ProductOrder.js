import React, { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../../../layouts/PageTitle";
import data from "../../table/tableData";
import { Badge, Dropdown, Table } from "react-bootstrap";
import Order from "../../Dashboard/Order/Order";


const ProductOrder = () => {
   const [Orders, setOrders] = useState([])
   let km = true;

   useEffect(() => {
      getData();
      
  }, [])

  async function getData()
    {
        await axios.get('http://localhost:8080/manager/commandes').
        then(res => {
         setOrders(res.data)
        console.log(res.data)
        })
        
    }
    function calculateDistance(lattitude1, longittude1,lattitude2 = 33.971588,longittude2 = -6.849813)
{
    const toRadian = n => (n * Math.PI) / 180

    let lat2 = lattitude2
    let lon2 = longittude2
    let lat1 = lattitude1
    let lon1 = longittude1

    console.log(lat1, lon1+"==="+lat2, lon2)
    let R = 6371  // km
    let x1 = lat2 - lat1
    let dLat = toRadian(x1)
    let x2 = lon2 - lon1
    let dLon = toRadian(x2)
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c
    //return d 
    km = true
    if (d > 1)
      return parseInt(d, 10)
   else 
   {
      km = false
      return parseInt(d * 1000, 10) 
   }
    //33.58214625984558, -7.6330449844723995, 33.58300431557188, -7.632251050658386
    
      }
   return (
      <div className="h-80">
         <PageTitle headingPara= "Your business dashboard template" activeMenu="Orders" motherMenu="Shop" />
         <div className="row">
            <div className="">
               <div className="card">
                  <div className="card-body">
                     <Table responsive className="table-responsive-xl" size="sm">
                        <thead>
                           <tr>
                              <th>#Order</th>
                              <th>Date</th>
                              <th>Distance from Client</th>
                           </tr>
                           {Orders.map(order => (
                              <tr key={order.id}>
                                 <td>{order.id}</td>
                                 <td>{order.date_reception}</td>
                                 <td>
                                    {calculateDistance(order.client.adresse.latitude,
                                                      order.client.adresse.longitude,
                                                       33.58300431557188, 
                                                       -7.632251050658386)}
                                    &nbsp;
                                    {km === true ? "KM" : "M" } 
                                                      
                                    
                                 </td>
                                 <td>
                                 <Badge variant="success">
                                    Completed
                                    <span className="ml-1 fa fa-check"></span>
                                 </Badge>
                                 </td>
                                 
                              </tr>
                           ))}
                        </thead>
                        <tbody id="orders">
                           
                        </tbody>
                     </Table>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductOrder;

{ /* data.productData.data.map((d, i) => (
   <tr key={i}>
      {d.map((da, ii) => (
         <td key={ii}>
            {ii === 0 ? (
               <div
                  className={`custom-control custom-checkbox checkbox-${
                     da === "Completed"
                        ? "success"
                        : da === "On Hold"
                        ? "secondary"
                        : da === "Pending"
                        ? "warning"
                        : ""
                  }`}
               >
                  <input
                     type="checkbox"
                     className="custom-control-input "
                     id={`checkAll${i}`}
                     required=""
                  />
                  <label
                     className="custom-control-label"
                     htmlFor={`checkAll${i}`}
                  ></label>
               </div>
            ) : da === "Completed" ? (
               <Badge variant="success">
                  Completed
                  <span className="ml-1 fa fa-check"></span>
               </Badge>
            ) : da === "On Hold" ? (
               <Badge variant="secondary">
                  On Hold
                  <span className="ml-1 fa fa-ban"></span>
               </Badge>
            ) : da === "Pending" ? (
               <Badge variant="warning">
                  Pending
               </Badge>
            ) : da === "Processing" ? (
               <Badge variant="primary">
                  Processing
               </Badge>
            ) : ii === 6 ? (
               <Dropdown>
                  <Dropdown.Toggle
                     variant=""
                     className="table-dropdown icon-false"
                  >
                     <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                     >
                        <g
                           stroke="none"
                           strokeWidth="1"
                           fill="none"
                           fillRule="evenodd"
                        >
                           <rect
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                           ></rect>
                           <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                           ></circle>
                           <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                           ></circle>
                           <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                           ></circle>
                        </g>
                     </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                     <Dropdown.Item href="#">
                        Completed
                     </Dropdown.Item>
                     <Dropdown.Item href="#">
                        Processing
                     </Dropdown.Item>
                     <Dropdown.Item href="#">
                        On Hold
                     </Dropdown.Item>
                     <Dropdown.Item href="#">
                        Pending
                     </Dropdown.Item>
                     <div className="dropdown-divider"></div>
                     <Dropdown.Item
                        href="#"
                        className="text-danger"
                     >
                        Delete
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            ) : (
               da
            )}
         </td>
      ))}
   </tr>
))
            */}

