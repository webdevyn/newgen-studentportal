"use client";
import { useState } from "react";
import StudentList from "./StudentList";
import AddStudentForm from "./AddStudentForm";
import initialStudents from "../data/students"; // import initial data

const GetData = () => {
  const [data, setData] = useState(initialStudents);

  const addStudent = (newStudent) => {
    setData((prev) => [...prev, newStudent]);
  };

  return (
    <div>
      <StudentList students={data} />
      <AddStudentForm onAddStudent={addStudent} />
    </div>
  );
};

export default GetData;
