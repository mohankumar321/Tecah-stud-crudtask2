import React from "react";
import BaseApp from "../Core/base";
import { useHistory } from "react-router-dom";
import "../Style/Teacher.css";


export default function TeacherDetails({Teacher,setTeacher}){
    const history=useHistory();

    const DeleteTeacher=(idx)=>{
        const ALterTeacherlist=Teacher.filter((per,Id)=>per.Id!==idx);
        setTeacher (ALterTeacherlist)
           }
    return(
        <BaseApp 
        title="TEACHER-DETAILS">
          <div className="Teacher">
            {Teacher.map((person, idx)=>(

   <div className="Td-card" key={idx}>
   
   <h1 className="tbox tname ">{person.Name}</h1>
   <h3 className="tbox tcrs t">  Course-Taken     <span>&#10521;</span> <b>{person.Course}</b></h3>
   <h3 className="tbox tsex t">  Sex     <span>&#10521;</span> <b>{person.Sex}</b></h3>
   <h3 className="tbox tmail t">  Email   <span>&#10521;</span> <b>{person.Email}</b></h3>
   <h3 className="tbox texp t">  Experience   <span>&#10521;</span> <b>{person.Experience}</b> </h3>
   <h3 className="tbox tslry t">  Salary   <span>&#10521;</span> <b>{person.Salary}</b> </h3>
   <h3 className="tbox tloc t">  Location    <span>&#10521;</span> <b>{person.Location}</b></h3>

    <div className="tbtn-box">
        
    <button className="td-updt-btn td-btn" 
    onClick={()=>history.push(`/dashboard/editteacher/${person.Id}`)}>Edit </button>

    <button className="td-dlt-btn td-btn"
  onClick={()=>DeleteTeacher(person.Id)} >Delete</button>
   

   </div>

</div>
))}

           

            </div>
        </BaseApp>
    )
}