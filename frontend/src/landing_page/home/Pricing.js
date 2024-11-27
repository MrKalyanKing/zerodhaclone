import React from "react";

const Pricing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="mx-2"> See Pricing</a><i class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
        <div className="col-6 d-flex flex-row justify-content-between mb-5">
          <div>
          <img src="media/images/pricingMF.svg"/>
          <p>Free account opening</p>
          </div>
          <div>
          <img src="media/images/pricingMF.svg"/>
          <p> Free equity delivery  </p>
          </div>
          <div>
          <img src="media/images/intradayTrades.svg"/>
          <p> Intraday and F&O </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
