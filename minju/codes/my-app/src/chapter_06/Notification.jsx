import React, { useEffect } from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

export default function Notification({ id, message }) {
  useEffect(() => {
    console.log(`${id} componentDidMount() called.`);

    return () => {
      console.log(`${id} componentWillUnmount() called.`);
    };
  }, []); // empty dependency array → runs once when mounted, cleanup on unmount

  useEffect(() => {
    console.log(`${id} componentDidUpdate() called.`);
  }); // no dependency array → runs after every render

  return (
    <div style={styles.wrapper}>
      <span style={styles.messageText}>{message}</span>
    </div>
  );
}
