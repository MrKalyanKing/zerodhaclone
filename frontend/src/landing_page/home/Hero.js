import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 '>
      <div className='row text-center'>
        <img src='media/images/homeHero.png'  className='mb-5' />
      
      <h1 className='mb-2'>Invest in everything</h1>
      <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button className='p-3 btn btn-primary mb-5' style={{width:"20%", margin:'0px auto' ,border:'20px'} }>Singup Free</button>
      </div>
    </div>
  )
}

export default Hero
