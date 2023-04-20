import React from "react";
import { useHistory } from "react-router-dom";
import "../Style/BaseApp.css";

export default function BaseApp({title,style,children}){
    const history=useHistory();
    return (
        <div className="bg">
            <div className="dashboard">
                <button className="btn" onClick={()=>history.push("/")}>DashBoard</button>
                <button className="btn" onClick={()=>history.push("/dashboard/addstudent")}>Add-Student</button>
                <button className="btn" onClick={()=>history.push("/dashboard/addteacher")}>Add-Teacher</button>
               
                </div>
        
            
                <div className="title">{title}</div>
                <div className="child">{children}</div>
                
 
        </div>
    )
}