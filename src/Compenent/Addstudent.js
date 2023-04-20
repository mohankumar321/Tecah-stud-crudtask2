import React, { useState } from "react";
import BaseApp from "../Core/base";
import { useHistory } from "react-router-dom";
import "../Style/AddStudent.css";

export default function AddStudent({Student,setStudent}){

    const history=useHistory();
    const [Id,setId]=useState("");
    const [Name,setName]=useState("");
    const [Reg,setReg]=useState("");
    const [Sex,setSex]=useState("");
    const [Course,setCourse]=useState("");
    const [Section,setSection]=useState("");
    const [BusNo,setBusNo]=useState("");
    const[Location, setLocation]=useState("");

    const AddNewStudent=()=>{
        const NewStudent={
            Id,
            Name,
            Reg,
            Sex,
            Course,
            Section,
            BusNo,
            Location
        }

        setStudent([...Student,NewStudent])
        history.push("/dashboard/studentdetail")

        setId("");
        setName("");
        setReg("");
        setCourse("");
        setSex("");
        setSection("");
        setBusNo("");
        setLocation("");

    }

    return(
        <BaseApp 
        title="ADD-STUDENT">
            <div className="Add-student">

                <div className="Edit-Student">

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
                 placeholder="EnterRegisterNumber"
                 value={Reg}
                 onChange={(event=>setReg(event.target.value))}
                 />

                <input
                 placeholder="EnterGender"
                 value={Sex}
                 onChange={(event=>setSex(event.target.value))}
                 />

                <input 
                placeholder="EnterCourse"
                value={Course}
                onChange={(event=>setCourse(event.target.value))}
                />

                <input
                 placeholder="EnterSection"
                 value={Section}
                 onChange={(event=>setSection(event.target.value))}
                 />
                 <input
                 placeholder="EnterBusNo"
                 value={BusNo}
                 onChange={(event=>setBusNo(event.target.value))}
                 />


                <input
                 placeholder="EnterLocation"
                 value={Location}
                 onChange={(event=>setLocation(event.target.value))}
                 /> 
                 
                 <button onClick={AddNewStudent} className="button-78">ADD</button>

                </div>
                
            </div>
        </BaseApp>
    )
}