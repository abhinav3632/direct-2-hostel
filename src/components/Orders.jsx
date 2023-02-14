import React,{useState} from 'react'
import loginImg from '../asset/login 1.jpg'

export default function Login() {
  let [open, setOpen] = useState(false);
  const [type, setType] = useState('password');
  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
    }
    else {
      setType('password');
    }
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full margin'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="" />
      </div>

      <div className='bg-gray-200 flex justify-center '>
        <form action="https://getform.io/f/29e50d61-bad0-47ae-ae44-e470107df7df" 
        method="POST" className='max-w-20vw h-33vh bg-white w-full mx-20 rounded-lg my-8  py-3 px-6'>
          <h2 className='text-4xl text-gray-600 font-bold text-center'>ORDER</h2>
          <div className='flex flex-col text-gray-700 py-2'>
            <label>Name</label>
            <input name="name" className='rounded-lg  p-2 border-2' type="text" />
          </div>
          <div className='flex flex-col text-gray-700 py-2'>
            <label>Phone Number</label>
            <input name="phone" className='p-2 rounded-lg border-2' type="number" />
          </div>
          <div className='flex flex-col text-gray-700 py-2'>
            <label>Order Id</label>
            <input name="order-id" className='rounded-lg p-2 border-2' type="text" />
          </div>
          <div className='flex flex-col text-gray-700 py-2'>
            <label>Pick-up Point</label>
            <select name="pick-up" className='rounded-lg  p-2 border-2' form="orderform">
              <option name="pick-up" value="Uni-Mall">Uni-Mall</option>
              <option name="pick-up" value="Main Gate">Main Gate</option>
            </select>
          </div>
          <div className='flex flex-col text-gray-700 py-2'>
            <label>Drop Point</label>
            <select name="drop-point" className='rounded-lg p-2 border-2' form="orderform">
              <option name="drop-point" value="Boys Hostel(1-4)">Boys Hostel(1-4)</option>
              <option name="drop-point" value="Boys Hostel(5-8)">Boys Hostel(5-8)</option>
              <option name="drop-point" value="Girls Hostel(1-6)">Girls Hostel(1-6)</option>
            </select>
          </div>
          <div className='flex flex-col text-gray-700 py-2 relative'>
            <label>OTP</label>
            <input name="otp"className='rounded-lg p-2 border-2' type={type} />
            <div onClick={() => setOpen(!open)} className="cursor-pointer absolute top-1/2 right-3 ">
              <i onClick={handleToggle} className={open ? "fa-light fa-eye text-gray-600" : "fa-light fa-eye-slash text-gray-600"}></i>
            </div>
          </div>
          <button className='w-full my-5 py-2 bg-[#4179ED] shadow-lg shadow-[#4179ED]/50 hover:shadow-[#4179ED]/40
                active:scale-[.98] active:duration-75 transition-all hover:scale-[1.02]  
                ease-in-out transform text-white font-semibold rounded-lg'>Place Order</button>

        </form>
      </div>
    </div>
  )
}
