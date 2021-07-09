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
}

  constructor(props){
  super(props)
  this.state = {
      account:'',
      username: ''
  }
}

render() {
  return (
    <Router>
      <Sidebar  account={this.props.account}  username={this.props.username}/>
      <Switch>
        <Route path='/medicines' exact component={Medicines} />
        <Route path='/medicines/new' exact component={NewMedicine} />
        <Route path='/clients' exact component={Clients} />
        <Route path='/orders' exact component={Orders} />
      </Switch>
    </Router>
  );
}
}
export default Admin;
