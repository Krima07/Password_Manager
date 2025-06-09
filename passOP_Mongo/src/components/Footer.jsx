import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
        <div className="logo font-bold text-3xl">
          <span className='text-green-700'> &lt;</span>
          <span>Pass</span><span className="text-green-700">OP/&gt;</span>

        </div>
       
       <div className='flex'> Created with <img className='w-6 mx-2' src="icons/heart.png" alt="love" /> by Krima Patel
  </div>
    </div>
  )
}

export default Footer