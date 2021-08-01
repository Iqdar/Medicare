import '../App.css';
import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Medicines from './Medicines';
import NewMedicine from './NewMedicine';
import UpdateMedicine from './UpdateMedicine';
import Clients from './Clients';
import Orders from './Orders';

class Admin extends Component{

render() {
  console.log(this.props.addMedicine)
  return (
    <Router>
      <Sidebar  account={this.props.account}  username={this.props.username}/>
      <Switch>
        <Route path="/medicines/update" component={UpdateMedicine}/>
        <Route path='/medicines/new'
         render={(props) => (
          <NewMedicine {...props} addMedicine={this.props.addMedicine} />
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
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
} 
}
export default Admin;
