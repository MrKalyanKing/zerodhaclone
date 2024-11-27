import React from "react";

const Coin = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <img src="media/images/coin.png" />
        </div>
        <div className="col-6 mt-3">
          <h1 className="mx-3 mt-3">Coin</h1>
          <p className="mx-3">
            Buy direct mutual funds online, commission-free, delivered directly
            to your Demat account. Enjoy the investment experience on your
            Android and iOS devices.
          </p>
          <a className="mx-3 mt-5" href="">
            Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <div className="mx-3 mt-5 pe-auto">
            <img className="pe-auto" src="media/images/googlePlayBadge.svg" />
            <img src="media/images/appstoreBadge.svg" />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
