import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Account extends Component{

  componentWillMount () {
      
    const {updateClient, match: {params}} = this.props;
    this.setState({updateClient})    
}

  constructor(props){
  super(props)
  this.state = {
      updateClient(){}
  }
}

render() {
  return (
      <div>
          <h1>Account</h1>
      </div>
  );
}
}
export default Account;
