import { useContext, useEffect, useState } from "react";
import "./myOrders.css";
import axios from "axios";
import { StoreContext } from "../../context/storeContext";

export default function MyOrders() {
  const { token, url } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]); //whenever the token will be updated the function will be executed

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div className="my-orders-order" key={index}>
              <img src="/Images/parcel_icon.png" alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    //to acess the last item of the user order
                    return item.name + " x " + item.quantity; //if we are on the last item we dont have the comma
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              {/* &#x25cf; is for a bullet point */}
              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
