import React  from "react";
import BaseApp from "../Core/base";
import "../Style/dashboard.css";
import { useHistory } from "react-router-dom";


export default function Dashboard(){
    const history=useHistory()
    return (
        <BaseApp 
        title="DASHBOARD">
        <div className="detail-card">
            <button className="d-btn d-btn-1" onClick={()=>history.push("/dashboard/studentdetail")}>STUDENT-DETAILS</button>
            <button className="d-btn d-btn-2" onClick={()=>history.push("/dashboard/teacherdetail")}>TEACHER-DETAILS</button>
        </div>






        </BaseApp>
      
    )
}