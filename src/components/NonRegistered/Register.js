import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component{

  componentWillMount () {
      
    const {addClient, match: {params}} = this.props;
    this.setState({addClient})
}

  constructor(props){
  super(props)
  this.state = {
      addClient(){}
  }
}

render() {
    console.log(this.props.addClient)
  return (
      <div>
          <h1>Register</h1>
      </div>
  );
}
}
export default Register;
