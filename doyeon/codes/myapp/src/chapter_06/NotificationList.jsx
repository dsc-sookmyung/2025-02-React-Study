import React from "react";
import NotificationItem from "./Notification";  // 이름 충돌 방지

const reservedNotification = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
    ];

    let timer;

    class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        notifications: [],
        };
    }

    componentDidMount() {
        timer = setInterval(() => {
        this.setState((prevState) => {
            if (prevState.notifications.length < reservedNotification.length) {
            const nextNotification = reservedNotification[prevState.notifications.length];
            return {
                notifications: [...prevState.notifications, nextNotification],
            };
            } else {
            clearInterval(timer);
            return prevState;
            }
        });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(timer);
    }

    render() {
        return (
        <div>
            {this.state.notifications.map((notification, index) => (
            <NotificationItem 
                key={notification.id}
                id={notification.id}
                message={notification.message} />
            ))}
        </div>
        );
    }
    }

export default NotificationList;