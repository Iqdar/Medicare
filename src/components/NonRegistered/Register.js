import '../App.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component{

  componentWillMount () {
      
    const {addClient, match: {params}} = this.props;
    this.setState({addClient})
}

  constructor(props){
  super(props)
  this.state = {
      addClient(){}
  }
}

render() {
    console.log(this.props.addClient)
  return (
      <div>
              <p>&nbsp;</p>
    <h2>Register yourself</h2>
    <p>&nbsp;</p>
        <form className="form-horizontal" onSubmit={(event) => {
            event.preventDefault()
            const name = this._name.value
            const deliverAddress = this._deliverAddress.value
            this.props.addClient(name, deliverAddress)
            window.location.href='/'
        }}>
        <div className="row">
            <div className="col-md-6">
            
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="description">Name:</label>
                <div className="col-md-10 col-sm-12">
                <input
                    type="text"
                    ref={(input) => { this._name = input }}
                    className="form-control"
                    placeholder="Name"
                    defaultValue={''}
                    required />
                </div>
            </div>
            
            </div>
            <div className="col-md-6">
        
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="price">Deliver Address:</label>
                <div className="col-sm-12 col-md-10">
                <input
                    type="text"
                    ref={(input) => { this._deliverAddress = input }}
                    className="form-control"
                    placeholder="Address"                                
                    defaultValue={''}
                    required />
                </div>
            </div>
            
        </div>
        </div>
        <div className="row">
            
            <div className="col-md-6">
                <div className="form-group">        
                    <div className="col-sm-6 ">
                    <button type="submit" className="btn btn-primary" >Add</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <p>&nbsp;</p>

      </div>
  );
}
}
export default Register;
