import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="flex-1">
            <div className="flex items-center gap-2">
                <NavLink to="/" className="flex items-center gap-2 text-3xl font-extrabold text-primary tracking-tight">
                    <img src="/public/logo.png" alt="Logo" className="w-8 h-8 shadow-lg transition-transform duration-300 hover:scale-110 rounded" />
                    Ahmed Yousri
                </NavLink>
            </div>
        </div>
        <div className="hidden md:flex gap-4">
            <NavLink to="/" 
            className={
                ({isActive}) =>
                    isActive? "btn btn-sm btn-ghost bg-primary text-white" : "btn btn-sm btn-ghost"
              }
              >
                Home
            </NavLink>
            <NavLink to="/About"               className={
                ({isActive}) =>
                    isActive? "btn btn-sm btn-ghost bg-primary text-white" : "btn btn-sm btn-ghost"
              }
              >
                About
            </NavLink>
            <NavLink to="/Contacts"               className={
                ({isActive}) =>
                    isActive? "btn btn-sm btn-ghost bg-primary text-white" : "btn btn-sm btn-ghost"
              }
              >
                Contacts
            </NavLink>
            <NavLink to="/Projects"               className={
                ({isActive}) =>
                    isActive? "btn btn-sm btn-ghost bg-primary text-white" : "btn btn-sm btn-ghost"
              }
              >
                Projects
            </NavLink>
        </div>
        <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </label>
            <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <NavLink to="/"  className={({ isActive }) =>
                        isActive ? "text-primary font-semibold" : ""
                        }>
                    Home
                    </NavLink>
                </li>
                <li>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                    }>
                    About</NavLink>
                </li>
                <li>
                <NavLink to="/Contacts" className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                }
                >Contacts
                </NavLink>
                </li>
                <li>
                <NavLink to="/Projects" className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                }
                    >Projects
                </NavLink>
                </li>

            </ul>

        </div>
    </div>
    
  )
}

export default Navbar
