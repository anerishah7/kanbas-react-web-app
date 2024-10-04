import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export default function Assignments() {
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
              <li className="wd-lesson list-group-item p-3 ps-1">
                <table border={0} width="100%">
                  <td valign = "middle"><BsGripVertical className="me-2 fs-3" /></td>
                  <td valign = "middle"><HiOutlinePencilSquare className="me-2 fs-3 green" /></td>
                  <td><table >
                      <tr> <a className="black"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                    <b>A1</b> </a></tr>
                      <tr> <span className="red">Multiple Modules </span>| <b>Not available until</b> May 6 at 12:00 am | </tr>
                      <tr><b>Due</b> May 13 at 11:59 pm | 100 pts</tr>
                  </table></td>
                  <td valign = "middle"><LessonControlButtons /></td>
                </table>
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <table border={0} width="100%">
                  <td valign = "middle"><BsGripVertical className="me-2 fs-3" /></td>
                  <td valign = "middle"><HiOutlinePencilSquare className="me-2 fs-3 green" /></td>
                  <td><table >
                  <tr> <a className="black"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                    <b>A2</b> </a></tr>
                      <tr> <span className="red">Multiple Modules </span>| <b>Not available until</b> May 13 at 12:00 am | </tr>
                      <tr><b>Due</b> May 20 at 11:59 pm | 100 pts</tr>
                  </table></td>
                  <td valign = "middle"><LessonControlButtons /></td>
                </table>
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <table border={0} width="100%">
                  <td valign = "middle"><BsGripVertical className="me-2 fs-3" /></td>
                  <td valign = "middle"><HiOutlinePencilSquare className="me-2 fs-3 green" /></td>
                  <td><table >
                  <tr> <a className="black"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                    <b>A3</b> </a></tr>
                      <tr> <span className="red">Multiple Modules </span>| <b>Not available until</b> May 20 at 12:00 am | </tr>
                      <tr><b>Due</b> May 27 at 11:59 pm | 100 pts</tr>
                  </table></td>
                  <td valign = "middle"><LessonControlButtons /></td>
                </table>
                </li>
            </ul>
          </li>
        </ul>
    </div>
);}
