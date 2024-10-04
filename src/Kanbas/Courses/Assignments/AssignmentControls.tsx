import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
      <div id="wd-view-progress" className="btn-group">
            <div  className="input-group">
                <span className="input-group-text"><CiSearch/></span>
                <input type="text" className="form-control" placeholder="Search..."/>
            </div>
        </div>
    </div>
);}
