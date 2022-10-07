import { useEffect,useState } from "react";
import TeachersCollection from "./TeachersCollection";
import Search from "./Search"
import AddTeacher from "./AddTeacher";


function App() {
  const [teachers, setTeachers] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(()=> {
    fetch("https://teachers-data-project.herokuapp.com/teachers")
    .then(res => res.json())
    .then(data => setTeachers(data))
  },[])

  const filteredTeachers = teachers?.filter(teacher => {
    return JSON.stringify(teacher).toLowerCase().includes(searchText.toLowerCase())
  })

  return (
    <div>
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <TeachersCollection teachers={filteredTeachers} setTeachers={setTeachers}/>
      <AddTeacher setTeachers={setTeachers}/>
    </div>
  );
}

export default App;
