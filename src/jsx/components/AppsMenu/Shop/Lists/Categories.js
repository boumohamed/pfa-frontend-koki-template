import React,{Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import DisplayCategory from './DisplayCategory';

export default function Categories() {

    const [categories, setCategories] = useState([])

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
        ],	
        rows: categories
    };
  return (
    <Fragment>
			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<div  className="display mb-4 dataTablesCard">					
							<MDBDataTable  striped 	small	data={data}	/>		
						</div>
					</div>
				</div>	
			</div>
		</Fragment>
  )
}
