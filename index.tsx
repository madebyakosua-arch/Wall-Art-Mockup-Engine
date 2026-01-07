import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Debug log to confirm script execution
console.log("boot ok");

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Failed to mount React application:", error);
  rootElement.innerHTML = `<div style="padding: 20px; color: red;"><h2>Failed to mount application</h2><pre>${error instanceof Error ? error.message : String(error)}</pre></div>`;
}