"use client";
import { useState } from "react";

const AddStudentForm = ({ onAddStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [currentGrade, setCurrentGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !dateOfBirth || !currentGrade) {
      alert("Please fill in all fields");
      return;
    }
    if (firstName.length < 2 || lastName.length < 2) {
      alert("First and Last names must be at least 2 characters long");
      return;
    }
    if (dateOfBirth < "1900-01-01") {
      alert("Date of Birth must be after January 1, 1900");
      return;
    }
    if (currentGrade && !/^[A-F][+-]?$/.test(currentGrade)) {
      alert(
        "Current Grade must be a valid grade (A, B, C, D, F, with optional + or -)"
      );
      return;
    }
    onAddStudent({
      firstName,
      lastName,
      dateOfBirth,
      currentGrade,
    });
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setCurrentGrade("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Current Grade"
          value={currentGrade}
          onChange={(e) => setCurrentGrade(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
