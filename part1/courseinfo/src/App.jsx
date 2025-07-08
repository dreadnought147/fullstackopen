import Header from './Header';
import Content from './Content';
import Total from './Total'

const App = () => {
   const course = 'Half Stack application development'
   const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



  return (
    <>
    <Header course={course}/>
    <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
    <Total exercises1 ={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </>
  )
}

export default App;