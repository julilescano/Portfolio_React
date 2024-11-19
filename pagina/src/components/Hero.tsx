import React from 'react'

function Hero() {
  return (
    <section className='w-full h-screen bg-red-300 pt-20 p-32'> 

        <div className='flex justify-between'>

        <div className='bg-red-800 w-1/2 flex justify-center'><img className='mask mask-squircle w-80 h-80' src="https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14047.jpg" alt="" /></div>
        <div className='bg-amber-600 w-1/2 text-8xl pt-20'>
           <h1> Julieta Lescano</h1>
          </div>

        </div>

    </section>
  )
}

export default Hero