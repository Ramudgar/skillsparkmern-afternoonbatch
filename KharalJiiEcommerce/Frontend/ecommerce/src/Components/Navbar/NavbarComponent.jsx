
function NavbarComponent() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-bold text-gray-600 text-xl">HealMe</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
              >
                Home
              </a>

              <a
                href="/shop"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Shop
              </a>
              <a
                href="/product"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Product
              </a>

              <a
                href="/category"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Category
              </a>
              <a
                href="/addproduct"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Add Product
              </a>
            </div>
          </div>
          <div>
            <form>
              <input
                type="text"
                className="py-2 px-4 rounded-md focus:outline-none border-2 border-green-200  mx-2 focus:ring focus:ring-green-500"
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

            <a
              href="/login"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300"
            >
              Log In
            </a>
            <a
              href="/signup"
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >
              Sign Up
            </a>
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
            <a
              href="/"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </a>
          </li>

          <>
            <li>
              <a
                href="/shop"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/product"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Product
              </a>
            </li>
          </>

          <li>
            <a
              href="/category"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Category
            </a>
          </li>
          <li>
            <a
              href="/addproduct"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Add Product
            </a>
          </li>

          <li>
            <button className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
              Log Out
            </button>
          </li>

          <li>
            <a
              href="/login"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Log In
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponent;
