import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [city, setCity] = useState('')
  const [wdetail, setwDetail] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

 

  const getdata = async (e)=>{
    e.preventDefault()

    setLoading(true)
    
      try {
        const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7360766e2a89431f258371c16b648a17&user=matric`)
      // const data = responce
      
    setwDetail(responce.data)
    setCity('')
    setError('')
      }
       catch (err) {
        
        setwDetail('')
        setError('Not Found')
      setCity('')
        
      }
      finally{
        setLoading(false)
      }
    
    }


  return (
    <div className='bg-blue-300 h-screen w-screen'>
      <div>
        <div className=' h-50 px-10 py-10  ml-10 flex flex-col justify-between bg-blue-100'>
          <h1 className='text-4xl font-bold'>Simple Weather App</h1>
          <div className='p-2 gap-5'>
           <form onSubmit={ getdata}>
             <input type='text' placeholder='City , Name'
            value={city}
            onChange={(elem)=>{
              setCity(elem.target.value)
            }}
            className='px-5 py-3 border-[1px] text-lg font-semibold outline-none border-black rounded'>

            </input>
            <button  className='bg-blue-500 ml-1 rounded active:scale-95 text-white text-lg font-semibold px-5 py-3 border-none'>
              Submit
            </button>
           </form>
          </div>
      </div>

      

        <div className='h-65 flex items-center justify-center relative p-2 '>
          <div  className='min-h-full min-w-80 p-2 flex flex-col items-start rounded-2xl  justify-between bg-gray-300 '>
    {loading ?(
     <img src='https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif'
      className='object-cover h-15 w-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></img>


    ): error ?(
     <div className='h-full w-full p-10 flex items-center justify-center'>
       <h3 className='text-6xl text-red-600 p-2 font-bold'>City Not Found</h3>
     </div>
      

      
    ) : wdetail ? (
        <div>
          <h1 className='text-3xl font-bold p-2'>{wdetail.name}<span className='ml-2 bg-amber-200 px-1'>{wdetail.sys.country}</span></h1>
          <h2 className='p-2 text-4xl font-bold'>{(wdetail.main.temp - 275.1).toFixed(1)}<span className='text-4xl font-bold ml-1'>°C</span></h2>
          <img src={`https://openweathermap.org/img/wn/${wdetail.weather[0].icon}@2x.png`} className='object-cover p-2 h-15 w-15'></img>
          <p className='p-2 font-semibold text-gray-500'>{wdetail.weather[0].description}</p>
        </div>
) :(
  <h3 className='text-4xl p-2 font-bold text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >No data given yet</h3>
)}
</div>
        </div>
    
      </div>

      <div className='flex flex-col items-center p-2 justify-center fixed top-[90%] left-[42%] '>
        <h1 className='text-lg font-bold text-gray-500 '>
          <span className=' font-bold text-black'>Developer: </span>
         Umair Azam 
         </h1>
         <span className='text-lg text-gray-500 font-bold'><span className='font-bold text-black'>
          Email:</span> umairazam2042@gmail.com</span>
          <h4 className=' mt-1'>© 1986-2026</h4>
      </div>

    </div>
  )
}

export default App
