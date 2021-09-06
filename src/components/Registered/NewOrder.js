import '../App.css';
import React, {Component} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';


class NewOrder extends Component{
  
  componentWillMount () {
    console.log('new order')

    const {_addOrder, match: {params}} = this.props;
    this.setState({addOrder:_addOrder})    
    if(this.props.location.data){
        this.setState({medicineId: this.props.location.data.id})
    }
}

  constructor(props){
  super(props)
  this.state = {
      addOrder(){},
      medicineId: null
  }
}

render() {
  return (

    
    <div>
    <p>&nbsp;</p>
    <h2>New Order</h2>
    <p>&nbsp;</p>
        <form className="form-horizontal" onSubmit={(event) => {
            event.preventDefault()
            const id = this._id.value
            const quantity = this._quantity.value
            this.props.addOrder(window.web3.utils.hexToNumberString(id),window.web3.utils.hexToNumberString(quantity))
            window.location.href='/'
        }}>
        <div className="row">
            <div className="col-md-6">
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="name">Id:</label>
                <div className="col-md-10 col-sm-12">
                <input
                    type="number"
                    ref={(input) => { this._id = input }}
                    className="form-control"
                    placeholder="ID"
                    defaultValue={this.state.medicineId}
                    required />
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="formulaName">Quantity:</label>
                <div className="col-sm-12 col-md-10">
                <input
                    type="number"
                    ref={(input) => { this._quantity = input }}
                    className="form-control"
                    defaultValue={''}                                
                    placeholder="Quantity"
                    required />
                </div>
            </div>
        </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">        
                    <div className="col-sm-6 ">
                    <button type="submit" className="btn btn-primary" >Order</button>
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
export default NewOrder;
