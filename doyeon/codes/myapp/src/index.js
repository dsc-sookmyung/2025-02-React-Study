import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CommentList from './chapter_05/CommentList';

const container = document.getElementById('root');
const root = createRoot(container); // ✅ render가 아니라 createRoot

root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

