import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Orders extends Component{

  componentWillMount () {
      
    const {orders, updateOrder, match: {params}} = this.props;
    this.setState({orders})
    this.setState({updateOrder})    
}

  constructor(props){
  super(props)
  this.state = {
      orders:[],
      updateOrder(){}
  }
}

render() {
    console.log(this.props.updateOrder)
  return (
      <div>
          <h1>Orders</h1>
      </div>
  );
}
}
export default Orders;
