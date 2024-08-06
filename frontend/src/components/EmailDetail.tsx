import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface Email {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  timestamp: string;
}

const EmailDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // For now, we'll use a dummy email. In a real application, you'd fetch this from your API.
  const email: Email = {
    id: id || '1',
    from: 'john@example.com',
    to: 'jane@example.com',
    subject: 'Hello',
    body: 'This is a test email.',
    timestamp: new Date().toISOString()
  };

  return (
    <div className="email-detail">
      <Link to="/" className="back-button">Back to Inbox</Link>
      <h2>{email.subject}</h2>
      <p>From: {email.from}</p>
      <p>To: {email.to}</p>
      <p>Sent: {new Date(email.timestamp).toLocaleString()}</p>
      <div className="email-body">{email.body}</div>
    </div>
  );
};

export default EmailDetail;