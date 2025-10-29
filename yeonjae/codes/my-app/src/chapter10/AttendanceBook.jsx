import React from "react";

const students = [
    {
        id: 1,
        name: "Kim",
    },
    {
        id: 2,
        name: "Lee",
    },
    {
        id: 3,
        name: "Park",
    },
    {
        id: 4,
        name: "Choi",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
