import TeachersCard from "./TeachersCard";


export default function TeachersCollection({ teachers }) {
    const teacher = teachers.map(teacher => {
        return (<TeachersCard key={teacher.id} teacher={teacher}/>)
    })
    return(
        <>
        {teacher}
        </>
    )
}