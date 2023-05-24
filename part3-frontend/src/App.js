import { useState,useEffect } from 'react'
import Person from './components/Person'
import personService from './services/persons'
import Notification from './components/Notifacation'

// A seperate component for the search filter
const Filter = ({searchName, setSearchName}) =>
      <div>
        filter shown with <input value={searchName}
        onChange={e => setSearchName(e.target.value)}/>
      </div>

// A seperate component for the form for adding new people to the phonebook
const PersonForm =({addPerson, newPerson, setNewPerson}) => {
    const handleNameChange = (event) => {
      setNewPerson({...newPerson, name:event.target.value})
    }

    const handleNumberChange = (event) => {
      setNewPerson({...newPerson, number: event.target.value})
    }

    return (
    <form onSubmit={addPerson} >
            <div>
            name: 
            <input value={newPerson.name}
            onChange={handleNameChange}/>
            </div>
            <div>
            number: 
            <input value= {newPerson.number}
            onChange={handleNumberChange}/>
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
    )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newPerson, setNewPerson] = useState({name:'', number:''})
  const [searchName, setSearchName] = useState('')
  const [alertMessage, setAlertMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {name: newPerson.name, number:newPerson.number}
    const existingPerson = persons.find(person => person.name === newPerson.name)
    
    if ( existingPerson && persons.find( person => person.number === personObject.number)) {
      setErrorMessage(`${personObject.name} is already added to phonebook`)
      return
  } else if(existingPerson) {
      if (window.confirm(`${existingPerson.name} is already added to the phonebook. Replace the old number with a new one?`)) {
        personService
        .update(existingPerson.id, newPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === existingPerson.id ? returnedPerson : person))
          setAlertMessage(`Updated number for ${existingPerson.name}`)
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)
        })
        .catch(error => {
            setErrorMessage(`Information of ${existingPerson.name} has already been removed from server`)
      })
     }
    } else {
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewPerson({ name: '', number: ''})
        setAlertMessage(`Added ${personObject.name}`)
        setTimeout(() => {
          setAlertMessage(null)
        }, 5000)
      })
      .catch(error => {
        setErrorMessage(error.response.data.error)
  })
  }
}
  
const setDeleteOf = (id) => {
    const personToDelete = persons.find((person) => person.id === id)

  if (window.confirm(`Delete ${personToDelete.name}?`)) {
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id))
      })
      .catch((error) => {
        setErrorMessage(`${personToDelete.name} has already been deleted`)
      })
  }
}

  // filter our list of people by name
const getFilteredPersons = persons.filter(person => 
  person.name && person.name.toLowerCase().includes(searchName.toLowerCase())) 

 
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification alertMessage={alertMessage} errorMessage={errorMessage} />
      <Filter searchName={searchName} setSearchName={setSearchName} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newPerson={newPerson} setNewPerson={setNewPerson}/>
      <h2>Numbers</h2>
       {getFilteredPersons.map(person => ( 
      <Person key={person.id} person={person} 
      setDelete = {() => setDeleteOf(person.id)}/>
    ))}
      </div>
)
}

export default App;