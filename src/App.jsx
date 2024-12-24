import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar.jsx';
import Topbar from './components/topbar.jsx';
import SignInPage from './pages/signin.jsx';
import RepositoriesPage from './pages/repositories.jsx';

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

function AppLayout() {
  const location = useLocation();
  const isSignInPage = location.pathname == "/signin";
  const [selectedUser, setSelectedUser] = useState(0);
  return (
    <div className="app">
      {!isSignInPage && 
        <div>
          <Topbar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
          <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div> }
      <div className="content">
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/repositories" element={<RepositoriesPage selectedUser={selectedUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
