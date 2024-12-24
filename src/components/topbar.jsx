import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineHome, HiCode } from "react-icons/hi";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { LuPhone, LuLogOut } from "react-icons/lu";
import './topbar.css';
import users from '../data/usersData';

const Topbar = ({ selectedUser, setSelectedUser }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return ( 
    <div className="topbar">
      <div className="pinned">
        <Link to="/" className="logo_name">
          <img src="/logo.svg" alt="CodeAnt logo" />
          <div>CodeAnt AI</div>
        </Link>

        <div className="dropdown" onClick={toggleDropdown}>
          <div className="hamburger">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className={`extended ${isDropdownOpen ? 'open' : ''}`}>

        <div className="user-dropdown">
          <select
            id="user-select"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            {users.map((user, index) => (
              <option key={index} value={index}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="tabs">
          <NavLink to="/repositories">
            <HiOutlineHome className="icon" /> Repositories
          </NavLink>
          <NavLink to="/ai-code-review">
            <HiCode className="icon" /> AI Code Review
          </NavLink>
          <NavLink to="/cloud-security">
            <IoIosCloudOutline className="icon" /> Cloud Security
          </NavLink>
          <NavLink to="/how-to-use">
            <LuBookText className="icon" /> How to Use
          </NavLink>
          <NavLink to="/settings">
            <IoSettingsOutline className="icon" /> Settings
          </NavLink>
          <NavLink to="/support">
            <LuPhone className="icon" /> Support
          </NavLink>
          <NavLink to="/signin">
            <LuLogOut className="icon" /> Log Out
          </NavLink>
        </div>
      </div>
    </div>
  );
}
 
export default Topbar;
