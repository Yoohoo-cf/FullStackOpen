const mongoose = require('mongoose')

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@cluster0.erczww2.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
    timestamp: { type: Date, default: Date.now }
})

const Person = mongoose.model('Person', personSchema)

async function persons() {
    if (process.argv.length > 3) {
        for (let i = 3; i < process.argv.length; i += 2) {
            const name = process.argv[i]
            const number = process.argv[i+1]
            const person = new Person({ name, number })

            person.save().then(() => {
                console.log(`added ${person.name} number ${person.number} to phonebook`)
                mongoose.connection.close()
            }).catch(error => {
                console.error('Error adding persons:', error)
                mongoose.connection.close()
            })
        }
    } else {
        Person.find({})
            .then(result => {
                console.log('Phonebook:')
                result.forEach(person => {
                    console.log(`${person.name} ${person.number}`)
                })
                mongoose.connection.close()
            })
            .catch(error => {
                console.error('Error retrieving entries:', error)
                mongoose.connection.close()
            })
    }
}

persons()