import React from 'react'
import { Link } from 'react-router-dom';
import imagenRegister from '../../assets/image/register.svg';

const RegisterPage = () => {
    return (
        <div className='bg-custom container-fluid vh100 d-flex justify-content-center align-items-center'>

            <div className='card-auth shadow d-flex  justify-content-center align-items-center'>
                <img src={imagenRegister} className='img-medium' alt="register" />
            </div>

            <div className='card-auth  shadow d-flex justify-content-center align-items-center'>

                <form className='row m-0  img-medium rounded'>

                    <h4 className='text-center'>Register</h4>


                    <div className='col-12 col-md-10 mx-auto my-2'>
                        <input
                            name='name'
                            type='text'
                            className='form-control'
                            required
                            placeholder='name...'
                        />
                    </div>

                    <div className='col-12 col-md-10 mx-auto my-2'>
                        <input
                            name='email'
                            type='email'
                            className='form-control'
                            required
                            placeholder='email...'
                        />
                    </div>

                    <div className='col-12 col-md-10 mx-auto my-2'>
                        <input
                            name='email'
                            type='password'
                            className='form-control'
                            required
                            placeholder='password...'
                        />
                    </div>

                    <div className='col-md-10 mx-auto my-2'>
                        <Link to={'/login'} className='text-white '>sing In</Link>
                    </div>

                    <div className='col-md-10 mx-auto my-2'>
                        <button className='btn btn-primary'>
                            Register
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default RegisterPage
