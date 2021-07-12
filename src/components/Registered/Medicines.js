import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Medicines extends Component{

  componentWillMount () {
      
    const {medicines, addOrder, match: {params}} = this.props;
    this.setState({medicines})
    this.setState({addOrder})    
}

  constructor(props){
  super(props)
  this.state = {
      medicines:[],
      addOrder(){}
  }
}

render() {
  return (
      <div>
          <h1>Medicines</h1>
      </div>
  );
}
}
export default Medicines;
