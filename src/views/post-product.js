import React from 'react';
import PostProductFormContainer from '../components/post-product-form-container';

class PostProduct extends React.Component {
  state = {
    products: [],
    error:(<div><h1>No error</h1></div>),
  }
  render() {
    return (
    <div className="product-list">
        <h2 className="my-5 text-center">Post Products:</h2>
        <PostProductFormContainer/>
    </div>
    )
  }
}

export default PostProduct;