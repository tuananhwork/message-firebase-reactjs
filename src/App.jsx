import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/account/login/Login';
import Signup from './components/account/signup/Signup';

const App = () => {
  const [logged, setLogged] = useState(true);

  return (
    <>
      {logged ? (
        <div className="container">
          <Sidebar />
          <Chat />
          <Detail />
        </div>
      ) : (
        <Router>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
