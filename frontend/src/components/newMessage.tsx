import React, { useState } from 'react';
import axios from 'axios';

interface NewMessageProps {
  onClose: () => void;
}

const NewMessage: React.FC<NewMessageProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    // In a real app, this would search for users
    // For now, we'll just simulate finding a user
    if (searchTerm) {
      setSelectedUser(searchTerm);
    }
  };

  const handleSend = async () => {
    if (selectedUser && message) {
      // In a real app, this would send the message to the backend
      console.log(`Sending message to ${selectedUser}: ${message}`);
      onClose();
    }
  };

  return (
    <div className="new-message">
      <div className="new-message-header">
        <h3>New Message</h3>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="new-message-body">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a user"
        />
        <button onClick={handleSearch}>Search</button>
        {selectedUser && (
          <>
            <p>To: {selectedUser}</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message"
            />
            <button onClick={handleSend}>Send</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NewMessage;