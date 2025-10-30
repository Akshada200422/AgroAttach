import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { dummyOrders } from "../assets/assets";

function MyOrders() {
  const [myOrders, setMyOrders] = useState([]);
  const { currency } = useAppContext();

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="mt-16 pb-16 px-2">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {myOrders?.length > 0 ? (
        myOrders.map((order, oi) => (
          <div
            key={oi}
            className="border border-gray-300 rounded-lg mb-10 p-4 py-9 max-w-4xl mx-auto"
          >
            {/* Order Header */}
            <div className="flex justify-between flex-wrap items-center text-gray-500 font-mono mb-4">
              <span>OrderId: {order._id}</span>
              <span>Payment: {order.paymentType}</span>
              <span>
                Total Amount: {currency} {order.amount}
              </span>
            </div>

            {/* Items */}
            {order.items?.map((item, ii) => (
              <div
                key={ii}
                className={`flex items-center justify-between gap-4 p-4 rounded-lg bg-white ${
                  ii !== 0 ? "mt-4" : ""
                }`}
              >
                {/* Left: Product Image & Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image[0]}
                    alt={item.product.name}
                    className="w-16 h-20 object-contain bg-primary/10 rounded"
                  />
                  <div>
                    <h2 className="text-base font-semibold text-gray-800">
                      {item.product.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Category: {item.product.category}
                    </p>
                  </div>
                </div>

                {/* Middle: Quantity, Status, Date */}
                <div className="flex flex-col items-center text-sm text-primary text-center whitespace-nowrap">
                  <p>Quantity: {item.quantity || "1"}</p>
                  <p>Status: {order.status}</p>
                  <p>
                    Date:{" "}
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                  </p>
                </div>

                {/* Right: Amount */}
                <div className="text-primary font-semibold whitespace-nowrap text-right">
                  Amount: {currency}
                  {item.product.offerPrice * item.quantity}
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-lg text-center">No orders found.</p>
      )}
    </div>
  );
}

export default MyOrders;
