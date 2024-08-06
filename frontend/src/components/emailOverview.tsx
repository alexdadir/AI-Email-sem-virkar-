import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Email {
  id: string;
  from: string;
  subject: string;
  body: string;
  timestamp: string;
}

interface EmailOverviewProps {
  onSelectEmail: (id: string) => void;
  selectedEmailId: string | null;
  onNewMessage: () => void;
}

const EmailOverview: React.FC<EmailOverviewProps> = ({ onSelectEmail, selectedEmailId, onNewMessage }) => {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios.get('http://localhost:3000/emails');
      setEmails(response.data);
    };
    fetchEmails();
  }, []);

  return (
    <div className="email-overview">
      <div className="email-header">
        <h2>Messages</h2>
        <button className="new-message-btn" onClick={onNewMessage}>+</button>
      </div>
      <div className="email-list">
        {emails.map((email) => (
          <div 
            key={email.id} 
            className={`email-item ${email.id === selectedEmailId ? 'selected' : ''}`}
            onClick={() => onSelectEmail(email.id)}
          >
            <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${email.from}`} alt="Avatar" className="avatar" />
            <div className="email-content">
              <p className="email-from">{email.from}</p>
              <p className="email-subject">{email.subject}</p>
              <p className="email-preview">{email.body.substring(0, 30)}...</p>
            </div>
            <p className="email-timestamp">{new Date(email.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailOverview;