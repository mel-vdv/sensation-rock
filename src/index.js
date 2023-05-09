import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firebase, { FbContext } from './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FbContext.Provider value={new Firebase()}>
        <App />
    </FbContext.Provider>
    
);
reportWebVitals();
