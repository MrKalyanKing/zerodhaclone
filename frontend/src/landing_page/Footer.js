import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container">
      <hr></hr>
      <div className="row">
        <div className="col-3 list">
          <img src="media/images/logo.svg" style={{ width: "50%" }} />
          <p className="text-muted mt-2">
            {" "}
            &copy; 2010 - 2024, Zerodha Broking Ltd.All rights reserved
          </p>
          <div className="icon mx-4">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </div>
          <hr></hr>
          <div className="icons-social mx-4">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
            <i class="fa fa-telegram" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-3 list">
          <h5>Compnay</h5>
          <ul>
            <li>About</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Refferal programme</li>
            <li>Careers</li>
            <li>Zerodha.tech</li>
            <li>Press & media</li>
            <li>Zerodha Cares (CSR)</li>
          </ul>
        </div>
        <div className="col-3 list">
          <h5>Support</h5>
          <ul>
            <li>Contact Us</li>
            <li>Support portal</li>
            <li>Z-Connect blog</li>
            <li>List of charges</li>
            <li>Download & resources</li>
            <li>Videos</li>
            <li>Market overvview</li>
            <li>How to file a complaint</li>
            <li>Status of your compliants</li>
          </ul>
        </div>
        <div className="col-3 list">
          <h5>Account</h5>
          <ul>
            <li>Open an Account</li>
            <li>Fund transfer</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-muted para">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF <br></br>
            <br></br>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances<br></br>
            <br></br>
            <a href="">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
            <br></br>
            <br></br>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.<br></br>
            <br></br>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month
            <br></br>
            <br></br>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
             <a href=""> create a ticket here.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
