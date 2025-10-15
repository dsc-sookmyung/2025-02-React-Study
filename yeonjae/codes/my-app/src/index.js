import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* week 2 */
import Library from './chapter03/Library';
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
// }, 1000);

reportWebVitals();
