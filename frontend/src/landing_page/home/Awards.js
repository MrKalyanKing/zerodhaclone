import React from "react";

const Awards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1 className="mb-5">Trust with confidence </h1>
          <div className="heading text-muted ">
            <h2>Customer-first always</h2>
            <p>
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="heading text-muted">
            <h2>No spam or gimmicks</h2>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div className="heading text-muted">
            <h2> The Zerodha universe </h2>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="heading text-muted">
            <h2> Do better with money </h2>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-6 text-center mb-5">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }} className="mb-4" />
          <a href="" className="mx-5" >Explore Our Products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
          <a href="">Try On a Kite <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="row text-center">
        <img src="media/images/pressLogos.png"  style={{width:"70%", margin:"0 auto"}} className="mb-5" />
      </div>
    </div>
  );
};

export default Awards;
