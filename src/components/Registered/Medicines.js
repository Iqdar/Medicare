import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MDBDataTable} from 'mdbreact';

class Medicines extends Component{

  componentWillMount () {
      
    const {medicines, addOrder, match: {params}} = this.props;
    this.setState({medicines})
    this.setState({addOrder})    
}

  constructor(props){
  super(props)
  this.state = {
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
      label: 'Formula',
      field: 'formulaName',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Description',
      field: 'description',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Price',
      field: 'price',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Stock',
      field: 'remainingStock',
      sort: 'asc',
      width: 150
    },
    {
      label: '',
      field: 'edit',
      sort: 'asc',
      width: 10
    }
  ],
  rows: [
    ...this.state.medicines.map((medicine,key) => {
      return(
    {
      id: window.web3.utils.hexToNumberString(medicine.id),
      name: medicine.name,
      formulaName: medicine.formulaName,
      description: medicine.description,
      price: window.web3.utils.hexToNumberString(medicine.price),
      remainingStock:window.web3.utils.hexToNumberString(medicine.remainingStock),
      edit:<div><Link to= {{ pathname: '/orders/new', data:{id:medicine.id}}} className="btn btn-primary" >Order Now</Link></div>  
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
export default Medicines;
