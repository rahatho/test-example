


function GoalItem(props){
  return <li>{props.children} (ID: {props.id})</li> ;
};

function App() {
 const user = {name: 'Rahat', age: 32};
 const {name, age} = user; //object destructuring
 console.log(name);
  
  return (
    <div>
      <h2>Hello World!</h2>
      <ul>
        <GoalItem id='1'>Read</GoalItem>
        <GoalItem  id="2">Learn</GoalItem>
      </ul>
    </div>
  );
  };

export default App;


