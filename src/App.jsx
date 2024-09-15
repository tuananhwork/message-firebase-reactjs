import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';

const App = () => {
  const logged = true;

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
      </div>
    </>
  );
};

export default App;
