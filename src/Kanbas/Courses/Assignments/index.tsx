import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useParams } from "react-router";
import { addAssignment, deleteAssignment, setAssignments, updateAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import ProtectedRouteFaculty from "../ProtectedRouteFaculty";
import { FaTrash } from "react-icons/fa";
import DeleteAssignment from "./DeleteAssignment";
import { Link } from "react-router-dom";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [assignmentId, setAssignmentId] = useState("");
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  console.log(assignments);
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { 
      title: "New Assignment", 
      course: cid, 
      description: "New Description",
      points: 100,
      start_date: new Date().toISOString().slice(0, 10),
      due_date: new Date().toISOString().slice(0, 10)};
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
  };
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  return (
    <div>
      <AssignmentControls addAssignment={createAssignmentForCourse}/><br /><br />
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
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                <table border={0} width="100%">
                  <td valign = "middle"><BsGripVertical className="me-2 fs-3" /></td>
                  <td valign = "middle"><HiOutlinePencilSquare className="me-2 fs-3 green" /></td>
                  <td><table >
                      <tr>
                    <Link className="black"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        >
                    {assignment.title}
                    </Link>   
                    </tr>
                      <tr> <span className="red">Multiple Modules </span>| <b>Not available until </b> 
                      {new Date(assignment.start_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}  
                      &nbsp; at 12:00 am | </tr>
                      <tr><b>Due </b> 
                      {new Date(assignment.due_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} 
                      &nbsp; at 11:59 pm | {assignment.points} pts</tr>
                  </table></td>
                  <td valign = "middle">
                    <ProtectedRouteFaculty>
                    <button id="wd-delete-assignment-btn" className="btn btn-lg me-1 float-end" 
                    data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" 
                    onClick={() => setAssignmentId(assignment._id)}>
                      <FaTrash className="text-danger me-3 mb-1 float-end" />
                      {/* <div>{assignment._id}</div> */}
                    </button>
                    
                  </ProtectedRouteFaculty>
                    <LessonControlButtons /></td>
                </table>
                </li>
                 ))}
            </ul>
          </li>
        </ul>
        <DeleteAssignment dialogTitle="Delete Assignment ?" assignment_id={assignmentId}
                      deleteAssignment={(assignment_id) => removeAssignment(assignment_id)}/>
    </div>
);}