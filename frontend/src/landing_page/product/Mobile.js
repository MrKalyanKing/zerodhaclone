import React from "react";

const Mobile = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mt-5">
          <img src="media/images/varsity.png" />
        </div>
        <div className="col-6 mt-5">
          <h1 className="mt-5">Mobile Varsity</h1>
          <p>
            An easy to grasp, collection of stock market lessons with in-depth
            coverage and illustrations. Content is broken down into bite-size
            cards to help you learn on the go.
          </p>
          <div className="mt-5">
            <img src="media/images/googlePlayBadge.svg"/>
            <img src="media/images/appstorebadge.svg"/>
          </div>
         
        </div>
      </div>
      <div className="row text-center mt-5">
      <h4 className="mt-5 mb-5">Want to know more about our technology stack? Check out the <a href=""> Zerodha.tech</a> blog.</h4>
      </div>
    </div>
  );
};

export default Mobile;
