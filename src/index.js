import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Use createRoot from react-dom/client

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
