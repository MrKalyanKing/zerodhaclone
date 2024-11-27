import React from 'react'

const Hero = () => {
  return (
    <div className='container-fluid' id='support'> 
      <div className='mt-3 p-3' id='supportWrapper'>
        <h2>Support</h2>
        <a href='' className='anchor' > Track Ticket</a>
      </div>
      <div className='row mx-4 mt-5 mb-5'>
        <div className='col-6 mb-5 '>
            <h1 style={{fontSize:'25px'}}>Search for an answer or browse help topics to create a ticket</h1>
            <input className='input-tag' type='text ' placeholder='Eg:how do i activate my account...'/><br></br><br></br>
            <a className='anchor' href=''>Track account opening</a> <a className='anchor' href=''>Track segment activation</a><br></br>
            <a className='anchor' href=''> Intraday margins</a> <a className='anchor ' href=''>Kite user manual</a>
        </div>
        <div className='col-6'>
            <h3>Featured</h3>
            <div >
                <ol >
                    <li className='mb-3'> <a className='anchor ' href=''>1.Suspension of trading - IDFC Limited</a> </li>
                    <li><a className='anchor' href=''>2.Rights Entitlements listing in October 2024</a></li>
                </ol>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
