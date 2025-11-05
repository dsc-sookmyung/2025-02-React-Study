import React from "react";

const students = [
    {
        name: "Inje",
    },
    {
        name: "Steve",
    },
    {
        name: "Bill",
    },
    {
        name: "Jeff",
    },
];

/*
function AttendanceBook() {
    return (
        <ul>
        {students.map((student) => (
            <li key={student.name}>{student.name}</li>
        ))}
        </ul>
    );
}
*/

/*
//key를 포맷팅 된 문자열로 변경
function AttendanceBook() {
    return (
        <ul>
        {students.map((student) => (
            <li key={'studdent-id-${student.id}'}>{student.name}</li>
        ))}
        </ul>
    );
}
*/

//key를 index로 변경
function AttendanceBook() {
    return (
        <ul>
        {students.map((student, index) => (
            <li key={index}>{student.name}</li>
        ))}
        </ul>
    );
}

export default AttendanceBook;