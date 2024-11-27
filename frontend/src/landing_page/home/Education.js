import React from "react";

const Education = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" />
        </div>
        <div className="col-6">
          <h1>Free and open market education</h1><br></br>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.<br></br><br></br>
             <a href=""> Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
             <br></br><br></br>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries. <br></br><br></br>
            <a href="">TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i>  </a> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
