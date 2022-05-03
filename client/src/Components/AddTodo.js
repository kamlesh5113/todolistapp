import React, { useState } from 'react'
import Axios from 'axios';
import TODO from './TODO';
export const AddTodo = () => {

    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');
    const formsubmit = () => {
        if (!title || !desc) {
            alert("Title or Desc Not defined!");
        }
        else {
            const postTodo = {
                title: title,
                desc: desc
            }
            Axios.post("http://localhost:5000/api/tasks",
                postTodo)
                .then((res) => {
                    console.log("successfull");
                })
                .catch((err) => {
                    console.log("Something went wroung", err);
                })
        }
    }

    return (
        <div>
            <div className="col-lg-12">
                <div className="container-fuild">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2>Add TO List</h2>
                        </div>
                        <div className="panel-body">
                            <form >
                                <div className="form-group">
                                    <label>Add Title</label>
                                    <input type="text" className="form-control" value={title}
                                        onChange={(event => { settitle(event.target.value) })} />
                                </div>
                                <div className='form-group'>
                                    <label>Add description</label>
                                    <input type="text" className="form-control" value={desc}
                                        onChange={(event => { setdesc(event.target.value) })} />
                                </div>
                                <div className="form-group">
                                    <button onClick={formsubmit}  className="btn btn-primary">
                                        ADD
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <TODO/>
        </div>
    )
}

export default AddTodo;