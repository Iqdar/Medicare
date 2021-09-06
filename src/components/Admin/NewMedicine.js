import '../App.css';
import React, {Component} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';


class NewMedicine extends Component{
  
  componentWillMount () {
      
    const {_addMedicine, match: {params}} = this.props;
    this.setState({addMedicine:_addMedicine})    
    console.log(_addMedicine)
    
    
}

  constructor(props){
  super(props)
  this.state = {
      addMedicine(){}
  }
}

render() {
    console.log(this.props.Medicines)
    console.log(this.props.addMedicine)
  return (

    
    <div>
    <p>&nbsp;</p>
    <h2>New Medicine</h2>
    <p>&nbsp;</p>
        <form className="form-horizontal" onSubmit={(event) => {
            event.preventDefault()
            const name = this._name.value
            const formulaName = this._formulaName.value
            const description = this._description.value
            const price = this._price.value
            const stock = this._stock.value
            this.props.addMedicine(name,formulaName,description,window.web3.utils.hexToNumberString(price),window.web3.utils.hexToNumberString(stock))
            window.location.href='/medicines'
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
                    defaultValue={''}
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
                    defaultValue={''}                                
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
                    defaultValue={''}
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
                    defaultValue={''}
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
                    defaultValue={''}
                    placeholder="Stock"
                    required />
                </div>
            </div>
            </div>
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
export default NewMedicine;
