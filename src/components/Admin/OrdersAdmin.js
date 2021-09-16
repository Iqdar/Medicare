import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MDBDataTable} from 'mdbreact';

class OrdersAdmin extends Component{

  componentWillMount () {
    if(this.props.location.data){
    const {ordersAdmin, medicines, match: {params}} = this.props;
    const {_client} = this.props.location.data;
    const order = [];
    for (let x=0; x<_client.totalTransaction; x++){
        order[x] = ordersAdmin[_client.id-1, x];
    }
    this.setState({orders: order})
    this.setState({client: _client})
    this.setState({medicines})
    }
    else{
        window.location.href='/clients'
    }
}

  constructor(props){
  super(props)
  this.state = {
      orders:[],
      client:null,
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
      id: window.web3.utils.hexToNumberString(order.orderId),
      name: this.state.client.name,
      medicineId: window.web3.utils.hexToNumberString(order.productId),
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
export default OrdersAdmin;
