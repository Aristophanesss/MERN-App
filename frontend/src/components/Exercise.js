import React from "react";
import {RiDeleteBin6Fill, RiEdit2Fill} from 'react-icons/ri';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td> <RiEdit2Fill onClick = {() => onEdit(exercise)}/></td>
            <td>< RiDeleteBin6Fill onClick = {() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default Exercise;