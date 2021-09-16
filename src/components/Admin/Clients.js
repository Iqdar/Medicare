import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MDBDataTable} from 'mdbreact';


class Clients extends Component{

  componentWillMount () {
      
    const {clients, match: {params}} = this.props;
    this.setState({clients})    
}

  constructor(props){
  super(props)
  this.state = {
      clients:[],
      ordersAdmin:[,],
      medicines:[]
  }
}

render() {
  
  const data = {
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
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Transaction count',
        field: 'transactions',
        sort: 'asc',
        width: 100
      },
      {
        
        label: 'Transaction History',
        field: 'history',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      ...this.state.clients.map((client,key) => {
        return(
        {
          id: window.web3.utils.hexToNumberString(client.id),
          name: client.name,
          address: client.deliverAddress,
          transactions: window.web3.utils.hexToNumberString(client.totalTransaction),
          history:<div><Link to= {{ pathname: '/clients/orders', data:{_client: client}}} className="btn btn-primary" >View History</Link></div>
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
export default Clients;
