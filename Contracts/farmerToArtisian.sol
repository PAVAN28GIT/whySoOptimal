// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
/********************************************** RawMatrials ******************************************/
/// @dev Create new instance of RawMatrials package

// farmer can enter details : rawmaterial , his name, loc, quant, shpr addr, manuf add, his add
// shpr can set status of rawmaterial to picked 
// manuf can set status to received
// get function to view content of block -info of rawmaterials




contract RawMatrials {
    address Owner;

    enum packageStatus { atcreator, picked, delivered}
    event ShippmentUpdate(
        address indexed BatchID,
        address indexed Shipper,
        address indexed Manufacturer,
        uint TransporterType,
        uint Status
    );

    address productid; 
    string rawmaterials;
    string farmer_name;
    string location;
    uint quantity;
    uint costKg;
    address shipper;
    address manufacturer;
    address supplier;
    packageStatus status;
    bytes32 packageReceiverDescription;

    constructor (
        string memory rawmaterial,
        string memory FarmerName,
        string memory Location,
        uint Quantity_kg,
        uint CostPerKg,
        address Supplier,
        address Shipper,
        address Receiver
        
    )  {
        Owner = Supplier;
        productid = address(this);
        farmer_name = FarmerName;
        location = Location;
        quantity = Quantity_kg;
        costKg = CostPerKg;
        shipper = Shipper;
        manufacturer = Receiver;
        supplier = Supplier;
        status = packageStatus(0);
        rawmaterials = rawmaterial;      
    }

    /// @notice
    /// @dev Get RawMatrials Package Details
    // @return Package Details
    function getInfo () public view returns(
        string memory rawmaterial,
        string memory FarmerName,
        string memory Location,
        uint Quantity,
        uint CostPerkg,
        address Shipper,
        address Receiver,
        address Supplier

    ) {
        return(
            rawmaterials,
            farmer_name,
            location,
            quantity,
            costKg,
            shipper,
            manufacturer,
            supplier
        );
    }

    /// @notice
    /// @dev Get Package Transaction Status
    /// @return Package Status
    function getStatus() public view returns(uint) {
        return uint(status);
    }
    function getRawMaterials() public view returns (string memory) {
        return rawmaterials;
    }

    /// @notice
    /// @dev Pick Package by Associate Transporter
    /// @param shpr Transporter Ethereum Network Address
    function pickPackage(address shpr) public {
        require( shpr == shipper, "Only Associate Shipper can call this function");
        require(status == packageStatus(0), "Package must be at Supplier.");
        status = packageStatus(1);
        emit ShippmentUpdate(address(this),shipper,manufacturer,1,1);
    }

    /// @notice
    /// @dev Received Package Status Update By Associated Manufacturer
    /// @param manu Manufacturer Ethereum Network Address
    function receivedPackage(address manu) public {
        require(manu == manufacturer,"Only Associate Manufacturer can call this function");
        require(status == packageStatus(1), "Product not picked up yet");
        status = packageStatus(2);
        emit ShippmentUpdate(address(this),shipper,manufacturer,1,2);
    }
}
