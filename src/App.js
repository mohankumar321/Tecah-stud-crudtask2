

import { Route, Switch } from 'react-router-dom';
import './App.css';
import StudentDetails from './Compenent/Students';
import TeacherDetails from './Compenent/Teachers';
import Dashboard from './Compenent/Dashboard';
import AddStudent from './Compenent/Addstudent';
import AddTeacher from './Compenent/AddTeacher';
import { useState } from 'react';
import { stdata } from './Data/Data';
import EditStudent from './Compenent/Editstudent';
import { Trdata } from './Data/Data';
import EditTeacher from './Compenent/Editteacher';






function App() {
  const [Student,setStudent]=useState(stdata)
  const [Teacher,setTeacher]=useState(Trdata)
  
  return (
    <div className="App">

      <Switch>

        <Route exact path="/"><Dashboard/></Route>

        <Route  path="/dashboard/studentdetail">
        <StudentDetails Student={Student} setStudent={setStudent}/></Route>

        <Route path="/dashboard/editstudent/:Id">
          <EditStudent Student={Student} setStudent={setStudent}/></Route>

          <Route path="/dashboard/addstudent">
          <AddStudent Student={Student} setStudent={setStudent}/></Route>


        <Route path="/dashboard/teacherdetail">
          <TeacherDetails Teacher={Teacher} setTeacher={setTeacher}/></Route>

          <Route path="/dashboard/editteacher/:Id"><EditTeacher
          Teacher={Teacher} setTeacher={setTeacher}/></Route>
   


        <Route path="/dashboard/addteacher">
          <AddTeacher Teacher={Teacher} setTeacher={setTeacher}/></Route>

       
          

      </Switch>
 

    </div>
  );
}

export default App;

