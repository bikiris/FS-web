const Student = (props) => {
  return (
    <div className="border border-white">
      <h1>{props.name}</h1>
      <p>{props.id}</p>
      <p>{props.school}</p>
    </div>
  )
}


const App = () => {

  const students = [
    {
      name: 'John Doe',
      id: 101,
      school: 'ABC School'
    },
    {
      name: 'Jane Doe',
      id: 102,
      school: 'XYZ School'
    },
    {
      name: 'Alice',
      id: 103,
      school: 'PQR School'
    }
  ]

  return (
    <div>
      <h1 className="text-red-500">Learn Props</h1>
      {students.map( (student) => {
        return <Student key={student.id} name={student.name} id={student.id} school={student.school} />
      })}
    </div>
  )
}

export default App