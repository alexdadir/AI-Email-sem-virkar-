import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ComposeEmail: React.FC = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email data to your backend
    console.log({ to, subject, body });
    // For now, we'll just navigate back to the inbox
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="compose-email">
      <h2>New message</h2>
      <input
        type="email"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ComposeEmail;