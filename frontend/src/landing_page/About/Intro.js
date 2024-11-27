import React from "react";

const Intro = () => {
  return (
    <div className="container ">
      <div className="row mt-5 mb-5 text-center para1">
        <h2 className="" style={{ width: "90%" }}>
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </h2>
      </div>
      <hr></hr>
      <div className="row mx-4">
        <div className="col-6 ">
          <p className="mt-5 ">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier. <br></br>
            <br></br> Today, our disruptive pricing models and in-house
            technology have made us the biggest stock broker in India.<br></br>
            <br></br> Over 1+ Crore clients place millions of orders every day
            through our powerful ecosystem of investment platforms, contributing
            over 15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6">
          <p className="mt-5">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
            <br></br>
            <br></br>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.<br></br>
            <br></br> And yet, we are always up to something new every day.
            Catch up on the latest updates on our blog or see what the media is
            saying about us.
          </p>
        </div>
      </div>
      <div className="row text-center mt-5 mb-5">
        <h1>People </h1>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <img className="mb-3" style={{borderRadius:'70%'}} src="media/images/nithinKamath.jpg" />
          <h6 className="mb-2">Kalyan Badhavath</h6>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-6 mt-5 mb-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.<br></br><br></br> He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).<br></br><br></br> Playing basketball is
            his zen.<br></br> <br></br>Connect on <a href=""> Homepage / TradingQnA / Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
