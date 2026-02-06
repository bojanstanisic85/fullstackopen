const Header = (props) => {
 return <h1>{props.courseName}</h1>;
};


const Part = (props) => {
 return (
   <div>
     <p>
       {props.name} - {props.numberOfExercises} exercises.
     </p>
   </div>
 );
};


const Content = ({parts}) => {
 return (
   <div>
     {parts.map((item) => (
     <Part name={item.name} numberOfExercises={item.exercises}/>
     ))}
   </div>
 )
}


const Total = ({parts}) => {
 return (
   <div>
     <p>Total {parts[0].exercises + parts[1].exercises + parts[2].exercises} exercises.</p>
   </div>
 );
};






const App = () => {
 const course = {
   name: 'Half Stack application development',
   parts: [
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
 }


 return (
   <div>
     <Header courseName={course.name} />
     <Content parts = {course.parts}/>
     <Total parts={course.parts} />
   </div>
 );
};


export default App;

