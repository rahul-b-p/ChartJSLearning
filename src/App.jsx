import './App.css'
import StudentChart from './StudentChart';

function App() {
  const studentData = [
    { name: "Rahul", marks: 85, attendance: 92 },
    { name: "Anjali", marks: 75, attendance: 88 },
    { name: "Kiran", marks: 95, attendance: 97 },
    // Add more students here
  ];

  return (
    <>
      <div className="App">
        <h1>Student Progress Report</h1>
        <StudentChart data={studentData} />
      </div>
    </>
  )
}

export default App
