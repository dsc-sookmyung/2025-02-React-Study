import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import TodoList from './Assignments/week3/TodoList';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);


reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

