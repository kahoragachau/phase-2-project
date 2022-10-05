import { useEffect,useState } from "react";
import TeachersCollection from "./TeachersCollection";
import Search from "./Search"


function App() {
  const [teachers, setTeachers] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/teachers")
    .then(res => res.json())
    .then(data => setTeachers(data))
  },[])

  return (
    <div>
      <Search />
      <TeachersCollection teachers={teachers}/>
    </div>
  );
}

export default App;
