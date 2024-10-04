import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <input id="wd-assignment-progress" className="fs-5 rounded-5 list-assignment-progress" 
      type ="text" value="40% of Total" readOnly />
      <BsPlus className="fs-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
