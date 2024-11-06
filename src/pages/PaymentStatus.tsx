import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Define types for an order item
interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

const PaymentStatus: React.FC = () => {
  const location = useLocation();
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [items, setItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    // Parse query parameters
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("orderStatus");
    const itemsParam = queryParams.get("items");

    setOrderStatus(status);
    
    // Parse and set items if available
    if (itemsParam) {
      try {
        const decodedItems: OrderItem[] = JSON.parse(decodeURIComponent(itemsParam));
        setItems(decodedItems);
      } catch (error) {
        console.error("Error parsing items:", error);
      }
    }
  }, [location.search]);

  return (
    <div className="p-6 min-h-[70vh]">
      <h1 className="text-2xl font-bold mb-4">
        Payment {orderStatus === "success" ? "Success" : "Failed"}
      </h1>

      {orderStatus === "success" ? (
        <p className="text-green-600 mb-4">Thank you for your purchase! Here is your order summary:</p>
      ) : (
        <p className="text-red-600 mb-4">The payment was unsuccessful. Please try again.</p>
      )}

      {items.length > 0 ? (
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Order Items</h2>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span className="text-primaryYellow">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-right mt-4">
            Total: $
            {items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </p>
        </div>
      ) : (
        <p>No items found in your order.</p>
      )}
    </div>
  );
};

export default PaymentStatus;
