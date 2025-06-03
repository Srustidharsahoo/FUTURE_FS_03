import { useState } from "react";
import "../css/accordion.css";
import { CiLocationOn } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
// import { DeliveryTime} from "../component/DeliveryTime"
import { DeliveryTime} from "../component/DeliveryTime"
import "../css/DeliveryTime.css"
import AddressCards from "../component/AddressCards";
import { useNavigate } from "react-router";





export const Accordion = () => {



    // components/PaymentOption.jsx
        const [selected, setSelected] = useState("");

        const PaymentOption = ({ value, selected, onSelect, label, description, children }) => {
        return (
            <div className={`payment-option ${selected === value ? "active" : ""}`}>
            <label className="payment-label">
                <input
                type="radio"
                name="payment-method"
                value={value}
                checked={selected === value}
                onChange={() => onSelect(value)}
                />
                <div>
                <strong>{label}</strong>
                <p>{description}</p>
                </div>
            </label>
            {selected === value && children}
            </div>
        );
        };


        //
        const navigate = useNavigate();
        const handleAddress = () => {
            navigate("/address")
        }





    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
    
            <div className="delivery-information" style={{ maxWidth: "100%" }}>
                    <>

                        {/* First Accordion Item */}
                        <div className="accordion-item">
                            <div className="accordion-header" onClick={() => handleToggle(0)}>

                                <div className="address-section">
                                    <CiLocationOn style={{ fontSize: "1.8rem", color:"#757575" }}/>
                                    <h3>Add Delivery Address</h3>
                                </div>

                                <div className="address-btn">
                                    <button onClick={handleAddress}>Add a new address</button>
                                </div>
                                
                            </div>

                            <div className={`accordion-content ${openIndex === 0 ? 'open' : ''}`}>
                                <AddressCards />
                            </div>

                        </div>

                        {/* Second Accordion Item */}
                        <div className="accordion-item">
                            <div className="accordion-header" onClick={() => handleToggle(1)}>
                                <div className="address-section">
                                    <GoClock style={{ fontSize: "1.7rem", color:"#757575" }}/>
                                    <h3>Add delivery time</h3>
                                </div>
                            </div>

                            <div className={`accordion-content ${openIndex === 1 ? 'open' : ''}`}>
                                <DeliveryTime />
                            </div>

                        </div>



                        {/* Third Accordion Item */}
                        <div className="accordion-item">
                            <div className="accordion-header" onClick={() => handleToggle(2)}>
                                <div className="address-section">
                                    <FiShoppingBag style={{ fontSize: "1.7rem", color:"#757575"}}/>
                                    <h3>Add delivery instruction</h3>
                                </div>
                            </div>

                            <div className={`accordion-content ${openIndex === 2 ? 'open' : ''}`}>
                                <div className="delivery-instruction">
                                    <p>Delivery instructions</p>
                                    <textarea name="" id="textarea" placeholder="Write delivery instruction"></textarea>
                                    <span>Add instructions for how you want your order shopped and/or delivered</span>
                                </div>
                            </div>

                        </div>



                        {/* Four Accordion Item */}
                        <div className="accordion-item">
                            <div className="accordion-header" onClick={() => handleToggle(3)}>
                                <div className="address-section">
                                    <CiCreditCard1 style={{ fontSize: "1.7rem", color:"#757575" }}/>
                                    <h3>Add Payment Method</h3>
                                </div>
                            </div>

                            <div className={`accordion-content ${openIndex === 3 ? 'open' : ''}`}>

                                        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>

                                        <PaymentOption
                                            value="paypal"
                                            selected={selected}
                                            onSelect={setSelected}
                                            label="Payment with Paypal"
                                            description="You will be redirected to PayPal website to complete your purchase securely."
                                        />

                                        <PaymentOption
                                            value="card"
                                            selected={selected}
                                            onSelect={setSelected}
                                            label="Credit / Debit Card"
                                            description="Safe money transfer using your bank account. We support Mastercard, Visa, Discover and Stripe."
                                        >
                                            <div className="card-fields">
                                            <input type="text" placeholder="Card Number" />
                                            <div className="card-grid">
                                                <div><input type="text" placeholder="Name on card" /></div>
                                                <div><input type="date" placeholder="Expiry date" /></div>
                                                <div><input type="text" placeholder="CVV code" /></div>
                                            </div>
                                            </div>
                                        </PaymentOption>

                                        <PaymentOption
                                            value="payoneer"
                                            selected={selected}
                                            onSelect={setSelected}
                                            label="Pay with Payoneer"
                                            description="You will be redirected to Payoneer website to complete your purchase securely."
                                        />

                                        <PaymentOption
                                            value="cod"
                                            selected={selected}
                                            onSelect={setSelected}
                                            label="Cash on Delivery"
                                            description="Pay with cash when your order is delivered."
                                        />

                                    </div>


                                </div>
                            </div>

                    </>
                    
            </div>
    
    </>
  );
};
