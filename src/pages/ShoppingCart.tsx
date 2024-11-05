import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { decreseQty, increseQty, removeItemFromCart } from '../app/features/cartSlice';

const ShoppingCart = () => {
  const {cart, totalPrice} = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item?.price * item?.quantity, 0).toFixed(2);
  };

  const increaseQuantity = (id:string) => {
    dispatch(increseQty({id}))
  };

  const decreaseQuantity = (id:string) => {
    dispatch(decreseQty({id}))
  };

  const removeItem = (id:string) => {
    dispatch(removeItemFromCart({id}))
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart?.map((item) => (
          <div key={item?.id} className="flex items-center border-b border-gray-300 pb-4">
            <img src={item?.image} alt={item?.title} className="w-24 h-24 rounded-lg shadow-md" />
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-semibold">{item?.title}</h2>
              <p className="text-gray-700">${item?.price.toFixed(2)}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  onClick={() => decreaseQuantity(item?.id)}
                  className="px-2 py-1 bg-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="font-semibold">{item?.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item?.id)}
                  className="px-2 py-1 bg-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeItem(item?.id)}
              className="text-red-500 hover:underline ml-auto"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-8 flex flex-col items-end">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-semibold">${calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Shipping</span>
            <span className="font-semibold">$5.00</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${(parseFloat(calculateTotal()) + 5).toFixed(2)}</span>
          </div>
          <button className="w-full mt-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
