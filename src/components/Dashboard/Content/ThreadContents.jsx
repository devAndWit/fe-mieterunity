import { useState, useEffect } from 'react';

// Beispiel: Hier könnte eine API-Aufruf zum Abrufen von Threads erfolgen
function ThreadContent() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // Beispiel für das Abrufen von Thread-Daten von einer API
    const fetchThreads = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/threads'); // Beispiel-URL, hier solltest du deine API-URL verwenden
        const data = await response.json();
        setThreads(data); // Angenommen, die API gibt ein Array von Threads zurück
      } catch (error) {
        console.error('Fehler beim Abrufen der Threads:', error);
      }
    };

    fetchThreads();
  }, []);

  return (
    <div>
      <h2>Threads</h2>
      {threads.length === 0 ? (
        <p>Es gibt derzeit keine Threads.</p>
      ) : (
        <ul>
          {threads.map((thread) => (
            <li key={thread.id}>
              <h3>{thread.title}</h3>
              <p>{thread.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ThreadContent; // Standard-Export
