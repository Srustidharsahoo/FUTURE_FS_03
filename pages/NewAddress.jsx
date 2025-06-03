import "../css/NewAddress.css"
import { useNavigate } from "react-router";
import { Link } from "react-router";

export const NewAddress = () => {


    return (
        <>
        
            <div className="contact-section">

                <div className="contact-box">

                    <form action="">
                        <div className="contact-head">
                            <h2>Add Address</h2>
                            <p>Get in touch with us. We are always here to help you</p>
                        </div>

                        <div className="contact-name">
                            <label htmlFor="">
                                FullName <br />
                                <input type="text" placeholder="Enter your fullname"/>                               
                            </label>
                        </div>

                        <div className="contact-email">
                        <label htmlFor="">
                                Address <br />
                                <input type="text" placeholder="Bhubaneswar,odisha"/>
                            </label>
                        </div>

                        <div className="contact-email">
                        <label htmlFor="">
                                Landmark <br />
                                <input type="text" placeholder="Shiva Temple"/>
                            </label>
                        </div>

                        <div className="contact-email">
                        <label htmlFor="">
                                Mobile Number <br />
                                <input type="text" placeholder="1234567890"/>
                            </label>
                        </div>

                        <Link to="/cheakout" className="contact-btn"><button>Continue Shopping</button></Link>

                    </form>

                </div>

            </div>

        
        </>
    )
}