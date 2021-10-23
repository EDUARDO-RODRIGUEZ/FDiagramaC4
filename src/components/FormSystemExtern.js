import React from 'react'
import { useForm } from '../hooks/useForm';

export const FormSystemExtern = (props) => {
    //@params : id, title, description

    const { DrawSystemExtern, DrawDiagram } = props;

    const { value, HandleInputChange, reset } = useForm({
        id: "",
        title: "",
        description: ""
    });

    const { id, title, description } = value;

    const HandleClikSubmit = (e) => {
        e.preventDefault();
        DrawDiagram(DrawSystemExtern(id, title, description));
        reset();
    }

    return (
        <form onSubmit={HandleClikSubmit}>
            <div className='my-2'>
                <input
                    type='text'
                    placeholder='id'
                    className='form-control'
                    value={id}
                    name="id"
                    onChange={HandleInputChange}
                />
            </div>
            <div className='my-2'>
                <input
                    type='text'
                    placeholder='title'
                    className='form-control'
                    value={title}
                    name="title"
                    onChange={HandleInputChange}
                />
            </div>

            <div className='my-2'>
                <input
                    type='text'
                    placeholder='description'
                    className='form-control'
                    value={description}
                    name="description"
                    onChange={HandleInputChange}
                />
            </div>

            <div className='my-2'>
                <button type="button" className="btn btn-secondary mx-1" data-bs-dismiss="modal">Close</button>
                <button className="btn btn-primary mx-1" data-bs-dismiss="modal" >Save</button>
            </div>

        </form>
    )
}
