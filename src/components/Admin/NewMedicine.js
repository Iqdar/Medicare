import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NewMedicine extends Component{

  componentWillMount () {
      
    const {newMedicine, match: {params}} = this.props;
    this.setState({newMedicine})    
}

  constructor(props){
  super(props)
  this.state = {
      newMedicine(){}
  }
}

render() {
    console.log(this.props.newMedicines)
  return (
      <div>
          <h1>New Medicines</h1>
      </div>
  );
}
}
export default NewMedicine;
