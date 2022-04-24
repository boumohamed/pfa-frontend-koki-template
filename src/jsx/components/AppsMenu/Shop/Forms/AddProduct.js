import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios';

export default function AddProduct() {

   
   

    
   const [categories, setCategories] = useState([])
   const [file, setFile] = useState("")
   const [NewProduct, setProduct] = useState({
      nomPrd : "",
      prixUt : 0,
      description : "",
      category : 0
   })

   useEffect(async () => {
      getCategories()
   }, []) 

   function handleForm(e) {
      const { name, value } = e.target;
      setProduct({ ...NewProduct, [name]: value });
   
      }

   async function saveProduct(e) {
      e.preventDefault()
      const formData = new FormData()
      
      formData.append("nomPrd",NewProduct.nomPrd)
      formData.append("prixUt",NewProduct.prixUt)
      formData.append("description",NewProduct.description)

      formData.append("image", file.name)
      formData.append("categorie", NewProduct.category)
      formData.append("file", file)
      
      //axios.post('http://localhost:8080/admin/add/produit',formData)
      await axios({
         method: "post",
         url: "http://localhost:8080/admin/add/produit",
         data: formData,
         headers: {
            Accept: "application/json ,text/plain, */*",
                     "Content-Type": "multipart/form-data",
         },
         })

   }
   async function getCategories()
   {
      await axios.get("http://localhost:8080/user/categories")
      .then(res => {
         setCategories(res.data)
        
      })
   }

   const handlFile = (e) => {
      const file = e.target.files[0]
      setFile(file)
    
   }
  return (
    <div className="row">
            <div className="col-xl-12 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">New Product</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={saveProduct}>
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Product Name"
                                 name='nomPrd'
                                 onChange={handleForm}
                                 required
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Price"
                                 name='prixUt'
                                 onChange={handleForm}
                                 required
                              />
                           </div>
                           <div className="form-group">
                              <textarea  rows="3" style={{resize: 'none'}}
                                 type="text"
                                 className="form-control"
                                 placeholder="Description"
                                 name='description'
                                 onChange={handleForm}
                                 
                              />
                           </div>

                           <div className="form-group">
                              <select  
                                 className="form-select form-control" 
                                 aria-label="Default select example"
                                 onChange={handleForm} 
                                 name="category"
                                 >
                                 {categories.length > 0?
                                 categories.map(categorie => 
                                 <option key={categorie.id} value={categorie.id} 
                                          onChange={handleForm} name="category">
                                    {categorie.designation}
                                 </option>)
                                 : <option >Vide</option>
                                 }
                              </select>
                           </div>
                           <div className="form-group">
                              <input 
                                 type='file'
                                 required
                                 className="form-control" 
                                 accept=".jpg, .jpeg, .png"
                                 name='image'
                                 onChange={(e) => {handlFile(e)}}
                                 
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
        </div>
  )
}
