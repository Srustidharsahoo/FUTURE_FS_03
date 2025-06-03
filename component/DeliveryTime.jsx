import React, { useState } from 'react';
import '../css/DeliveryTime.css';

export const DeliveryTime = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, time: '6am - 7am', price: '$4.00', type: 'Paid', isFree: false },
    { id: 2, time: '8am - 9am', price: '$3.50', type: 'Paid', isFree: false },
    { id: 3, time: '1pm - 2pm', price: '$0.00', type: 'Free', isFree: true },
    { id: 4, time: '2pm - 3pm', price: '$3.99', type: 'Paid', isFree: false },
    { id: 5, time: '3pm - 4pm', price: '$3.99', type: 'Paid', isFree: false },
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  return (
    <div className="delivery-options">
      <h2>Delivery Timing</h2>
      <div className="options-list">
        {options.map((option) => (
          <div 
            key={option.id} 
            className={`option-card ${selectedOption === option.id ? 'selected' : ''}`}
            onClick={() => handleSelect(option.id)}
          >
            <div className="option-header">
              <input 
                type="checkbox" 
                checked={selectedOption === option.id}
                onChange={() => handleSelect(option.id)}
              />
              <span className="time">{option.time}</span>
            </div>

            <div className="option-details">
              <span className={`price ${option.isFree ? 'free' : ''}`}>{option.price}</span>
              <span className={`type ${option.isFree ? 'free' : ''}`}>{option.type}</span>
            </div>

            <button className="choose-btn">Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default DeliveryTime;