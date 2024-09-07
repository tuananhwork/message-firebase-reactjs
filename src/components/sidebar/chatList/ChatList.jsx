import React, { useState } from 'react';
import './chatList.css';

const ChatList = () => {
  const [addMode, setAddMode] = useState(true);

  return (
    <div>
      <div className="searchbox">
        <div className="searchInput">
          <label htmlFor="search">
            <img src="search.png" alt="" />
          </label>
          <input type="text" id="search" placeholder="Enter name" />
        </div>
        <img src={addMode ? 'plus.png' : 'minus.png'} alt="" onClick={() => setAddMode((prev) => !prev)} />
      </div>

      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Tuan Anh</span>
          <p>What's up Bro?</p>
        </div>
      </div>

      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Tuan Anh</span>
          <p>What's up Bro?</p>
        </div>
      </div>

      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Tuan Anh</span>
          <p>What's up Bro?</p>
        </div>
      </div>

      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Tuan Anh</span>
          <p>What's up Bro?</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
