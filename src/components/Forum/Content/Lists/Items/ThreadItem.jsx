import { useState, useEffect } from "react";

// Beispiel: Hier könnte eine API-Aufruf zum Abrufen von Threads erfolgen
export function ThreadItem({ key, message }) {
  return (
    <>
      <div>
        {key} {message}
      </div>
    </>
  );
}

export default ThreadItem; // Standard-Export
