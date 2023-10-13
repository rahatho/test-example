


function GoalItem(props){
  return <li>{props.children} (ID: {props.id})</li> ;
};

function App() {
 const user = {name: 'Max', age: 32};
 const {name, age} = user; //object destructuring
 console.log(name);

 function Link({config, children}){
  return <a {...config} target="_blank" rel="noopener noreferrer">{children}</a>;
 };
  const config = {href:'https://www.google.com'};
  return (
    <div>
      <h2>Hello World!</h2>
      <ul>
        <GoalItem id='1'>Read</GoalItem>
        <GoalItem  id="2">Learn</GoalItem>
        <Link config={config}>Click link</Link>
      </ul>
    </div>
  );
  };

export default App;


