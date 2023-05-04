const Person = ({ person, setDelete }) => {
    return (
      <div>
        {person.name} {person.number} 
        <button onClick={setDelete} >delete</button>
        </div>
    )
  }

export default Person