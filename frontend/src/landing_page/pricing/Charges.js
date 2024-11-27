import React from "react";

const Charges = () => {
  return (
    <div className="container">
      <div className="row mt-5 p-5 text-center">
        <h1>Charges</h1>
        <p className="text-muted">List of all charges and taxes</p>
      </div>
      <div className="row mt-5 p-5 ">
        <div className="col-4">
          <img src="media/images/pricing0.svg" />
          <h3 className="mx-4">Free equity delivery</h3>
          <p className="mx-4 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" />
          <h3 className="mx-4">Intraday and F&O trades</h3>
          <p className="mx-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricing0.svg" />
          <h3 className="mx-4">Free direct MF</h3>
          <p className="mx-4 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
};

export default Charges;
