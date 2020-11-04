import logo from './logo.svg';
import React from 'react';
import './App.css';
import Webserviceone from './Component/Webserviceone';
import Webservicetwo from './Component/Webservicetwo';
import Webservicethree from './Component/Webservicethree';
import axios from 'axios'

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    error: null,
    isloaded: false,
    items: [],
    flag:0

  };

  }
  MyGETAPI=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
  console.log(response)
  this.setState({isloaded:true,
                items:response.data,
                flag:1

  })
})
.catch (error => {
  alert("error");
  console.log(error);
})
}

MyPOSTAPI=()=>{
  var dict ={title:'foo',body: 'bar', userId:1}
  axios.get('https://jsonplaceholder.typicode.com/posts', dict)
.then(response => {
console.log(response)
this.setState({isloaded:true,
              items:response.data,
              flag:2

})
})
.catch (error => {
alert("error");
console.log(error);
})

}
  render(){

    const { error, isloaded, items }= this.state;

    if(this.state.flag==1){
    return (
   
    <div>
      <Webserviceone />
      <Webservicetwo />
      <Webservicethree />
      <h1> Using Get API</h1>

    <ul>
    {items.map(item => (
    <li key={item.name}>
    {item.id} {item.body}
    </li>
))}

</ul>
    </div>
    );
  }
  else if(this.state.flag==2) {
  
    return(
      <div>
      <Webserviceone />
      <Webservicetwo />
      <Webservicethree />

      <h1> Post API Called</h1>
    </div>
  );
  }

  else {
    return(
      <div>
      <Webserviceone />
      <Webservicetwo />
      <Webservicethree />
      <h1>
        Using Get api
      </h1>
      <ul>
    {items.map(item => (
    <li key={item.name}>
    {item.id} {item.body}
    </li>
))}

</ul>

    </div>
  );
        }
      }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      this.setState({isloaded:true,
                    items:response.data

      })
    })
    .catch (error => {
      alert("error");
      console.log(error);
    })
  }

}
export default App;
