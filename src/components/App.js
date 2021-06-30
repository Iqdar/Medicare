import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Web3 from 'web3';
import Medicare from '../abis/Medicare.json'

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()      
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData(){
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Medicare.networks[networkId]
  if(networkData){
    const medicare = web3.eth.Contract(Medicare.abi, networkData.address)
    this.setState({ medicare })
    const admin = await medicare.methods.admin().call()
    this.setState({admin})
    const totalMedicines = await medicare.methods.totalMedicines().call()
    for (var i = 1; i <= totalMedicines; i++) {
      const medicine = await medicare.methods.medicines(i).call()
      this.setState({
        medicines: [...this.state.medicines, medicine]
      })
    }
    if(this.state.account === this.state.admin){
      const totalClients = await medicare.methods.totalClients().call()
      for (var i = 1; i <= totalClients; i++) {
        const client = await medicare.methods.clients(i).call()
        this.setState({
          clients: [...this.state.clients, client]
        })
        const orderIndex = client.totalTransaction;
        for(var j = 1; j <= orderIndex; j++){
          const order = await medicare.methods.orders(i,j).call()
          this.setState({orders: [...this.state.orders, order]})
        }
      }
    }
    else if(this.state.account!=''){
      const clientAddress = await medicare.methods.clientAddresses(this.state.account).call()
      const userId = clientAddresses.id;
      const client = await medicare.methods.clients(userId).call()
      const username = client.name;
      this.setState({username})
      const totalTransaction = client.totalTransaction
      for(var i = 1; i <= totalTransaction; i++){
        const order = await medicare.methods.orders(userId,i).call()
        this.setState({orders: [...this.state.orders, order]})
      }
    }
    this.setState({loading:false})
  }
  else{
    window.alert('SocialNetwork contract not deployed to detected network.')
  }
  }

  addMedicine = (name, formulaName, description, price, stock) => {
    this.setState({ loading: true })
    this.state.medicare.methods.addMedicine(name, formulaName, description, price, stock).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  addClient = (name, deliverAddress) => {
    this.setState({ loading: true })
    this.state.medicare.methods.addClient(name, deliverAddress).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  addOrder = (medicineId, quantity) => {
    this.setState({ loading: true })
    this.state.medicare.methods.addOrder(medicineId, quantity).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }
  
  updateMedicine = (id, name, formulaName, description, price, stock) => {
    this.setState({ loading: true })
    this.state.medicare.methods.updateMedicine(id, name, formulaName, description, price, stock).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  updateClient = (name, deliverAddress) => {
    this.setState({ loading: true })
    this.state.medicare.methods.updateClient(name, deliverAddress).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  updateOrder = (userId, orderIndex) => {
    this.setState({ loading: true })
    this.state.medicare.methods.updateOrder(userId, orderIndex).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  constructor(props){
    super(props)
    this.state = {
      account:'',
      username:'',
      medicare:null,
      admin:'',
      medicines:[],
      clients:[],
      orders:[],
      loading:true
    }
  }


  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
      </div>
    );
  }
}

export default App;
