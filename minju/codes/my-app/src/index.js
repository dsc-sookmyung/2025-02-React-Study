import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
import Count from "./chapter_07/Count";
import Accomodate from "./chapter_07/Accomodate";
import ConfirmButton from "./chapter_08/ConfirmButton";
import Calculator from "./chapter_12/Calculator";
import ProfileCard from "./chapter_13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";

import TodoList from "./assignment/week3/TodoList";
import DarkOrLightMode from "./assignment/week5/DarkOrLightMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DarkOrLightMode />);
