
import react, {Component} from 'react';
import axios from 'axios'
class Webserviceone extends Component{
    constructor(props){
        super(props);
    }
    
    render()
    {
        
        return(
            
            <button onClick={this.MyGETAPI}>
             Call Get API
            </button>
        );
    }
}
export default Webserviceone;