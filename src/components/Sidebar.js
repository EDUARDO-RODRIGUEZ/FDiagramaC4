import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

    const { show, HandleTypeModal, HandleTypeDiagram } = props
    const [nivel, setnivel] = useState("Container");

    const HandleChange = (e) => {
        HandleTypeDiagram(e.target.value);
        setnivel("Container");
    }

    return (
        <div className="flex-shrink-0 p-3 bg-dark vh100 sidebar" style={show ? { left: "0" } : { left: "-300px" }}>

            <Link to={"/"} className='d-block text-center text-decoration-none fs-4 text-white pointer'>C4 Diagramas</Link>

            <hr className='border border-white' />

            <select className="form-select" defaultValue={"Container"} onChange={HandleChange} >
                <option value="Container" >Container C4</option>
                <option value="Component">Componente C4</option>
            </select>


            {
                (nivel === "Container")
                    ?
                    <ul className="list-unstyled ps-0 my-3">
                        <li className='my-2 '>
                            <p href="#" onClick={() => HandleTypeModal("person")} className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">Person</p>
                        </li>
                        <li className='my-2 '>
                            <p href="#" onClick={() => HandleTypeModal("container")} className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">Container</p>
                        </li>
                        <li className='my-2 '>
                            <p href="#" onClick={() => HandleTypeModal("system_extern")} className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">System_Ext</p>
                        </li>
                        <li className='my-2 '>
                            <p href="#" onClick={() => HandleTypeModal("containerDB")} className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">containerDB</p>
                        </li>

                        <li className='my-2 '>
                            <p href="#" onClick={() => HandleTypeModal("DrawRelation")} className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">DrawRelation</p>
                        </li>

                    </ul>
                    :
                    <ul className="list-unstyled ps-0 my-3">
                        <li className='my-2 '>
                            <p href="#" className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">component</p>
                        </li>
                        <li className='my-2 '>
                            <p href="#" className='text-decoration-none d-block p-2 text-center text-white pointer'>containerDB</p>
                        </li>
                        <li className='my-2 '>
                            <p href="#" className='text-decoration-none d-block p-2 text-center text-white pointer'>System_Ext</p>
                        </li>

                        <li className='my-2 '>
                            <p href="#" className='text-decoration-none d-block p-2 text-center text-white pointer'>Container</p>
                        </li>
                    </ul>
            }

        </div>
    )
}

export default Sidebar
