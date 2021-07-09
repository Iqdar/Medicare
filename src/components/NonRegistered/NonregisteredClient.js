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
}

  constructor(props){
  super(props)
  this.state = {
      account:'',
      username: ''
  }
}

render() {

  console.log(1)
  return (
    <Router>
      <Sidebar  account={this.props.account}  username={this.props.username}/>
      <Switch>
        <Route path='/medicines' exact component={Medicines} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>
  );
}
}
export default NonregisteredClient;
