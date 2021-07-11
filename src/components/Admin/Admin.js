import '../App.css';
import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Medicines from './Medicines';
import NewMedicine from './NewMedicine';
import Clients from './Clients';
import Orders from './Orders';

class Admin extends Component{

  componentWillUnmount () {
    const {_account} = this.props.location.account;
    this.setState({account:_account})
    const {_username} = this.props.location.username;
    this.setState({username:_username})
    const {_medicines} = this.props.location.medicines;
    this.setState({medicines:_medicines})
    const {_clients} = this.props.location.clients;
    this.setState({clients:_clients})
    const {_orders} = this.props.location.orders;
    this.setState({orders:_orders})
    const {_addMedicine}=this.props.location.function
    this.setState({addMedicine:_addMedicine})
    const {_updateMedicine}=this.props.location.function
    this.setState({updateMedicine:_updateMedicine})
    const {_updateOrder}=this.props.location.function
    this.setState({updateOrder:_updateOrder})
    
}

  constructor(props){
  super(props)
  this.state = {
      account:'',
      username: '',
      medicines:[],
      clients:[],
      orders:[],
      addMedicine(){},
      updateMedicine(){},
      updateOrder(){}
  }
}

render() {
  return (
    <Router>
      <Sidebar  account={this.props.account}  username={this.props.username}/>
      <Switch>
        <Route path='/medicines/new'
         render={(props) => (
          <NewMedicine {...props} newMedicines={this.props.updateMedicine} />
        )} />
        <Route path='/medicines' 
        render={(props) => (
          <Medicines {...props} medicines = {this.props.medicines} updateMedicine={this.props.updateMedicine} />
        )}/>
        <Route path='/clients' 
        render={(props) => (
          <Clients {...props} clients = {this.props.clients} />
        )} />
        <Route path='/orders'
        render={(props) => (
          <Orders {...props} orders = {this.props.orders} updateOrder={this.props.updateOrder} />
        )}/>
      </Switch>
    </Router>
  );
}
}
export default Admin;
