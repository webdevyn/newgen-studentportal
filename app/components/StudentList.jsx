import students from "../data/students";
import React from "react";

const StudentList = ({ students }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className=" text-2xl font-bold mb-4">Student List</h2>
      <table className="min-w-full bg-gray-50 border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-r border-gray-300">
              First Name
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-300">
              Last Name
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-300">
              Date of Birth
            </th>
            <th className="py-2 px-4 border-b border-gray-300">Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="py-2 px-4 border-b border-r border-gray-300">
                {student.firstName}
              </td>
              <td className="py-2 px-4 border-b border-r border-gray-300">
                {student.lastName}
              </td>
              <td className="py-2 px-4 border-b border-r border-gray-300">
                {student.dateOfBirth}
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                {student.currentGrade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StudentList;
