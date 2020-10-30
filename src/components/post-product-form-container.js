
import React, { Component, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const PostProductFormContainer = () => {
    const productData = {
        name: "",
        price: "",
        description: ""
    }
    const {...productInfo} = productData
    const[product, setProduct] = useState(productInfo);

    const { getAccessTokenSilently } = useAuth0();
    const postProductForm = async (e) => {
        try{
            e.preventDefault();
            const token = await getAccessTokenSilently();
            const res = await axios.post(`https://mxhtg3mi53.execute-api.ap-southeast-1.amazonaws.com/dev/products`, product
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
    const changeHandler = e => {
      
        const name = e.target.name;
        const value = e.target.value;

        setProduct({
            ...product,[name]:value
        })
    }

    return (
        <div class="container">
            <form class="col">
              <div class="form-group">
                  <label for="name">Product name</label>
                  <br></br>
                  <input type="text" 
                          name="name" 
                          value={product.name} 
                          onChange={changeHandler} 
                  />
              </div>
              <div class="form-group">
                  <label for="price">Price</label><br></br>
                  <input type="number" 
                      step="0.01"
                      min="0"
                      name="price" 
                      value={product.price} 
                      onChange={changeHandler} 
                  />  
                  <small id="emailHelp" class="form-text text-muted">Please input in XX.XX format <em>(example: 4.98)</em>.</small>
              </div>
              <div class="form-group">
                  <label for="description">Description</label><br></br>
                  <textarea name="description" 
                      value={product.description} 
                      onChange={changeHandler} 
              />
                  <small id="emailHelp" class="form-text text-muted">Product description</small>
              </div>
              <button 
              // type="submit" 
                      class="btn btn-primary" 
                      onClick={postProductForm}
                      >Submit</button>
              
              <br></br><br></br><br></br><br></br>
          </form>      
        </div>
        
    );
}
  
// class PostProductFormContainer extends Component {
  
//     constructor (props) {
//         super(props);
//         this.state = {
//             formControls: {
                
//                 name: {
//                     value: ''
//                 },
//                 price: {
//                     value: ''
//                 },
//                 description: {
//                     value: ''
//                 }
//             }
//         }
//         this.postProductForm = this.postProductForm.bind(this);
//     }
//     postProductForm(e){
//         e.preventDefault();
//         // const token = this.state.getAccessTokenSilently;
//         axios.post(`https://mxhtg3mi53.execute-api.ap-southeast-1.amazonaws.com/dev/products`, {
//             name: this.state.formControls.name.value,
//             price: this.state.formControls.price.value,
//             description: this.state.formControls.description.value
//         }
//         // ,{
//         //     headers:{
//         //         Authorization: `Bearer ${token}`,
//         //     }
//         // }
//         )
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data);
//             })
//     }
//     changeHandler = event => {
      
//       const name = event.target.name;
//       const value = event.target.value;
    
//       this.setState({
//         formControls: {
//             ...this.state.formControls,
//             [name]: {
//             ...this.state.formControls[name],
//             value
//           }
//         }
//       });
//   }

  
//    render() {
//       return (
//           <div class="container">
//               <form class="col">
//                 <div class="form-group">
//                     <label for="name">Product name</label>
//                     <br></br>
//                     <input type="text" 
//                             name="name" 
//                             value={this.state.formControls.name.value} 
//                             onChange={this.changeHandler} 
//                     />
//                 </div>
//                 <div class="form-group">
//                     <label for="price">Price</label><br></br>
//                     <input type="number" 
//                         step="0.01"
//                         min="0"
//                         name="price" 
//                         value={this.state.formControls.price.value} 
//                         onChange={this.changeHandler} 
//                     />  
//                     <small id="emailHelp" class="form-text text-muted">Please input in XX.XX format <em>(example: 4.98)</em>.</small>
//                 </div>
//                 <div class="form-group">
//                     <label for="description">Description</label><br></br>
//                     <textarea name="description" 
//                         value={this.state.formControls.description.value} 
//                         onChange={this.changeHandler} 
//                 />
//                     <small id="emailHelp" class="form-text text-muted">Product description</small>
//                 </div>
//                 <button 
//                 // type="submit" 
//                         class="btn btn-primary" 
//                         onClick={this.postProductForm}
//                         >Submit</button>
                
//                 <br></br><br></br><br></br><br></br>
//             </form>      
//           </div>
          
//       );
//   }

// }
export default PostProductFormContainer