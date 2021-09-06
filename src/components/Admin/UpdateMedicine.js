import '../App.css';
import React, {Component} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';


class UpdateMedicine extends Component{
  
  componentWillMount () {
    if(this.props.location.function){
    const {_data} = this.props.match.params
    this.setState({data:_data})
    console.log(this.props.location.function)
    const {_updateMedicine}=this.props.location.function;
    const {_medicine} = this.props.location.data;
    this.setState({updateMedicine:_updateMedicine})
    this.setState({medicine:_medicine})
    }
    else
        window.location.href='/medicines'
}

  constructor(props){
  super(props)
  this.state = {
      data: null,
      medicine:null,
      updateMedicine(){}
  }
}

render() {
    console.log(this.state.updateMedicine)
  return (

    
    <div>
    <p>&nbsp;</p>
    <h2>Update Medicine</h2>
    <p>&nbsp;</p>
        <form className="form-horizontal" onSubmit={(event) => {
            event.preventDefault()
            const name = this._name.value
            const formulaName = this._formulaName.value
            const description = this._description.value
            const price = this._price.value
            const stock = this._stock.value
            this.state.updateMedicine(window.web3.utils.hexToNumberString(this.state.medicine.id),name,formulaName,description,window.web3.utils.hexToNumberString(price),window.web3.utils.hexToNumberString(stock))
        }}>
        <div className="row">
            <div className="col-md-6">
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="name">Name:</label>
                <div className="col-md-10 col-sm-12">
                <input
                    id="_name"
                    type="text"
                    ref={(input) => { this._name = input }}
                    className="form-control"
                    placeholder="Name"
                    defaultValue={this.state.medicine.name}
                    required />
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="formulaName">Formula Name:</label>
                <div className="col-sm-12 col-md-10">
                <input
                    id="_formulaName"
                    type="text"
                    ref={(input) => { this._formulaName = input }}
                    className="form-control"
                    defaultValue={this.state.medicine.formulaName}                                
                    placeholder="Formula Name"
                    required />
                </div>
            </div>
        </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="description">Description:</label>
                <div className="col-md-10 col-sm-12">
                <input
                    id="_description"
                    type="text"
                    ref={(input) => { this._description = input }}
                    className="form-control"
                    placeholder="Descriptionn"
                    defaultValue={this.state.medicine.description}
                    required />
                </div>
            </div>
            
            </div>
            <div className="col-md-6">
        
            <div className="form-group">
                <label className="control-label col-sm-12" htmlFor="price">Price:</label>
                <div className="col-sm-12 col-md-10">
                <input
                    id="_price"
                    type="number"
                    ref={(input) => { this._price = input }}
                    className="form-control"
                    placeholder="Price"                                
                    defaultValue={this.state.medicine.price}
                    required />
                </div>
            </div>
            
        </div>
        </div>
        <label className="control-label col-sm-12" htmlFor="stock">Stock:</label>
        <div className="row">
            <div className="col-md-6">
            
            <div className="form-group">
                
                <div className="col-md-10 col-sm-12">
                <input
                    id="_stock"
                    type="number"
                    ref={(input) => { this._stock = input }}
                    className="form-control"
                    defaultValue={this.state.medicine.remainingStock}
                    placeholder="Stock"
                    required />
                </div>
            </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">        
                    <div className="col-sm-6 ">
                    <button type="submit" className="btn btn-primary" >Update</button>
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
export default UpdateMedicine;
