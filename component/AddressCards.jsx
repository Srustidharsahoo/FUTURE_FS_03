import React from 'react';
import '../css/AddressCards.css';

const AddressCards = () => {
  const addresses = [
    {
      id: 1,
      name: 'Srustidhar Sahoo',
      address: 'LIG-115 Nayapali, 756001 Bhubaneswar , Odisha , India',
      phone: '7684023210',
      type: 'Home',
      isDefault: true
    },
    {
      id: 2,
      name: 'Srustidhar Sahoo',
      address: '3853 Anijo, Bhadrak , 756115 , Odisha , India ',
      phone: '7684023210',
      type: 'Office',
      isDefault: false
    }
  ];

  return (
    <div className="address-container">
      {addresses.map((address) => (
        <div key={address.id} className={`address-card ${address.isDefault ? 'default' : ''}`}>
          <h3 className="address-type">{address.type}</h3>
          <div className="address-details">
            <p className="name">{address.name}</p>
            <p className="street">{address.address}</p>
            <p className="phone">{address.phone}</p>
          </div>
          <div className="address-actions">
            {address.isDefault ? (
              <span className="default-badge">Default address</span>
            ) : (
              <button className="set-default">Set as Default</button>
            )}
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressCards;