import React, { useState } from 'react'

const Sidebar = (props) => {

    const { show, HandleTypeModal, HandleTypeDiagram } = props
    const [nivel, setnivel] = useState("Container");

    const HandleChange = (e) => {
        HandleTypeDiagram(e.target.value);
        setnivel("Container");
    }

    return (
        <div className="flex-shrink-0 p-3 bg-dark vh100 sidebar" style={show ? { left: "0" } : { left: "-300px" }}>

            <a href="#" className='d-block text-center text-decoration-none fs-4 text-white pointer'>C4 Diagramas</a>

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
                            <a href="#" onClick={() => HandleTypeModal("person")} className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">Person</a>
                        </li>
                        <li className='my-2 '>
                            <a href="#" onClick={() => HandleTypeModal("container")} className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">Container</a>
                        </li>
                        <li className='my-2 '>
                            <a href="#" onClick={() => HandleTypeModal("system_extern")} className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">System_Ext</a>
                        </li>
                        <li className='my-2 '>
                            <a href="#" onClick={() => HandleTypeModal("containerDB")} className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">containerDB</a>
                        </li>
                    </ul>
                    :
                    <ul className="list-unstyled ps-0 my-3">
                        <li className='my-2 '>
                            <a href="#" className='text-decoration-none d-block p-2 text-center text-white pointer' data-bs-toggle="modal" data-bs-target="#modal-create">component</a>
                        </li>
                        <li className='my-2 '>
                            <a href="#" className='text-decoration-none d-block p-2 text-center text-white pointer'>containerDB</a>
                        </li>
                        <li className='my-2 '>
                            <a href="#" className='text-decoration-none d-block p-2 text-center text-white pointer'>System_Ext</a>
                        </li>

                        <li className='my-2 '>
                            <a href="#" className='text-decoration-none d-block p-2 text-center text-white pointer'>Container</a>
                        </li>
                    </ul>
            }


            <h4 className='text-white text-center'>Enlaces</h4>

            <hr className='border border-white' />

            <form>
                <div className='my-2'>
                    <select className="form-select" defaultValue={"componente"}>
                        <option value="componente">id_1</option>
                        <option value="container">id_2</option>
                    </select>
                </div>
                <div className='my-2'>
                    <select className="form-select" defaultValue={"componente"}>
                        <option value="componente">id_1</option>
                        <option value="container">id_2</option>
                    </select>
                </div>
                <div>
                    <button className='btn btn-primary w-100'>bind</button>
                </div>
            </form>

        </div>
    )
}

export default Sidebar
