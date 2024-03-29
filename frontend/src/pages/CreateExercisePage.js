import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgPlayListAdd } from 'react-icons/cg'

export const CreateExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to create exercise, status code = ${response.status}`);
        }
        navigate("/");
    };

    return (
        <div>
            <h1>Add Exercise</h1>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            placeholder="Enter name here"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </td>
                    <td>
                        <input
                            type="number"
                            value={reps}
                            placeholder="Enter reps here"
                            onChange={e => setReps(e.target.value)} />
                    </td>
                    <td>
                        <input
                            type="number"
                            placeholder="Enter weight here"
                            value={weight}
                            onChange={e => setWeight(e.target.value)} />
                    </td>
                    <td>
                        <select onChange={e => setUnit(e.target.value)}>
                            <option value="" disabled selected>Choose units here</option>
                            <option value='lbs'>lbs</option>
                            <option value='kgs'>kgs</option>
                        </select>
                    </td>
                    <td>
                        <input
                            type="text"
                            value={date}
                            placeholder="Enter date here"
                            onChange={e => setDate(e.target.value)} />
                    </td>
                </tr>
            </tbody>
            <button>
                <CgPlayListAdd onClick={createExercise}/>
            </button>
        </div>
    );
}

export default CreateExercisePage;