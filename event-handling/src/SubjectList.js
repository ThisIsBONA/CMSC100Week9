import { useState } from "react";

export function SubjectList(props){
    const subjectlist = props.list;
    const [subjects, setSubjects] = useState(subjectlist);

    function addSubject() {
        setSubjects((subjects) => {
            const nval = [...subjects, {code: "CMSC 22", desc: "OOP"}];
            return nval;
        })
    }

    return (
        <>
            <p>Show List:</p>
            <ol>{
                subjects.map((subject) => {
                    return <li>{subject.code} - {subject.desc}</li>
                })
            }                
            </ol>
            <button onClick={addSubject}>Add Subject</button>
            
        </>
    );
}