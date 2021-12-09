import StudentsFilter from "./students-filter";
import StudentsTable from "./students-table";
import StudentDetails from "./students-details";

// Il y a 3 étates possibles que vous pouvez gérer
// 1 - La liste principale des étudiants
// 2 - La liste filtrée qui va servir de liste d'affichage
// 3 - L'étudiant séléctionné
export default function App() {
  
  return (
    <div className="App">
      <h1>Students</h1>
      <StudentsFilter />
      <StudentsTable />
    </div>
  );
}
