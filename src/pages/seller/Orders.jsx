import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { dummyOrders } from "../../assets/assets";

const Orders = () => {
  const { currency } = useAppContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    setOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll p-4">
      <h2 className="text-xl font-bold mb-6">Orders List</h2>

      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
          >
            {/* Products Column */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Products</h3>
                <div className="space-y-2">
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <img
                        className="w-10 h-10 object-cover rounded"
                        src={item.product.image || assets.box_icon}
                        alt={item.product.name}
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.product.name}
                          <span className="text-blue-600 ml-1">
                            x {item.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Info Column */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Customer</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p>
                    {order.address.street}, {order.address.city}
                  </p>
                  <p>
                    {order.address.state}, {order.address.zipcode},{" "}
                    {order.address.country}
                  </p>
                  <p>{order.address.phone}</p>
                </div>
              </div>

              {/* Payment Info Column */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">Payment</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="text-lg font-bold text-gray-900">
                    {currency}
                    {order.amount}
                  </p>
                  <p>Method: {order.paymentType}</p>
                  <p>
                    Date:{" "}
                    {order.createAt
                      ? new Date(order.createAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                  <p>
                    Status:{" "}
                    <span
                      className={
                        order.isPaid ? "text-green-600" : "text-yellow-600"
                      }
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
