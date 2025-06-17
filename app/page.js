import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to the Student Portal</h1>
        <p>Here you can manage student information easily.</p>
        <StudentList />
        <AddStudent />
      </main>
    </div>
  );
}
