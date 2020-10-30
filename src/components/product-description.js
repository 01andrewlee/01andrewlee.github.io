import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from "react-router-dom";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { error404Path } from '../routes';
import { useAlert } from 'react-alert'
const ProductDescription = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(0);
    const [jsonString, setJsonString]  = useState(String);
    const alert = useAlert();
    useEffect(() => {
        const res = axios.get(`https://mxhtg3mi53.execute-api.ap-southeast-1.amazonaws.com/dev/products/${id}`)
        .then(res => {
            setProduct(res.data);
            setJsonString( JSON.stringify(res.data, null, 2));
            console.log(jsonString);
        }).catch((error) => {
            console.log(error);
            setJsonString("Error 404: Not Found");
        });
    },[]);

    const { getAccessTokenSilently } = useAuth0();  
    const deleteProduct = async (id) => {
        try{
            // e.preventDefault();
            const token = await getAccessTokenSilently();
            const res = await axios.delete(`https://mxhtg3mi53.execute-api.ap-southeast-1.amazonaws.com/dev/products/${id}`
            ,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(res => {
                alert.show('deleted');
            })
            .catch((error) => {
                alert.show('Delete product: 404 not found');
                console.log(error) //Logs a string: Error: Request failed with status code 404
                return <Redirect to={error404Path}/>;
            })
            
            console.log(res);
            
        }catch(error){
            alert.show(error.message);
            console.log(error.message);
        }
    }
    return(
        <div>
            <div>
                <button
                    className="btn btn-primary btn-block"
                    onClick={()=>deleteProduct(id)}
                    >
                    Delete
                </button>
            </div>
            <div className="row align-items-center profile-header">
                <div className="col-md-2 mb-3">
                <img
                    src="https://m.media-amazon.com/images/I/81JdU-CaFzL._AC_SS350_.jpg"
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                />
                </div>
                <div className="col-md text-center text-md-left">
                <h2>{product.name}</h2>
                <p className="lead text-muted">SGD {product.price}</p>
                <p className="lead text-muted">Description: {product.description}</p>
                </div>
            </div>
            <div className="row">
                <pre className="col-12 text-light bg-dark p-4">
                {jsonString}
                </pre>
            </div>
        </div>
    );
}

export default ProductDescription;