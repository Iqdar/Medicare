import '../App.css';
import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Medicines from './Medicines';
import Account from './Account';
import Orders from './Orders';
import NewOrder from './NewOrder';

class RegisteredClient extends Component{

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
