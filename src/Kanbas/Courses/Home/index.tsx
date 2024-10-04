import Padding from "../../../Labs/Lab2/Padding";
import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    //  {/*  <table id="wd-home">
    //    <tr>
    //      <td valign="top"> */}
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
          <Modules />
        </div>
        {/*  </td> */}
        {/*  <td valign="top"> */}
        <div className="d-none d-md-block" style={{padding:"10px"}}>
          <CourseStatus />
          </div>
        </div>
    // {/*      </td>
    //    </tr>
    //  </table> */}
  );
}
