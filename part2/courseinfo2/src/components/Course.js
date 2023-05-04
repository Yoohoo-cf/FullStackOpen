const Header =({ course }) => <h2>{ course }</h2>

const Total =( { sum }) => <p><strong>total of { sum } exercises</strong></p>

const Part =( {part} ) => <p>{part.name} {part.exercises}</p>

const Content =({ course: {parts} }) => (
  <>
        {parts.map(part => 
          <div key={part.id}>            
          <Part part={part} />
          </div>
        )}
    </>
)

const Course =( { course }) => (
    <>
      <Header course={course.name} />
      <Content course={course} />
      <Total sum={course.parts.reduce((s, part) => s + part.exercises, 0)} />
    </>
  )

  export default Course