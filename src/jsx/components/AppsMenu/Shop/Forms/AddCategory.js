import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

export default function AddCategory() {

    const [NewCategory, setCategory] = useState({
        designation : ""
       
     })
     const notifyTopRight = () => {
        toast.success("Category Added Successfully", {
           position: "top-right",
           autoClose: 4000,
           hideProgressBar: true,
           closeOnClick: true,
           draggable: true,
        });
     };
    function handleForm(e) {
        const { name, value } = e.target;
        setCategory({ ...NewCategory, [name]: value });
        }

        async function saveCategory(e) {
            e.preventDefault()
            axios.post('http://localhost:8080/admin/add/categorie', NewCategory)
            .then(res => {
                notifyTopRight()
            })
            
        }
  return (
    <div className="row">
            <div className="col-xl-12 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">New Category</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={saveCategory}>
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Category Name"
                                 name='designation'
                                 onChange={handleForm}
                                 required
                              />
                           </div>
                           <div className="form-group">
                           <Button variant="primary dark" type="submit">Save</Button>
                           </div>
                           
                        </form>
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
  )
}
