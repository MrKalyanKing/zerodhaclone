import React from 'react'
import './console.css'
const Console = () => {
  return (
    <div className="container " >
      <div className="row mt-5">
        <div className="col-6 mt-5 console">
          <h1>Console</h1>
          <p style={{width:'90%'}}>
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <a href=''>
            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6">
            <img src='media/images/console.png' style={{width:'100%'}}/>
        </div>
      </div>
    </div>
  );
}

export default Console
