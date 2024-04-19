import { useState } from "react";
import Logo from "@/assets/Anywhere-Transparent.png";
import { FaUser } from "react-icons/fa";
function NavbarByMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserProfileOptions, setShowUserProfileOptions] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleProfileMenu = () => {
    setShowUserProfileOptions(!showUserProfileOptions);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-black max-h-20">
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3"
          >
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <button
            type="button"
            className="inline-flex md:hidden items-center p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            onClick={toggleMenu}
          >
            <svg className="w-5 h-5" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:flex lg:items-center lg:justify-between w-full ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className=" flex flex-col lg:flex-row items-center">
            <input
              type="text"
              className="rounded-md text-center h-10 mx-4 w-[90%] lg:w-80"
              placeholder="enter Something.."
            />

            <div className="flex items-center space-x-3">
              <button
                onClick={toggleProfileMenu}
                type="button"
                className="relative flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <FaUser className="w-8 h-8 bg-white p-1 rounded-full" />
              </button>
              {showUserProfileOptions !== false ? (
                <div className="z-50 absolute -translate-x-[74%] translate-y-[66%] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarByMe;
