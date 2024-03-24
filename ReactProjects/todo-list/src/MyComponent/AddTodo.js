import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title" className='form-label'>Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}} id="title" placeholder="Enter title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc" className='form-label'>Desc</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => {setDesc(e.target.value)}} id="desc" placeholder="desc" />
                </div>
                <button type="submit" className="btn btn-success my-3" >Add todo</button>
            </form>
        </div>
    )
}
