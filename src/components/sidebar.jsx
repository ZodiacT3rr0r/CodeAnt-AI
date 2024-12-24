import { Link, NavLink } from 'react-router-dom';
import { HiOutlineHome, HiCode } from "react-icons/hi";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { LuPhone, LuLogOut } from "react-icons/lu";
import './sidebar.css';
import users from '../data/usersData';

function Sidebar({ selectedUser, setSelectedUser }) {

  return (
    <div className="sidebar">
      <div className="upper">
        <header>
          <Link to="/" className="logo_name">
            <img src="/logo.svg" alt="CodeAnt logo" />
            <div>CodeAnt AI</div>
          </Link>
          
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
        </header>

        <div className="navigation">
          <ul>
            <li>
              <NavLink
                to="/repositories"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <HiOutlineHome className="icon" /> Repositories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ai-code-review"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <HiCode className="icon" /> AI Code Review
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cloud-security"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <IoIosCloudOutline style={{ transform: 'rotateY(180deg)' }} className="icon" /> Cloud Security
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-to-use"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <LuBookText className="icon" /> How to Use
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <IoSettingsOutline className="icon" /> Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <footer>
        <Link to="/support" className="support-button">
          <LuPhone />
          Support
        </Link>
        <Link to="/signin" /*onclick logout func*/ className="logout-button">
         <LuLogOut />
          Log Out
        </Link>
      </footer>
    </div>
  );
}

export default Sidebar;
