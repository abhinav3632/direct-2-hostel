import React from 'react'
import hostel from '../asset/hostel.jpg'


const Pricing = () => {
    return (
        <>
            <section className="md:flex items-center text-gray-500">
                <div className="container mt-10 px-10 mx-auto">
                    <div className="text-center pb-8">
                        <h1 className="text-3xl md:text-4xl text-black font-bold">Our Pricing</h1>
                    </div>
                    <div className="flex flex-wrap m-2 justify-center">
                        <div className="p-4 sm:w-1/3 lg:w-1/4">
                            <div className="border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-45 md:h-21 w-full object-cover object-center"
                                    src={hostel} alt="blog" />
                                <div className="p-6 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in cursor-pointer ">
                                    <h1 className="text-3xl font-bold mb-3 text-center">BH 1-4</h1>
                                    <h2 className='text-2xl font-bold mb-3 text-center'> ₹10 </h2>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/3 lg:w-1/4">
                            <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-45 md:h-21 w-full object-cover object-center"
                                    src={hostel} alt="blog" />
                                <div className="p-6 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in cursor-pointer">
                                    <h1 className="text-3xl font-bold mb-3  text-center">BH 5-8</h1>
                                    <h2 className='text-2xl font-bold mb-3 text-center'> ₹15 </h2>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/3 lg:w-1/4">
                            <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-45 md:h-21 w-full object-cover object-center"
                                    src={hostel} alt="blog" />
                                <div className="p-6 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in cursor-pointer">
                                    <h1 className="text-3xl font-bold mb-3  text-center">GH 1-6</h1>
                                    <h2 className='text-2xl font-bold mb-3 text-center'> ₹5 </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Pricing