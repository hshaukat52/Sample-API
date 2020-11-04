
import react, {Component} from 'react';
class Webservicethree extends Component{
    constructor(props){
        super(props);
    }
    Mythirdbutton=()=>{
        alert('Allah');
      }
    render()
    {
        return(
        <button onClick={this.Mythirdbutton}>
        My Third Button
         </button>
        );
    }
}
export default Webservicethree;