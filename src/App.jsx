import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Chat />
      <Detail />
    </div>
  );
};

export default App;
