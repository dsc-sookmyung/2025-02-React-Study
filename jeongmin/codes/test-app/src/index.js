import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import Notification from './chapter_06/Notification';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
);

reportWebVitals();