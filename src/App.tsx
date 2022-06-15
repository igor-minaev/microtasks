import React from 'react';
import './App.css';
import {NewComponent, StudentType} from "./NewComponent";

function App() {
    const students: Array<StudentType> = [
        {id: 1, name: 'John', age: 20},
        {id: 2, name: 'Alex', age: 34},
        {id: 3, name: 'David', age: 2},
        {id: 4, name: 'Sam', age: 12},
        {id: 5, name: 'Jim', age: 6},
        {id: 6, name: 'Bob', age: 27}
    ]
    return (
        <NewComponent students={students}/>
    );
}

export default App;
