import '../App.css';
import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Medicines from './Medicines';
import Account from './Account';
import Orders from './Orders';
import NewOrder from './NewOrder';

class RegisteredClient extends Component{

  componentWillUnmount () {
    const {_account} = this.props.location.account;
    this.setState({account:_account})
    const {_username} = this.props.location.username;
    this.setState({username:_username})
    const {_medicines} = this.props.location.medicines;
    this.setState({medicines:_medicines})
    const {_orders} = this.props.location.orders;
    this.setState({orders:_orders})
    const {_addOrder}=this.props.location.function
    this.setState({addOrder:_addOrder})
    const {_updateClient}=this.props.location.function
    this.setState({updateClient:_updateClient})
  }

  constructor(props){
  super(props)
  this.state = {
      account:'',
      username: '',
      medicines:[],
      orders:[],
      addOrder(){},
      updateClient(){}
  }
}

render() {

  return (
    <Router>
      <Sidebar  account={this.props.account}  username={this.props.username}/>
      <Switch>
        <Route path='/medicines' 
        render={(props) => (
          <Medicines {...props} medicines = {this.props.medicines}/>
        )}/>
        <Route path='/account' 
        render={(props) => (
          <Account {...props} updateClient={this.props.updateClient} />
        )}/>
        <Route path='/orders/new'
        render={(props) => (
          <NewOrder {...props} addOrder={this.props.addOrder} />
        )}/>
        <Route path='/orders'
        render={(props) => (
          <Orders {...props} medicines = {this.props.medicines} orders = {this.props.orders} updateOrder={this.props.updateOrder} />
        )}/>
      </Switch>
    </Router>
  );
}
}
export default RegisteredClient;
