import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Email {
  id: string;
  from: string;
  body: string;
  timestamp: string;
}

interface MessageSidebarProps {
  selectedEmailId: string | null;
}

const MessageSidebar: React.FC<MessageSidebarProps> = ({ selectedEmailId }) => {
  const [email, setEmail] = useState<Email | null>(null);
  const [reply, setReply] = useState('');

  useEffect(() => {
    const fetchEmail = async () => {
      if (selectedEmailId) {
        const response = await axios.get(`http://localhost:3000/emails/${selectedEmailId}`);
        setEmail(response.data);
      }
    };
    fetchEmail();
  }, [selectedEmailId]);

  const handleReply = async () => {
    if (email) {
      await axios.post(`http://localhost:3000/emails/${email.id}/reply`, {
        from: 'user@example.com', // This should be the logged-in user's email
        body: reply
      });
      setReply('');
      // Refresh the email thread
      const response = await axios.get(`http://localhost:3000/emails/${selectedEmailId}`);
      setEmail(response.data);
    }
  };

  if (!email) {
    return <div className="message-sidebar">Select an email to view</div>;
  }

  return (
    <div className="message-sidebar">
      <div className="chat-header">
        <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${email.from}`} alt="Avatar" className="avatar" />
        <h3>{email.from}</h3>
      </div>
      <div className="chat-body">
        <div className="message received">
          <div className="message-content">
            <p>{email.body}</p>
          </div>
          <span className="message-time">{new Date(email.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
      </div>
      <div className="reply-section">
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Write a message..."
        />
        <button onClick={handleReply}>Send</button>
      </div>
    </div>
  );
};

export default MessageSidebar;