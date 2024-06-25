import React, { } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className='p-10 flex flex-col items-center gap-5 bg-slate-200'>
                    <h2 className="text-slate-900 text-5xl m-4">Home</h2>
                    <div>
                        <button type='submit'
                            className='hover:underline mx-4 bg-black text-white rounded px-8 py-4'
                            onClick={() => { navigate('/login') }}>
                            Login useNavigate
                        </button>
                        <Link to='/login' className='hover:underline mx-4 bg-black text-white rounded px-8 py-4'>Login por Link</Link>
                    </div>
                </div>
                <div className='p-10 text-center flex flex-col gap-5'>
                    <h3 className='text-4xl'>justify-content alinhamento horizontal</h3>
                    <h5 className='text-2xl'>justify-start Esquerda</h5>
                    <div className='flex flex-row justify-start m-3 text-2xl'>
                        <div className='basis-1/4 bg-red-500 p-2'>01</div>
                        <div className='basis-1/4 bg-gray-400 p-2'>01</div>
                    </div>
                    <h5 className='text-2xl'>justify-end Direita</h5>
                    <div className='flex flex-row justify-end m-3 text-2xl'>
                        <div className='basis-1/4 bg-red-500 p-2'>01</div>
                        <div className='basis-1/4 bg-gray-400 p-2'>01</div>
                    </div>
                    <h5 className='text-2xl'>justify-center Centro</h5>
                    <div className='flex flex-row justify-center m-3 text-2xl'>
                        <div className='basis-1/4 bg-red-500 p-2'>01</div>
                        <div className='basis-1/4 bg-gray-400 p-2'>01</div>
                    </div>
                    <h5 className='text-2xl'>justify-between Extremidades</h5>
                    <div className='flex flex-row justify-between m-3 text-2xl'>
                        <div className='basis-1/4 bg-red-500 p-2'>01</div>
                        <div className='basis-1/4 bg-gray-400 p-2'>01</div>
                    </div>
                    <h5 className='text-2xl'>justify-around Extremidades</h5>
                    <div className='flex flex-row justify-around m-3 text-2xl'>
                        <div className='basis-1/4 bg-red-500 p-2'>01</div>
                        <div className='basis-1/4 bg-gray-400 p-2'>01</div>
                    </div>

                    <div className='p-10 text-center flex flex-col gap-5'>
                        <h3 className='text-4xl'>justify-content alinhamento vertical</h3>
                        <div className='w-auto h-60 bg-gray-400 flex justify-center items-start m-3 text-2xl'>
                            <div className='basis-1/4 bg-red-500 p-2'>justify-center items-start alinhamento horizontal centro/vertical topo</div>
                        </div>
                        <div className='w-auto h-60 bg-gray-400 flex justify-center items-center m-3 text-2xl'>
                            <div className='basis-1/4 bg-red-500 p-2'>justify-center items-start alinhamento horizontal centro/vertical centro</div>
                        </div>
                        <div className='w-auto h-60 bg-gray-400 flex justify-center items-end m-3 text-2xl'>
                            <div className='basis-1/4 bg-red-500 p-2'>justify-center items-start alinhamento horizontal centro/vertical base</div>
                        </div>
                    </div>

                    <div className='p-10 text-center flex flex-col gap-5'>
                        <h3 className='text-4xl'>grids</h3>
                        <div className='grid grid-cols-12 gap-2 m-4 text-2xl'>
                            <div className='col-span-6 bg-green-300 p-2'> container 1 </div>
                            <div className='col-span-6 bg-yellow-200 p-2'> container 2 </div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 m-4 text-2xl">
                            <div className='col-span-8 bg-green-300 p-2'> container 1</div>
                            <div className='col-span-4 bg-yellow-200 p-2'> container 2</div>
                        </div>
                        <div className='grid grid-cols-12 gap-2 m-4 text-2xl'>
                            <div className='col-span-4 bg-green-300 p-2'>container 1</div>
                            <div className='col-span-4 bg-yellow-200 p-2'>container 2</div>
                            <div className='col-span-4 bg-red-500 p-2'>container 3</div>
                        </div>
                        <div className='grid grid-cols-12 gap-2 m-4 text-2xl'>
                            <div className='col-span-3 bg-green-300 p-2'>container 1</div>
                            <div className='col-span-3 bg-yellow-200 p-2'>container 2</div>
                            <div className='col-span-3 bg-red-500 p-2'>container 3</div>
                            <div className='col-span-3 bg-blue-500 p-2'>container 4</div>
                        </div>
                        <div className='grid grid-cols-12 gap-2 m-4 text-2xl'>
                            <div className='col-span-4 bg-green-300 p-2'>container 1</div>
                            <div className='col-span-4 bg-yellow-200 p-2'>container 2</div>
                            <div className='col-span-2 bg-red-500 p-2'>container 3</div>
                            <div className='col-span-2 bg-blue-500 p-2'>container 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home