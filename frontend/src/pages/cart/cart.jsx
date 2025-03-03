import { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/storeContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
                <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount() === 0 ? 0: 2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>${getTotalCartAmount() === 0 ? 0:getTotalCartAmount() + 2}</b>
                </div>
                
            </div>
            <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className="card-promocode">
            <p>If You have a Promo Code,Enter it here</p>
            <div className="cart-promocode-input">
                <input type="text" placeholder="Promocode" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}
