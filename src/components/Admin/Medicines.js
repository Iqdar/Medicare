import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Medicines extends Component{

  componentWillMount () {
      
    const {medicines, updateMedicine, match: {params}} = this.props;
    this.setState({medicines})
    this.setState({updateMedicine})    
}

  constructor(props){
  super(props)
  this.state = {
      medicines:[],
      updateMedicine(){}
  }
}

render() {
    console.log(this.props.updateMedicine)
    console.log(this.props.medicines)
  return (
      <div>
          <h1>Medicines</h1>
      </div>
  );
}
}
export default Medicines;
