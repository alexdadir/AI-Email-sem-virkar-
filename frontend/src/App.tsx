import React, { useState } from 'react';
import EmailOverview from './components/emailOverview';
import MessageSidebar from './components/messageSidebar';
import NewMessage from './components/newMessage';
import './App.css';

const App: React.FC = () => {
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);
  const [showNewMessage, setShowNewMessage] = useState(false);

  return (
    <div className="app">
      <EmailOverview 
        onSelectEmail={setSelectedEmailId} 
        selectedEmailId={selectedEmailId}
        onNewMessage={() => setShowNewMessage(true)}
      />
      {showNewMessage ? (
        <NewMessage onClose={() => setShowNewMessage(false)} />
      ) : (
        <MessageSidebar selectedEmailId={selectedEmailId} />
      )}
    </div>
  );
};

export default App;