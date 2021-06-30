pragma solidity >=0.6.2;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract Medicare{
    address public admin;
    IERC20 public dai;

    uint totalOrders = 0;
    uint totalMedicines = 0;
    uint totalClients = 0;

    struct Medicine{
        uint id;
        string name;
        string formulaName;
        string description;
        uint price;
        uint remainingStock;
    }

    struct Clients{
        uint id;
        address payable user;
        string name;
        string deliverAddress;
        uint totalTransaction;
    }

    struct ClientAddresses{
        address cAddress;
        uint id;
    }

    struct Orders{
        uint orderId;
        uint productId;
        uint clientId;
        uint clientTransactionId;
        uint quantity;
        uint orderDate;
        string status;
    }

    event NewMedicine(
        uint id,
        string name,
        string formulaName,
        string description,
        uint price,
        uint remainingStock
        );

    event NewClient(
        uint id,
        address payable user,
        string name,
        string deliverAddress,
        uint totalTransaction
        );

    event NewClientAddress(
        address cAddress,
        uint id
        );

    event NewOrder(
        uint orderId,
        uint productId,
        uint clientId,
        uint clientTransactionId,
        uint quantity,
        uint orderDate,
        string status
        );

    mapping(uint => Medicine) public medicines;
    mapping(uint => Clients) public clients;
	mapping(address => ClientAddresses) public clientAddresses;
	mapping(uint => mapping(uint => Orders)) public orders;


    constructor(address daiAddress) public {
        admin = msg.sender;
        dai = IERC20(daiAddress);
    }

    function addMedicine(string memory _name, string memory _formulaName, string memory _description, uint _price, uint _stock)public{
		require((bytes(_name).length > 0) && (bytes(_formulaName).length > 0) && (bytes(_description).length > 0));
        totalMedicines++;
        medicines[totalMedicines] = Medicine(totalMedicines,_name,_formulaName,_description,_price,_stock);
        emit NewMedicine(totalMedicines,_name,_formulaName,_description,_price,_stock);
    }

    function addClient(string memory _name, string memory _deliverAddress)public{
        require((bytes(_name).length > 0) && (bytes(_deliverAddress).length > 0));
        totalClients++;
        clients[totalClients] = Clients(totalClients, msg.sender,_name, _deliverAddress, 0);
        clientAddresses[msg.sender] = ClientAddresses(msg.sender, totalClients);
        emit NewClient(totalClients, msg.sender,_name, _deliverAddress, 0);
        emit NewClientAddress(msg.sender, totalClients);
    }

    function addOrder(uint _medicineId, uint _quantity)public{
        ClientAddresses memory _user = clientAddresses[msg.sender];
        uint _userId = _user.id;
        Clients memory _clients = clients[_userId];
        uint _orderIndex = _clients.totalTransaction+1;
        clients[_userId] = Clients(_userId, msg.sender,_clients.name, _clients.deliverAddress, _clients.totalTransaction+1);
        emit NewClient(_userId, msg.sender,_clients.name, _clients.deliverAddress, _clients.totalTransaction+1);
        totalOrders++;
        orders[_userId][_orderIndex] = Orders(totalOrders, _medicineId,_userId,_orderIndex,_quantity,block.timestamp,'Pending');
        emit NewOrder(totalOrders, _medicineId,_userId,_orderIndex,_quantity,block.timestamp,'Pending');
        Medicine memory _medicine = medicines[_medicineId];
        uint _updatedStock = _medicine.remainingStock - _quantity;
        medicines[_medicineId] = Medicine(_medicine.id, _medicine.name, _medicine.formulaName, _medicine.description, _medicine.price, _updatedStock);
        emit NewMedicine(_medicine.id, _medicine.name, _medicine.formulaName, _medicine.description, _medicine.price, _updatedStock);
    }

    function updateMedicine(uint _id, string memory _name, string memory _formulaName, string memory _description, uint _price, uint _stock)public{
		require((bytes(_name).length > 0) && (bytes(_formulaName).length > 0) && (bytes(_description).length > 0));
        Medicine memory _medicine = medicines[_id];
        uint _medicineId = _medicine.id;
        if((compareStrings(_medicine.name, _name)==false)||(compareStrings(_medicine.formulaName,_formulaName) == false)||(compareStrings(_medicine.description,_description) == false)||(_medicine.price!=_price)||(_medicine.remainingStock!=_stock)){
            medicines[_medicineId] = Medicine(_medicineId,_name,_formulaName,_description,_price,_stock);
            emit NewMedicine(_medicineId,_name,_formulaName,_description,_price,_stock);
        }
    }

    function updateClient(string memory _name, string memory _deliverAddress)public{
        require((bytes(_name).length > 0) && (bytes(_deliverAddress).length > 0));
        ClientAddresses memory _user = clientAddresses[msg.sender];
        uint _userId = _user.id;
        Clients memory _clients = clients[_userId];
        if((compareStrings(_clients.name, _name)==false)||(compareStrings(_clients.deliverAddress,_deliverAddress) == false)){
            clients[_userId] = Clients(_clients.id,_clients.user,_name,_clients.deliverAddress,_clients.totalTransaction);
            emit NewClient(_clients.id,_clients.user,_name,_clients.deliverAddress,_clients.totalTransaction);
        }
    }
    
    function updateOrder(uint _userId, uint _orderIndex)public{
        Orders memory _order = orders[_userId][_orderIndex];
        orders[_userId][_orderIndex] = Orders(_order.orderId,_order.productId,_order.clientId,_order.clientTransactionId,_order.quantity,_order.orderDate,'Delivered');
        emit NewOrder(_order.orderId,_order.productId,_order.clientId,_order.clientTransactionId,_order.quantity,_order.orderDate,'Delivered');
    }

    function pay(uint amount)external{
        dai.transferFrom(msg.sender, admin, amount);
    }
    
	function compareStrings (string memory a, string memory b) public view returns (bool) {
		return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
	}
}