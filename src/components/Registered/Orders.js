import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Orders extends Component{

  componentWillMount () {
      
    const {orders, match: {params}} = this.props;
    this.setState({orders})    
}

  constructor(props){
  super(props)
  this.state = {
      orders:[]
  }
}

render() {
  return (
      <div>
          <h1>Orders</h1>
      </div>
  );
}
}
export default Orders;
