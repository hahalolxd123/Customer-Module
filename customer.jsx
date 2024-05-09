import React, { useState } from 'react';
import AddCustomerDialog from './AddCustomerDialog'; // Import the AddCustomerDialog component
import './Customers.css'; // Import CSS file for Customers component

const Customers = () => {
  const [showAddCustomerDialog, setShowAddCustomerDialog] = useState(false);

  const handleShowAddCustomerDialog = () => {
    setShowAddCustomerDialog(true);
  };

  const handleCloseAddCustomerDialog = () => {
    setShowAddCustomerDialog(false);
  };

  return (
    <div className="professional-component">
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search customers..." />
        <button className="search-button">Search</button>
      </div>
      <div className="button-container">
        <button className="button" onClick={handleShowAddCustomerDialog}>Add Customer</button>
        <button className="button delete-button">Delete Customer</button>
      </div>

      {/* AddCustomerDialog */}
      {showAddCustomerDialog && <AddCustomerDialog onClose={handleCloseAddCustomerDialog} />}
    </div>
  );
};

export default Customers;
