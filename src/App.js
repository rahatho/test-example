import {useState} from 'react';

function App() {
  const [outputText, setOutputText] = useState('Initial text');
  function updateTextHandler(){
    setOutputText('Text was changed');
  }
  return (
    <>
      <button onClick={updateTextHandler}>Click to change text</button>
      <p>{outputText}</p>
    </>
  );
}

export default App;
