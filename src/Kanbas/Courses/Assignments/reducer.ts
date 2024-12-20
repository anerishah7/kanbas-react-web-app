import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        course: assignment.course,
        start_date: assignment.start_date,
        due_date: assignment.due_date,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any; 
    },
}});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;