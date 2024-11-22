import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import ProtectedRouteCourse from "./Account/ProtectedRouteCourse"; 
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

export default function Kanbas() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<any[]>([]);
  const [all_courses, setAllCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);  
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) { 
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const [ enrollments, setEnrollments ] = useState<any[]>([]);
  const [enrollment, setEnrollment] = useState<any>({
    _id: "1234", user: "New User", course: "New Course",
  });
  // const addNewEnrollment = (user_id: any, course_id:any) => {
  //   setEnrollments([...enrollments, { ...enrollment, _id: new Date().getTime().toString(), 
  //     course: course_id, user: user_id }]);
  // };
  const removeEnrollment = async (user_id: string, course_id: string) => {
    await userClient.deleteEnrollment(user_id, course_id);
    setEnrollments(enrollments.filter((enrollment) => 
      !(enrollment.course === course_id && enrollment.user === user_id)));
  };
  const saveEnrollment = async (user_id: any, course_id:any) => {
    const newEnrollment = await userClient.addEnrollment(user_id, course_id);
    setEnrollments([...enrollments, newEnrollment]);
  };
  // const deleteEnrollment = (user_id: any, course_id:any) => {
  //   setEnrollments(enrollments.filter((enrollment) => 
  //     !(enrollment.course === course_id && enrollment.user === user_id)));
  // };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      const all_courses = await userClient.findAllCourses();
      const all_enrollments = await userClient.findAllEnrollments();
      setCourses(courses);
      setAllCourses(all_courses);
      setEnrollments(all_enrollments);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);
  return (
    <Session>
    <div id="wd-kanbas">
            <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
          <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="Dashboard" element={
                  <ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      all_courses={all_courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                      enrollments={enrollments}
                      addNewEnrollment={saveEnrollment}
                      deleteEnrollment={removeEnrollment}
                      />
                  </ProtectedRoute>
                } />
              <Route path="/Courses/:cid/*" element=
              {<ProtectedRoute> <ProtectedRouteCourse enrollments={enrollments}>
                <Courses courses={courses} />
               </ProtectedRouteCourse> </ProtectedRoute>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
    </div>
    </Session>
  );
}
