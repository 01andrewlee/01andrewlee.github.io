//404 not found
import React from 'react';
import { Link } from 'react-router-dom';
import{ rootPath} from '../../routes';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <p style={{textAlign:"center"}}>
              <Link to={rootPath}>Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;