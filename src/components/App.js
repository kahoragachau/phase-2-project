import { useEffect,useState } from "react";
import TeachersCollection from "./TeachersCollection";
import Search from "./Search"


function App() {
  const [teachers, setTeachers] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(()=> {
    fetch("http://localhost:3001/teachers")
    .then(res => res.json())
    .then(data => setTeachers(data))
  },[])

  const filteredTeachers = teachers.filter(teacher => {
    return JSON.stringify(teacher).toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <div>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <TeachersCollection teachers={filteredTeachers}/>
    </div>
  );
}

export default App;
