import React,{Fragment, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { MDBDataTable, MDBBtn, MDBIcon } from 'mdbreact';
import axios from 'axios';
import DisplayCategory from './DisplayCategory';
import { Button } from 'react-bootstrap';

export default function Categories() {

    const [categories, setCategories] = useState([])
    let history = useHistory();

    useEffect(async () => {
        getCategories()
        },[] )
        
    async function getCategories(){
        await axios.get('http://localhost:8080/user/categories')
        .then(res => {
            setCategories(res.data)
        })
    }
    const data = {
        columns: [
            {label: 'ID', field: 'id', sort: 'asc'},
            {label: 'Name', field: 'designation',   sort: 'asc' },
            {label: '', field: 'update', sort: 'asc' },
            {label: '', field: 'delete', sort: 'asc' },
        ],	
        rows: categories && categories.map((row) => {
            return {
              ...row,
              update: (
                <>
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => {history.push(`update-category/${row.id}`)}}
                    >UPDATE</Button>
                </>
              ),
              delete: (
                <>
                  <Button 
                    variant="outline-danger">DELETE</Button>
                </>
              ),
            };
           
            
          }),
       
        
    };
  return (
    <Fragment>
			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<div  className="display mb-4 dataTablesCard">					
							<MDBDataTable  striped hover small	data={data}	/>		
						</div>
					</div>
				</div>	
			</div>
		</Fragment>
  )
}
