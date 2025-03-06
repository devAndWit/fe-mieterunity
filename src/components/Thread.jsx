import React, { useState, useEffect, useCallback } from 'react'; 
import axios from 'axios';
import './Thread.css';

function Thread({ threadId, fromUserId, toUserId }) {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]); 
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark Mode Zustand

  // useEffect für das Laden der Nachrichten
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/messages/threads/${threadId}`);
        setMessages(response.data.messages); 
      } catch (error) {
        setError('Fehler beim Laden der Nachrichten.');
        console.error('Fehler beim Laden der Nachrichten:', error);
      }
    };

    if (threadId) {
      loadMessages();
    }
  }, [threadId]);

  // Funktion zum Senden einer neuen Nachricht
  const handleSendMessage = useCallback(async () => {
    if (!newMessage.trim()) return;

    setIsSending(true); 

    try {
      const response = await axios.post('http://localhost:8000/api/messages/send', {
        message: newMessage,
        fromUserId,
        toUserId,
        reactions: [{ userRefId: fromUserId, reactionRefId: 'thumbs_up' }],
      });

      setMessages((prevMessages) => [...prevMessages, response.data.data]);

      setNewMessage('');
    } catch (error) {
      setError('Fehler beim Senden der Nachricht.');
      console.error('Fehler beim Senden der Nachricht:', error);
    }

    setIsSending(false);
  }, [newMessage, fromUserId, toUserId]);

  // Dunkelmodus umschalten
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`thread-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="sidebar">
        <h3>Kanäle</h3>
        <ul>
          <li>#general</li>
          <li>#random</li>
          <li>#development</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <button className="toggle-dark-mode" onClick={toggleDarkMode}>
            {isDarkMode ? 'Lichtmodus' : 'Dunkelmodus'}
          </button>
          <h2>Thread: {threadId}</h2>
        </div>

        <div className="message-list">
          {error && <p className="error-message">{error}</p>}
          {messages.length === 0 ? (
            <p>Keine Nachrichten im Thread</p>
          ) : (
            messages.map((msg) => (
              <div key={msg._id} className="message">
                <div className="message-header">
                  <strong>{msg.fromUserId}</strong>
                  <span className="timestamp">{new Date(msg.createdAt).toLocaleString()}</span>
                </div>
                <p>{msg.message}</p>
                <div className="reactions">
                  {msg.reactions.map((reaction) => (
                    <span key={reaction._id} className="reaction">
                      {reaction.reactionId === 'thumbs_up' && <span>👍</span>}
                      {reaction.reactionId === 'thumbs_down' && <span>👎</span>}
                      {reaction.reactionId === 'rocket' && <span>🚀</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Nachricht eingeben..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage} disabled={isSending}>
            {isSending ? 'Senden...' : 'Senden'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thread;
