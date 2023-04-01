import TeachersCard from "./TeachersCard";
import { useNavigate } from "react-router-dom";

export default function TeachersCollection({ teachers, setTeachers }) {
    function handleDelete(id){
        fetch(`https://jolly-puce-chipmunk.cyclic.app/teachers/${id}`, {
          method:"DELETE"
        })
        .then(() => setTeachers(previousData => {
          return previousData.filter(teacher => teacher.id !== id)
        }))
      }

      const navigate = useNavigate();
      
      function handleEdit(teacher) {
        navigate('EditTeacher')
        console.log(teacher)
      }

    const teacher = teachers?.map(teacher => {
        return (<TeachersCard key={teacher.id} teacher={teacher} handleDelete={()=>handleDelete(teacher.id)} handleEdit={() => handleEdit(teacher)} />)
    })
    return(
        <>
        {teacher}
        </>
    )
}