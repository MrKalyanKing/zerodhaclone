import React from 'react'
import './CreateTicket.css'
const CreateTicket = () => {
  return (
    <div className='container'>
      <div className='row'>
        <h3 className='text-muted mt-4 mb-4'>To create a ticket, select a relevant topic</h3>
        <div className='col-4' > 
            <h5>
                 <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
            </h5>
            <div>
           <li> <a href='' > Getting started</a></li>
           <li> <a href='' > Online</a></li>
           <li> <a href='' > Offline</a></li>
           <li> <a href='' > Charges</a></li>
           <li> <a href='' > Company, Partnership and HUF</a></li>
           <li> <a href='' > Non Resident Indian (NRI)</a></li>
            </div>
        </div>
        <div className='col-4' > 
            <h5 className='mb-3 mt-3'>
            <i class="fa fa-user" aria-hidden="true"></i>Your Zerodha Account
            </h5> 
            <div className='mt-3 mb-3'>
           <li> <a href='' >   Login credentials</a> </li>
           <li> <a href='' >  Your Profile</a></li>
           <li> <a href='' >  Account modification and segment addition</a></li>
           <li> <a href='' >  CMR & DP ID</a></li>
           <li> <a href='' >  Nomination</a></li>
           <li> <a href='' >  Transfer and conversion of shares</a></li>
            </div>
        </div>
        <div className='col-4' >
             <h5>
             <i class="fa fa-external-link-square" aria-hidden="true"></i>  Tradind and Marketing
            </h5> 
            <div>
           <li><a href=''> Trading FAQs   </a></li>          
           <li><a href=''>Kite</a></li> 
           <li><a href=''>Margins</a></li> 
           <li><a href=''>Product and order types</a></li> 
           <li><a href=''>Corporate actions</a></li> 
           <li><a href=''>Kite features</a></li> 
            </div>
        </div>
      </div>
      <div className='row mt-5'>
        
        <div className='col-4' > 
            <h5>
                 <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
            </h5>
            <div>
           <li> <a href='' > Getting started</a></li>
           <li> <a href='' > Online</a></li>
           <li> <a href='' > Offline</a></li>
           <li> <a href='' > Charges</a></li>
           <li> <a href='' > Company, Partnership and HUF</a></li>
           <li> <a href='' > Non Resident Indian (NRI)</a></li>
            </div>
        </div>
        <div className='col-4' > 
            <h5>
            <i class="fa fa-user" aria-hidden="true"></i>Your Zerodha Account
            </h5> 
            <div>
           <li> <a href='' >   Login credentials</a> </li>
           <li> <a href='' >  Your Profile</a></li>
           <li> <a href='' >  Account modification and segment addition</a></li>
           <li> <a href='' >  CMR & DP ID</a></li>
           <li> <a href='' >  Nomination</a></li>
           <li> <a href='' >  Transfer and conversion of shares</a></li>
            </div>
        </div>
        <div className='col-4 mb-5' >
             <h5>
             <i class="fa fa-external-link-square" aria-hidden="true"></i>  Tradind and Marketing
            </h5> 
            <div>
           <li><a href=''> Trading FAQs   </a></li>          
           <li><a href=''>Kite</a></li> 
           <li><a href=''>Margins</a></li> 
           <li><a href=''>Product and order types</a></li> 
           <li><a href=''>Corporate actions</a></li> 
           <li><a href=''>Kite features</a></li> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket
