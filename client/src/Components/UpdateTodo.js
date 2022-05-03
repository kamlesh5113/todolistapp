import React, { useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

const UpdateTodo = () => {

    const { id } = useParams();

    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');





    function formsubmit() {
        const data = {
            title: title,
            desc: desc
        };
        console.log({ id }, { data });
        axios.put(`http://localhost:5000/api/tasks/${id}`, data)
            .then((res) => {
                settitle('');
                setdesc('')
            }).catch((err) => {
                console.log('failed');
                console.log(err.message);
            })
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
                            <form>
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

                                    <Link to={`/`} >
                                        <button onClick={formsubmit} value="submit" className="btn btn-primary">
                                            ADD
                                        </button>
                                    </Link>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdateTodo