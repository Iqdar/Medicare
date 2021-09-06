import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MDBDataTable} from 'mdbreact';

class Orders extends Component{

  componentWillMount () {
      
    const {orders,medicines, match: {params}} = this.props;
    this.setState({orders})    
    this.setState({medicines})
}

  constructor(props){
  super(props)
  this.state = {
      orders:[],
      medicines:[]
  }
}

render() {const data = {
  columns: [
    {
      label: 'ID',
      field: 'id',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Quantity',
      field: 'quantity',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Date',
      field: 'date',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Bill',
      field: 'bill',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Status',
      field: 'status',
      sort: 'asc',
      width: 150
    }
  ],
  rows: [
    ...this.state.orders.map((order,key) => {
      return(
    {
      id: window.web3.utils.hexToNumberString(order.clientTransactionId),
      name: this.state.medicines[window.web3.utils.hexToNumberString(order.productId)-1].name,
      quantity: window.web3.utils.hexToNumberString(order.quantity),
      date: Date(window.web3.utils.hexToNumberString(order.orderDate)*1000),
      bill: window.web3.utils.hexToNumberString(order.bill),
      status:order.status,
    })
    }
  )]
}

return (
  <div>
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  </div>
);
}
}
export default Orders;
