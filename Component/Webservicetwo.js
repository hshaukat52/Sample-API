import react, {Component} from 'react';
import axios from 'axios'
class Webservicetwo extends Component{
    constructor(props){
        super(props);
    }
    
    render()
    {   
        
        return(
            <button onClick={this.MyPOSTAPI}>
             Call Post API
            </button>
        );
    }
}
export default Webservicetwo;