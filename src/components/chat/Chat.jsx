import React, { useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat">
      <div className="top">
        <div className="info">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <span>Tuan Anh</span>
            <p>Active</p>
          </div>
        </div>
        <div className="icons">
          <img src="phone.png" alt="" />
          <img src="video.png" alt="" />
          <img src="info.png" alt="" />
        </div>
      </div>

      <div className="center"></div>

      <div className="bottom">
        <div className="icons">
          <img src="img.png" alt="" />
          <img src="camera.png" alt="" />
          <img src="mic.png" alt="" />
        </div>
        <div className="messageBox">
          <input type="text" placeholder="Type a message..." />
          <img src="emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          <EmojiPicker className="emojiPopup" open={open} />
        </div>
        <button id="sendBtn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
