import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Medicines extends Component{

  componentWillMount () {
      
    const {medicines, match: {params}} = this.props;
    this.setState({medicines})
}

  constructor(props){
  super(props)
  this.state = {
      medicines:[]
  }
}

render() {
    console.log(this.props.updateMedicine)
  return (
      <div>
          <h1>Medicines</h1>
      </div>
  );
}
}
export default Medicines;
