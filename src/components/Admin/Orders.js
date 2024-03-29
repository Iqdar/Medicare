import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MDBDataTable} from 'mdbreact';

class Orders extends Component{

  componentWillMount () {
      
    const {orders, clients, medicines, updateOrder, match: {params}} = this.props;
    this.setState({orders})
    this.setState({clients})
    this.setState({medicines})
    this.setState({updateOrder})    
}

  constructor(props){
  super(props)
  this.state = {
      orders:[],
      clients:[],
      medicines:[],
      updateOrder(){}
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
      label: 'Medicine Id',
      field: 'medicineId',
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
      label: 'Update',
      field: 'status',
      sort: 'asc',
      width: 150
    }
  ],
  rows: [
    ...this.state.orders.map((order,key) => {
      return(
    {
      id: window.web3.utils.hexToNumberString(order.orderId),
      name: this.state.clients[window.web3.utils.hexToNumberString(order.clientId)-1].name,
      medicineId: window.web3.utils.hexToNumberString(order.productId),
      quantity: window.web3.utils.hexToNumberString(order.quantity),
      date: Date(window.web3.utils.hexToNumberString(order.orderDate)*1000),
      bill: window.web3.utils.hexToNumberString(order.bill),
      status:<button className="btn btn-primary" onClick={
        (event) => {
          event.preventDefault()
          this.state.updateOrder(window.web3.utils.hexToNumberString(order.clientId), window.web3.utils.hexToNumberString(order.clientTransactionId))          }
      } >Delivered</button>,
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
