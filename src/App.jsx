import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';

const App = () => {
  const logged = false;

  return (
    <>
      <div className="container">
        {logged ? (
          <>
            <Sidebar />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}

        <Notification />
      </div>
    </>
  );
};

export default App;
