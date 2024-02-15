import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';

function App() {
  
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>} />
            <Route path="/add-exercise" element={<CreateExercisePage />} />
            <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
