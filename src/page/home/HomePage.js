import React, { useContext } from 'react'
import { authContext } from '../../context/authContext';

const HomePage = () => {

    const { logout } = useContext(authContext);

    const HandleLogout = () => {
        logout();
    }

    return (

        <div className='vh100 bg-content'>

            <header className='bg-dark text-white container-fluid'>
                <div className='row p-1'>
                    <div className='col-md-11'>
                        <h1 className='my-1  text-center'>C4 Diagramas</h1>
                    </div>
                    <div className='col-md-1 text-center justify-content-center d-flex align-items-center'>
                        <a onClick={HandleLogout} className='text-white-50 pointer'>logout</a>
                    </div>
                </div>
            </header>

            <small className='text-center d-block'>online</small>

            <section className='container-fluid'>

                <div className='row'>
                    <div className='col-md-9 p-1 section overflow-auto'>
                        <form className='container-fluid mt-2'>
                            <input name='search' placeholder='sala...' type='text' className='form-control' />
                        </form>
                        <div className='container-fluid'>
                            <table className='text-black-50 table table-striped text-center text-white'>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>estado</th>
                                        <th>eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>123</th>
                                        <th>sala juegos</th>
                                        <th>
                                            <button className='btn btn-primary'>active</button>
                                        </th>
                                        <th>
                                            <button className='btn btn-danger'>eliminar</button>
                                        </th>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='col-md-3 p-1 justify-content-start d-flex flex-column '>

                        <div className='border rounded my-1 bg-white shadow p-2'>

                            <h5 className='text-center'>Unirse a Sala</h5>

                            <form className='container-fluid row  m-0'>
                                <div className='col-md-10 mx-auto my-1'>
                                    <input type='text' placeholder='correo anfitrion' className='form-control' />
                                </div>
                                <div className='col-md-10 mx-auto my-1'>
                                    <input type='text' placeholder='id_sala' className='form-control' />
                                </div>
                                <div className='col-md-10 mx-auto my-2'>
                                    <button className='btn btn-primary'>solicitar</button>
                                </div>
                            </form>

                        </div>

                        <div className='border rounded my-1 bg-white shadow p-2'>

                            <h5 className='text-center'>Crear una Sala</h5>

                            <form className='container-fluid row  m-0'>
                                <div className='col-md-10 mx-auto my-1'>
                                    <input type='text' placeholder='name' className='form-control' />
                                </div>
                                <div className='col-md-10 mx-auto my-2'>
                                    <button className='btn btn-primary'>crear</button>
                                </div>
                            </form>

                        </div>


                    </div>
                </div>

            </section>

        </div>
    );
}

export default HomePage
