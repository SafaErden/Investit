import React from 'react';

const Footer = () => (
  <footer className="page-footer font-small bg-success pt-4">
    <div className="container text-center text-md-left">
      <div className="row text-center text-md-left mt-3 pb-3">
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Stock News</h6>
          <p>Here you can find the latests news about stock market</p>
        </div>

        <hr className="w-100 clearfix d-md-none" />
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
          <p>
            <a className="text-dark" href="#!">Stocks</a>
          </p>
          <p>
            <a className="text-dark" href="#!">Forex</a>
          </p>
          <p>
            <a className="text-dark" href="#!">Euro Bond</a>
          </p>
        </div>

        <hr className="w-100 clearfix d-md-none" />
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p>
            <a className="text-dark" href="#!">Your Account</a>
          </p>
          <p>
            <a className="text-dark" href="#!">Become an Affiliate</a>
          </p>
          <p>
            <a className="text-dark" href="#!">Shipping Rates</a>
          </p>
          <p>
            <a className="text-dark" href="#!">Help</a>
          </p>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p> Tercan, ER 10300, TR</p>
          <p>stocknews@something.com</p>
          <p> + 98 765 43 21 </p>
          <p> + 98 765 43 21 </p>
        </div>

      </div>

      <hr />
      <div className="row d-flex align-items-center">
        <div className="col-md-7 col-lg-8">
          <p className="text-center text-md-left">
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              <strong> Stock News</strong>
            </a>
          </p>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
