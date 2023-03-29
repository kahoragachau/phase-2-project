import TeachersCard from "./TeachersCard";


export default function TeachersCollection({ teachers, setTeachers }) {
    function handleDelete(id){
        fetch(`http://localhost:3001/teachers${id}`, {
          method:"DELETE"
        })
        .then(() => setTeachers(previousData => {
          return previousData.filter(teacher => teacher.id !== id)
        }))
      }

    const teacher = teachers?.map(teacher => {
        return (<TeachersCard key={teacher.id} teacher={teacher} handleDelete={()=>handleDelete(teacher.id)}/>)
    })
    return(
        <>
        {teacher}
        </>
    )
}