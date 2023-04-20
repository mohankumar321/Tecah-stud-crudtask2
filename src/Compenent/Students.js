import React from "react";
import BaseApp from "../Core/base";
import { useHistory } from "react-router-dom";
import "../Style/Student.css";


export default function StudentDetails({Student,setStudent}){
    const history=useHistory();

    const DeleteStudent=(idx)=>{
        const ALterlist=Student.filter((per,Id)=>per.Id!==idx);
        setStudent (ALterlist)
           }
    return(
        <BaseApp 
        title="STUDENT-DETAILS"
        >
            <div className="student">
            {Student.map((person, idx)=>(

   <div className="s-card" key={idx}>
   
   <h1 className="box name ">{person.Name}</h1>
   <h3 className="box reg s">  Register-No     <span>&#10521;</span> <b>{person.Reg}</b></h3>
   <h3 className="box sex s">  Sex     <span>&#10521;</span> <b>{person.Sex}</b></h3>
   <h3 className="box grp s">  Group   <span>&#10521;</span> <b>{person.Course}</b></h3>
   <h3 className="box sct s">  Section   <span>&#10521;</span> <b>{person.Section}</b> </h3>
   <h3 className="box bus s">  Bus-Number   <span>&#10521;</span> <b>{person.BusNo}</b> </h3>
   <h3 className="box loc s">  Location    <span>&#10521;</span> <b>{person.Location}</b></h3>

    <div className="btn-box">
    <button className="user-btn updt" 
    onClick={()=>history.push(`/dashboard/editstudent/${person.Id}`)}>Edit </button>

    <button className="user-btn dlt"
  onClick={()=>DeleteStudent(person.Id)} >Delete</button>
   

   </div>

</div>
))}

           

            </div>
        
        </BaseApp>
    )
}