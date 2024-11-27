import React from 'react';
import './App.css';
import FileUploader from './components/FileUploader';

function App() {
  return (
    <div className="App">
      <h1>
        Welcome
        <div>
          <FileUploader />
        </div>
      </h1>
    </div>
  );
}

export default App;
