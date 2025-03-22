import "./Checkout.css";
import '../../components/Navbar/Navbar.css'
import Button from "../../components/Button/Button";
export default function Checkout() {
    
    return (
    <div className="bg-ch">
    <div className="checkout glass-card">
      <h1>Checkout</h1>
      <div className="form-checkout">
        <h4>Shipping Address</h4>
        <div className="shipping-address">
          <input type="text" placeholder="Shipping address"/>
          <Button name="Change" width="meduim" />
        </div>
        <h4>Order Data</h4>
        <div className="order-data">
          <input type="text" placeholder="First name"/>
          <input type="text" placeholder="Last name"/>
          <input type="text" placeholder="Phone number"/>
          <input type="text" placeholder="Email address"/>
        </div>
        <h4>Message</h4>
        <textarea placeholder="Message" className="textarea-ch" name="" id=""></textarea>
        <h4>Payment Radio</h4>
        <div className="payment-method">
          <div className="method-radio">
            <input type="radio" />
            <lable>Cash on Deliviery</lable>
          </div>
          <div className="method-radio">
            <input type="radio" />
            <lable>Credit Card</lable>
          </div>
          <div className="method-radio">
            <input type="radio" />
            <lable>BCA virtual Account</lable>
          </div>
          <div className="method-radio">
            <input type="radio" />
            <lable>Transfer Bank</lable>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
