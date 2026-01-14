import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import TodoList from './Assignments/week3/TodoList';
import reportWebVitals from './reportWebVitals';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import Signup from './chapter_11/Signup';
import Calculator from './chapter_12/Calculator'
import ProfileCard from './chapter_13/ProfileCard';
import SignupForm from './Assignments/week4/SignupForm';
import DarkOrLight from './Assignments/week5/DarkOrLight';
import Blocks from './chapter_15/Blocks'

import App from './App';
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

