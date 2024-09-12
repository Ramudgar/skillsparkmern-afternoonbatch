import { Link } from 'react-router-dom';
function NavbarComponent() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-bold text-gray-600 text-xl">HealMe</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Shop
              </Link>
              <Link
                to="/product"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Product
              </Link>

              <Link
                to="/category"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Category
              </Link>
              <Link
                to="/addproduct"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Add Product
              </Link>
            </div>
          </div>
          <div>
            <form>
              <input
                type="text"
                className="py-2 px-4 rounded-md focus:outline-none border-2 border-green-200 mx-2 focus:ring focus:ring-green-500"
                placeholder="Search"
              />
              <button
                className="rounded-lg bg-green-600 text-white px-4 py-2"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <button className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300">
              Log Out
            </button>

            <Link
              to="/login"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <ul>
          <li>
            <Link
              to="/"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </Link>
          </li>

          <>
            <li>
              <Link
                to="/shop"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Product
              </Link>
            </li>
          </>

          <li>
            <Link
              to="/category"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Category
            </Link>
          </li>
          <li>
            <Link
              to="/addproduct"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Add Product
            </Link>
          </li>

          <li>
            <button className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
              Log Out
            </button>
          </li>

          <li>
            <Link
              to="/login"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponent;
