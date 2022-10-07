import { useEffect,useState } from "react";
import {Routes, Route} from "react-router-dom"
import TeachersCollection from "./TeachersCollection";
import Search from "./Search"
import AddTeacher from "./AddTeacher";
import NavBar from "./NavBar"
import ContactForm from "./ContactForm";


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
      <NavBar />
      <br />
      <br />
      <br />
      <Search searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route exact path="AddTeacher" element={<AddTeacher/>}/>
        <Route exact path="Contacts" element={<ContactForm />}/>
        <Route exact path="Home" element={<TeachersCollection teachers={filteredTeachers} setTeachers={setTeachers}/>}/>
        <Route exact path="/" element={<TeachersCollection teachers={filteredTeachers} setTeachers={setTeachers}/>}/>
      </Routes>
      {/* <TeachersCollection teachers={filteredTeachers} setTeachers={setTeachers}/>
      <AddTeacher setTeachers={setTeachers}/> */}
    </div>
  );
}

export default App;
