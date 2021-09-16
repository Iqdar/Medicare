import '../App.css';
import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Medicines from './Medicines';
import Register from './Register';

class NonregisteredClient extends Component{


render() {

  console.log(1)
  return (
    <Router>
      <Sidebar  account={this.props.account}  username={this.props.username}/>
      <Switch>
        <Route path='/medicines' 
        render={(props) => (
          <Medicines {...props} medicines = {this.props.medicines} />
        )}/>
        <Route path='/register' 
        render={(props) => (
          <Register {...props} addClient = {this.props.addClient} />
        )}/>
      </Switch>
    </Router>
  );
}
}
export default NonregisteredClient;
