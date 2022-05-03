import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTodo from './Components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateTodo from './Components/UpdateTodo';
export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AddTodo />} />
                    <Route path="/updateTodo/:id" element={<UpdateTodo />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;