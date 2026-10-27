import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

async function boot() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    await worker.start({ onUnhandledRequest: 'bypass' } as Parameters<typeof worker.start>[0]);
  }
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

boot();
