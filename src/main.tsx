import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ✅ Redirect from GitHub Pages 404.html
const redirect = window.location.search
  ? window.location.search.slice(1) // removes the "?" and keeps the path
  : undefined;

if (redirect && window.history.replaceState) {
  window.history.replaceState(null, '', redirect);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
