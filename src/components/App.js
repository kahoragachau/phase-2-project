import { useEffect,useState } from "react";
import TeachersCollection from "./TeachersCollection";


function App() {
  const [teachers, setTeachers] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/teachers")
    .then(res => res.json())
    .then(data => setTeachers(data))
  },[])

  return (
    <div className="App">
      <TeachersCollection teachers={teachers}/>
    </div>
  );
}

export default App;
