import React, { useEffect, useState } from "react";
import BaseApp from "../Core/base";
import { useHistory, useParams } from "react-router-dom";

import "../Style/Editteacher.css";

export default function EditTeacher({Teacher,setTeacher}){
    const history=useHistory();
    const [Idx,setIdx]=useState("");
    const [Name,setName]=useState("");
    const [Course,setCourse]=useState("");
    const [Sex,setSex]=useState("");
    const [Email,setEmail]=useState("");
    const [Experience,setExperience]=useState("");
    const [Salary,setSalry]=useState("");
    const[Location, setLocation]=useState("");

    const {Id}=useParams();
    const selectedTeachers=Teacher.find((prsn,index)=>prsn.Id===Id);
    useEffect(() => {
        setIdx(selectedTeachers.Id)
        setName(selectedTeachers.Name)
        setCourse(selectedTeachers.Course)
        setSex(selectedTeachers.Sex)
        setEmail(selectedTeachers.Email)
        setExperience(selectedTeachers.Experience)
        setSalry(selectedTeachers.Salary)
        setLocation(selectedTeachers.Location)
    }, [selectedTeachers]);

const UpdateTeacher=()=>{
    const editteacherindex=Teacher.findIndex(prsn=>prsn.Id===Id)
const EditedteachData={
    Id,
    Name,
    Course,
    Sex,
    Email,
    Experience,
    Salary,
    Location
}
Teacher[editteacherindex]=EditedteachData;
setTeacher([...Teacher]);
history.push("/dashboard/teacherdetail")
}
return(
    <BaseApp 
    title="EDIT-TEACHER">
      <div>
                <div className="Edit-teacher">
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
                placeholder="Mail"
                value={Email}
                onChange={(event=>setEmail(event.target.value))}
                />

                <input
                 placeholder="Experience"
                 value={Experience}
                 onChange={(event=>setExperience(event.target.value))}
                 />

                <input
                 placeholder="Location"
                 value={Location}
                 onChange={(event=>setLocation(event.target.value))}
                 
                 /> 
                 <button className="button-77 e-btn" onClick={UpdateTeacher}>UPDATE</button>

                </div>
                

            </div>
    </BaseApp>
)
}