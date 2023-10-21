import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [text, setText] = useState('hi All');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = () => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };

  return (
    <div className='container'>
      <h3>Responsive paragraph word counter</h3>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <p>Word Count: {getWordCount()}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
