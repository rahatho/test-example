import {useState} from 'react';
import { ReactDOM } from 'react';
//import { ReactDOM } 
import AuthForm from './conponents/AuthForm';

function Greeting(){
  return (<p> Welcome to this book! </p>) ;
};

function App() {
 
  
  return (
    <div>
      <h2>Hello World!</h2>
      <Greeting/>
    </div>
  );
  };

export default App;

//const root = ReactDOM.createRoot(document.getElementById('app'));
//root.render(<App/>);
