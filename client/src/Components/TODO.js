import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function TodoCard({ data, handelDelte }) {
    const { _id, todo, description } = data;

    return (
        <>
            <li key={_id}>
                <div className='title-description'>
                    <h3>{todo}</h3>
                    <h3>{description}</h3>
                </div>
                <div className='button-container'>
                    <Link to={`/updateTodo/${_id}`}>
                        <button className='btn btn-success' name={_id}>edit</button>
                    </Link>
                    <button className='btn btn-danger' name={_id} onClick={handelDelte}>delete</button>
                </div>
            </li>
        </>
    );
}



const TODO = () => {

    const [todo, settodo] = useState([]);

    function handelDelte(event) {
        axios.delete(`http://localhost:5000/api/tasks/${event.target.name}`);
    }

   

    useEffect(() => {
        axios.get("http://localhost:5000/api/tasks").then((res) => {
            settodo(res.data);
        }).catch((err) => {
            console.log("Something went Wroung", err);
        })
    }, [handelDelte]);

    return (
        <div>
            <div className='container'>
                <section className='contents'>
                    <h1>Todos</h1>
                    <ul className='list-container'>
                        {todo.lenght === 0 ? "No Todos" :
                        todo.map(data =>

                            <TodoCard  data={data} handelDelte={handelDelte} />
                        )
                    }
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default TODO