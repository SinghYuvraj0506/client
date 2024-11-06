import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../lib/hooks";

const Navbar = () => {
  const { cart } = useAppSelector(state => state.cart);
  const navigate = useNavigate();

  return (
    <header className="bg-primaryBlack text-white p-4 sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Home Navigation */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          Amazon Mock
        </div>

        {/* Cart and Guest Info */}
        <div className="flex items-center space-x-6">
          {/* Cart Link */}
          <Link to="/cart" className="flex items-center space-x-1">
            <span>Cart</span>
            {cart?.length ? <span>({cart.length})</span> : ''}
          </Link>

          {/* Guest Button */}
          <div>
            <button className="text-sm px-4 py-2 bg-primaryYellow rounded-md">
              Guest
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
