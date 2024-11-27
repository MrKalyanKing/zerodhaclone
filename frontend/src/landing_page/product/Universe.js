import React from "react";

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 ">
        <h2 className="mt-3">The Zerodha Universe </h2>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mx-4 mt-5">
        <div className="col-4">
          <img src="media/images/zerodhaFundhouse.png" style={{width:'50%'}} />
          <p style={{width:'70%'}} className="mt-2 text-muted">
            
            our management venture that is creating simple transoprt index fund
            to help yousave of your goal
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/sensibullLogo.svg" style={{width:'50%'}} />
          <p style={{width:'70%'}} className="mt-3 text-muted">
          our management venture that is creating simple transoprt index fund
          to help yousave of your goal
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/tijori.svg" style={{width:'50%'}}/>
          <p style={{width:'70%'}} className="mt-2 text-muted">
          our management venture that is creating simple transoprt index fund
          to help yousave of your goal
          </p>
        </div>
      </div>
      {/* another level */}
      <div className="row mx-4">
        <div className="col-4">
          <img src="media/images/streakLogo.png" style={{width:'50%'}} />
          <p style={{width:'70%'}} className="mt-2 text-muted">
            
            our management venture that is creating simple transoprt index fund
            to help yousave of your goal
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/smallcaseLogo.png" style={{width:'50%'}} />
          <p style={{width:'70%'}} className="mt-3 text-muted">
          our management venture that is creating simple transoprt index fund
          to help yousave of your goal
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/ditto-logo.png" style={{width:'50%'}}/>
          <p style={{width:'70%'}} className="mt-2 text-muted">
          our management venture that is creating simple transoprt index fund
          to help yousave of your goal
          </p>
        </div>
      </div>
      <div className="row">
        <button style={{width:'20%',margin:'0 auto'}} className="btn btn-primary p-3 mt-4 mb-4"> SignUp Free</button>
      </div>
    </div>
  );
};

export default Universe;
