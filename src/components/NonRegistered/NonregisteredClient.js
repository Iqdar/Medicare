import '../App.css';
import React, {Component} from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Medicines from './Medicines';
import Register from './Register';

class NonregisteredClient extends Component{

  componentWillUnmount () {
    const {_account} = this.props.location.account;
    this.setState({account:_account})
    const {_username} = this.props.location.username;
    this.setState({username:_username})
    const {_medicines} = this.props.location.medicines;
    this.setState({medicines:_medicines})
    const {_addClient}=this.props.location.function
    this.setState({addClient:_addClient})
}

  constructor(props){
  super(props)
  this.state = {
      account:'',
      username: '',
      medicines:[],
      addClient(){},
  }
}

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
