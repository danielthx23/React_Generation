import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <div className='p-10 flex flex-col items-center gap-5 bg-slate-200'>
                <h2 className="text-slate-900 text-5xl m-4">Login</h2>
                <div>
                    <button type='submit'
                        onClick={() => { navigate('/home') }}
                        className='hover:underline mx-4 bg-black text-white rounded px-8 py-4'>
                        Login useNavigate
                    </button>
                    <Link to='/home' className="hover:underline mx-4 bg-black text-white rounded px-8 py-4">Login por Link</Link>
                </div>
            </div>
        </div>
    )
}

export default Login