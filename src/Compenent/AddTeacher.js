import React, { useState } from "react";
import BaseApp from "../Core/base";
import { useHistory } from "react-router-dom";

export default function AddTeacher({Teacher,setTeacher}){
    const history=useHistory();
    const [Id,setId]=useState("");
    const [Name,setName]=useState("");
    const [Course,setCourse]=useState("");
    const [Sex,setSex]=useState("");
    const [Email,setEmail]=useState("");
    const [Experience,setExperience]=useState("");
    const [Salary,setSalary]=useState("");
    const[Location, setLocation]=useState("");

    const AddNewTeacher=()=>{
        const NewTeacher={
            Id,
            Name,
            Course,
            Sex,
            Email,
            Experience,
            Salary,
            Location
        }

        setTeacher([...Teacher,NewTeacher])
        history.push("/dashboard/teacherdetail")

        setId("");
        setName("");
        setCourse("");
        setSex("");
        setEmail("");
        setExperience("");
        setSalary("");
        setLocation("")

    }
    return(
        <BaseApp
        title="ADD-TEACHER">
             <div className="Add-student">

<div className="Edit-Student " id="t-head">

<input
                 placeholder="EnterId" 
                 value={Id} 
                 onChange={(event=>setId(event.target.value))}
                  />

                <input
                 placeholder="EnterName"
                 value={Name}
                 onChange={(event=>setName(event.target.value))}
                 />

                 <input
                 placeholder="EnterCourse"
                 value={Course}
                 onChange={(event=>setCourse(event.target.value))}
                 />

                <input
                 placeholder="Entersex"
                 value={Sex}
                 onChange={(event=>setSex(event.target.value))}
                 />

                <input 
                placeholder="EnterMail"
                value={Email}
                onChange={(event=>setEmail(event.target.value))}
                />

                <input
                 placeholder="EnterExperience"
                 value={Experience}
                 onChange={(event=>setExperience(event.target.value))}
                 />

                <input
                 placeholder="EnterLocation"
                 value={Location}
                 onChange={(event=>setLocation(event.target.value))}
                 
                 /> 
 
 <button onClick={AddNewTeacher} className="button-78" id="T-add">ADD</button>

</div>

</div>
        </BaseApp>
    )

}