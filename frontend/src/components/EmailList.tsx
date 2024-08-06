// src/components/EmailList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { dummyEmails } from '../dummyData';

const EmailList: React.FC = () => {
  return (
    <div className="email-list">
      <h1>Inbox</h1>
      <Link to="/compose" className="compose-button">New message</Link>
      <div className="email-items">
        {dummyEmails.map((email) => (
          <Link to={`/email/${email.id}`} key={email.id} className="email-item">
            <div className="email-sender">{email.from}</div>
            <div className="email-subject">{email.subject}</div>
            <div className="email-timestamp">{new Date(email.timestamp).toLocaleString()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EmailList;