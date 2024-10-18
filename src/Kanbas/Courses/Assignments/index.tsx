import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <AssignmentControls /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
             <b>ASSIGNMENTS</b>
             <AssignmentControlButtons/>
             </div>
            <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                <table border={0} width="100%">
                  <td valign = "middle"><BsGripVertical className="me-2 fs-3" /></td>
                  <td valign = "middle"><HiOutlinePencilSquare className="me-2 fs-3 green" /></td>
                  <td><table >
                      <tr>
                         <a className="black"
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                    {assignment.title} </a>
                    </tr>
                      <tr> <span className="red">Multiple Modules </span>| <b>Not available until </b> 
                      {new Date(assignment.start_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}  
                      &nbsp; at 12:00 am | </tr>
                      <tr><b>Due </b> 
                      {new Date(assignment.due_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} 
                      &nbsp; at 11:59 pm | {assignment.points} pts</tr>
                  </table></td>
                  <td valign = "middle"><LessonControlButtons /></td>
                </table>
                </li>
                 ))}
            </ul>
          </li>
        </ul>
    </div>
);}