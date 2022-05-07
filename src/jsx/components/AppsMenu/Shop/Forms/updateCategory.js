import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function UpdateCategory({ match }) {
   const [Category, setCategory] = useState({})
   let history = useHistory();
   const Success = () => {
      toast.success("Category Updated Successfully", {
         position: "top-right",
         autoClose: 2000,
         hideProgressBar: true,
         closeOnClick: true,
         draggable: true,
      });

      setTimeout(() => {
         history.push('/list-categories')
   }, 2000)
   };

   const Warning = () => {
      toast.warning("Someting went wrong", {
         position: "top-right",
         autoClose: 2000,
         hideProgressBar: true,
         closeOnClick: false,
         draggable: true,
      });

      setTimeout(() => {
         history.push('/list-categories')
   }, 2000)
   };

   useEffect(() => {
   getCategory();
  }, [])

     async function getCategory()
    {
        await axios.get(`http://localhost:8080/user/categories/${match.params.id}`).
        then(res => {
        setCategory(res.data)
        //console.log(res.data)
        })
    }
    function handleForm(e) {
        const { name, value } = e.target;
        setCategory({ ...Category, [name]: value });
        }

        async function saveCategory(e) {
            e.preventDefault()
            axios.put('http://localhost:8080/admin/update/categories', Category)
            .then(res => {
               Success()
            })
            .catch(err => {
               Warning()
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
                        <form
                            onSubmit={saveCategory}
                        >
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Category Name"
                                 name='designation'
                                 value={Category.designation}
                                 onChange={handleForm}
                                 required
                                 
                              />
                           </div>
                           <div className="form-group">
                           <Button variant="outline-primary" type="submit">Save</Button>
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
