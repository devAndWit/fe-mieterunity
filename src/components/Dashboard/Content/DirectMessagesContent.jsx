import React, { useState, useEffect } from 'react';

// Beispiel: Hier könnte eine API-Aufruf zum Abrufen von Direktnachrichten erfolgen
function DirectMessagesContent() {
  const [directMessages, setDirectMessages] = useState([]);

  useEffect(() => {
    // Beispiel für das Abrufen von Direktnachrichten-Daten von einer API
    const fetchDirectMessages = async () => {
      try {
        const response = await fetch('http://localhost:8000/direct-messages'); // Beispiel-URL, hier solltest du deine API-URL verwenden
        const data = await response.json();
        setDirectMessages(data); // Angenommen, die API gibt ein Array von Direktnachrichten zurück
      } catch (error) {
        console.error('Fehler beim Abrufen der Direktnachrichten:', error);
      }
    };

    fetchDirectMessages();
  }, []);

  return (
    <div className="direct-messages-content">
      <h2>Direct Messages</h2>
      {directMessages.length === 0 ? (
        <p>Es gibt derzeit keine Direktnachrichten.</p>
      ) : (
        <ul>
          {directMessages.map((message) => (
            <li key={message.id}>
              <h3>{message.sender}</h3>
              <p>{message.content}</p>
              <p><small>Empfangen am: {new Date(message.timestamp).toLocaleString()}</small></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DirectMessagesContent; // Standard-Export
