import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {postProductPath} from '../routes'


import { useAuth0 } from "@auth0/auth0-react";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { getAccessTokenSilently } = useAuth0();
    useEffect((e) => {
        getProductList(e);
      },[]);

    const getProductList = async (e)=>{
        try{
            // const token = await getAccessTokenSilently();
            const res = await axios.get(`https://mxhtg3mi53.execute-api.ap-southeast-1.amazonaws.com/dev/products`
            // ,{
            //     headers:{
            //         Authorization: `Bearer ${token}`,
            //     }
            // }
            )
            const productsList = res.data;
            console.log(res);
            console.log(productsList);
            setProducts(Object.values({ productsList })[0]);
            const responseData = await res.json();
            console.log(responseData.message);
        }catch(error){
            console.log(error.message);
        }
      }
    return (
    <div className="product-list">
        <h2 className="my-5 text-center">Products:</h2>
        <p>To post product, head to <a href={postProductPath}>post product</a> page.</p>
        <ul>
        {products.map(product => <li key={product.id}>ID:<a href={"/product/"+product.id}>{product.id}</a> <b>| {product.name}</b></li>)}
        </ul>
        <div className="row">
            <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(products, null, 2)}
            </pre>
        </div>
    </div>
    )
}
export default ProductList;

// const PostProductFormContainer = () => {
//     const productData = {
//         name: "",
//         price: "",
//         description: ""
//     }
//     const {...productInfo} = productData
//     const[product, setProduct] = useState(productInfo);

//     const { getAccessTokenSilently } = useAuth0();
//     const postProductForm = async (e) => {
//         try{
//             e.preventDefault();
//             const token = await getAccessTokenSilently();
//             const res = await axios.post(`https://mxhtg3mi53.execute-api.ap-southeast-1.amazonaws.com/dev/products`, product
//             ,{
//                 headers:{
//                     Authorization: `Bearer ${token}`,
//                 }
//             }
//             )
//             const responseData = await res.json();
//             console.log(responseData.message);
//         }catch(error){
//             console.log(error.message);
//         }
//     }
//     const changeHandler = e => {
      
//         const name = e.target.name;
//         const value = e.target.value;

//         setProduct({
//             ...product,[name]:value
//         })
//     }


// class ProductList extends React.Component {
//     state = {
//         products: []
//     }

//     componentDidMount() {
//         axios.get('https://mxhtg3mi53.execute-api.ap-southeast-1.amazonaws.com/dev/products')
//         .then(res => {
//             const products = res.data;
//             this.setState({ products });
//         })
//     }
//     render() {
//         return (
//         <div className="product-list">
//             <h2 className="my-5 text-center">Products:</h2>
//             <p>To post product, head to <a href={postProductPath}>post product</a> page.</p>
//             <ul>
//             { this.state.products.map(product => <li key={product.id}>ID:<a href={"/product/"+product.id}>{product.id}</a> <b>| {product.name}</b></li>)}
//             </ul>
//         </div>
//         )
//     }
// }

// // src/views/product-list.js

// import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

// const ProductList = () => {
//     const { user } = useAuth0();
//     const { name, picture, email } = user;
//     const state = {
//         products: []
//     }
//     return (
//         <div>
//             <div className="product-list">
//                 <h2 className="my-5 text-center">Product List</h2>

//             </div>
//         </div>
//     );
// };

// export default ProductList;
