import users from '../data/usersData'
import "./repositories.css";
import { LuRefreshCw } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";

function RepositoriesPage({ selectedUser }) {
  if (!users[selectedUser]) {
    return <div className="repositories">Please select a user from the sidebar.</div>;
  }

  const calculateDaysAgo = (dateString) => {
    const lastUpdatedDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - lastUpdatedDate;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `Updated ${daysAgo} days ago`;
  };

  return (
    <div className="repositories">
      <div className="header">
        <div className="title_buttons">
          <div className="text">
            <div className="title">Repositories</div>
            <div className="count">{users[selectedUser].repositories.length} total repositories</div>
          </div>
          <div className="buttons">
            <button className="refresh-button">
              <LuRefreshCw />
              Refresh
            </button>
            <button className="add-button">
              <IoAddOutline />
              Add Repository
            </button>
          </div>
        </div>
        <div className="search-wrapper">
          <input className="search-bar" type="text" placeholder="Search Repositories" />
        </div>
      </div>

      <div className="repository-list">
        {users[selectedUser].repositories.map((repo, index) => (
          <div key={index} className={`repo-details-wrapper ${index == users[selectedUser].repositories.length-1 && "last-repo"} `}>
            <div className="repo-details">
              <div className="name">
                {repo.name}
                <div className="status">
                  {repo.status}
                </div>
              </div>
              <div className="details">
                <p className="lang">{repo.language}</p>
                <p className="size">{repo.size}</p>
                <p className="time">{calculateDaysAgo(repo.lastUpdated)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RepositoriesPage;
