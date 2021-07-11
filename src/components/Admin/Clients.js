import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Clients extends Component{

  componentWillMount () {
      
    const {clients, match: {params}} = this.props;
    this.setState({clients})    
}

  constructor(props){
  super(props)
  this.state = {
      clients:[]
  }
}

render() {
  return (
      <div>
          <h1>Clients</h1>
      </div>
  );
}
}
export default Clients;
