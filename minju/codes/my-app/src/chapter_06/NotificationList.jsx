import React, { useState, useEffect } from "react";

import Notification from "./Notification";

const reservedNotifications = [
  { id: 1, message: "안녕하세요, 오늘 일정을 알려드립니다." },
  { id: 2, message: "점심식사 시간입니다." },
  { id: 3, message: "이제 곧 미팅이 시작됩니다." },
];

export default function NotificationList({}) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    let timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        setNotifications((prev) => [...prev, reservedNotifications[index]]);
      } else {
        setNotifications([]);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [notifications]);
  return (
    <div>
      {notifications.map((notification, i) => (
        <Notification
          key={i}
          id={notification.id}
          message={notification.message}
        />
      ))}
    </div>
  );
}
