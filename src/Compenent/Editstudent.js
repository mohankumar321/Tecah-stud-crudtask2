import React, { useEffect, useState } from "react";
import BaseApp from "../Core/base";
import { useHistory, useParams } from "react-router-dom";

import "../Style/Editstudent.css";


export default function EditStudent({Student,setStudent}){
    const history=useHistory();
    const [Idx,setIdx]=useState("");
    const [Name,setName]=useState("");
    const [Reg,setReg]=useState("");
    const [Sex,setSex]=useState("");
    const [Course,setCourse]=useState("");
    const [Section,setSection]=useState("");
    const [BusNo,setBusNo]=useState("");
    const[Location, setLocation]=useState("");

    const {Id}=useParams();
    const selectedStudent=Student.find((prsn,index)=>prsn.Id===Id);
    useEffect(() => {
        setIdx(selectedStudent.Id)
        setName(selectedStudent.Name)
        setReg(selectedStudent.Reg)
        setSex(selectedStudent.Sex)
        setCourse(selectedStudent.Course)
        setSection(selectedStudent.Section)
        setBusNo(selectedStudent.BusNo)
        setLocation(selectedStudent.Location)
    }, [selectedStudent]);

const UpdateStudent=()=>{
    const editindex=Student.findIndex(prsn=>prsn.Id===Id)
const EditedData={
    Id,
    Name,
    Reg,
    Sex,
    Course,
    Section,
    BusNo,
    Location
}
Student[editindex]=EditedData;
setStudent([...Student]);
history.push("/dashboard/studentdetail")
}
    return(
        <BaseApp 
        title="EDIT & UPDATE">
            <div>
                <div className="Edit-Student">
                <input
                 placeholder="Id" 
                 value={Idx} 
                 onChange={(event=>setIdx(event.target.value))}
                  />

                <input
                 placeholder="Name"
                 value={Name}
                 onChange={(event=>setName(event.target.value))}
                 />

                 <input
                 placeholder="Course"
                 value={Course}
                 onChange={(event=>setCourse(event.target.value))}
                 />

                <input
                 placeholder="sex"
                 value={Sex}
                 onChange={(event=>setSex(event.target.value))}
                 />

                <input 
                placeholder="Section"
                value={Section}
                onChange={(event=>setSection(event.target.value))}
                />

                <input
                 placeholder="BusNumber"
                 value={BusNo}
                 onChange={(event=>setBusNo(event.target.value))}
                 />

                <input
                 placeholder="Location"
                 value={Location}
                 onChange={(event=>setLocation(event.target.value))}
                 
                 /> 
                 <button className="button-78" onClick={UpdateStudent}>UPDATE</button>

                </div>
                

            </div>
        </BaseApp>
    )
}