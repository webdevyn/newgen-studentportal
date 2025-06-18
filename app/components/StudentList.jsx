import students from "../data/students";
import React from "react";

const StudentList = ({ students }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className=" text-2xl font-bold mb-4">Student List</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-r">First Name</th>
            <th className="py-2 px-4 border-b border-r">Last Name</th>
            <th className="py-2 px-4 border-b border-r">Date of Birth</th>
            <th className="py-2 px-4 border-b ">Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="py-2 px-4 border-b border-r">
                {student.firstName}
              </td>
              <td className="py-2 px-4 border-b border-r">
                {student.lastName}
              </td>
              <td className="py-2 px-4 border-b border-r">
                {student.dateOfBirth}
              </td>
              <td className="py-2 px-4 border-b">{student.currentGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StudentList;
