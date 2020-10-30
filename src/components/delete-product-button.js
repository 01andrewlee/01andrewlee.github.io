// src/components/login-button.js

import React, { Component, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { PostProduct } from '../views';

const DeleteProduct = () => {
    
    const { getAccessTokenSilently } = useAuth0();  
    const deleteProduct = async (e,id) => {
        try{
            e.preventDefault();
            const token = await getAccessTokenSilently();
            const res = await axios.delete(`https://mxhtg3mi53.execute-api.ap-southeast-1.amazonaws.com/dev/products/${id}`
            ,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            }
            )
            const responseData = await res.json();
            console.log(responseData.message);
        }catch(error){
            console.log(error.message);
        }
    }
    return (
        {deleteProduct}
    );
};

export default DeleteProduct;