import React from "react";

const students= [
    {id:1, name:"Inje",},
    {id:2, name:"Steve",},
    {id:3, name:"Ben",},
    {id:4, name:"jeff",},
];

function AttendanceBook(){
    return(
        <ul>
            {students.map((student, index)=>{
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}
export default AttendanceBook;