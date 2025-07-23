import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

function NavigationWrap() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-10" alt="Quiz App Logo" />
          <span className="text-2xl font-semibold text-gray-800">Quiz App</span>
        </NavLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 md:border-0 rounded-lg">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold block py-2 px-3'
                    : 'text-gray-700 hover:text-blue-600 block py-2 px-3'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold block py-2 px-3'
                    : 'text-gray-700 hover:text-blue-600 block py-2 px-3'
                }
              >
                Quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold block py-2 px-3'
                    : 'text-gray-700 hover:text-blue-600 block py-2 px-3'
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationWrap;
