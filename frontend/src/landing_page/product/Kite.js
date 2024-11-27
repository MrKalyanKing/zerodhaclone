import React from "react";
import './Kite.css'
const Kite = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 ">
          <img src="media/images/kite.png" />
        </div>
        <div className="col-6 mt-5">
          <h1 className="mb-3 mx-3" >Kite</h1>
          <p className="mt-3 mx-3">
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>
          <div className="mt-4 mx-3">
            <a href="">Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href="">Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-4 mx-3 gap-3 app">
            <img src="media/images/googlePlayBadge.svg"/>
            <img src="media/images/appstoreBadge.svg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kite;
