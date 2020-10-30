import React from 'react';
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import ProductDescription from '../components/product-description';
import ProductList from './product-list';
import { PostProduct } from '.';
import {productPath, productShowPath, postProductPath} from "../routes"

class Product extends React.Component {
    render() {
        return (
            <div class="product-page">
                <Switch>
                    <Route exact path={productPath} component={ProductList}/>
                    <Route exact path={postProductPath} component={PostProduct}/>
                    <Route path={productShowPath}>
                        <ProductDescription />
                    </Route>
                </Switch>
            </div>
            
        )
    }
}

export default Product;