import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex aligh-item-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5  pt-ld-0 order-2 order-lg-1 d-flax justify-content-center flax-column ">
                  <h1>
                    {props.title}
                    <strong className="brand-name">
                      <br /> Series Friendly
                    </strong>
                  </h1>
                  <h2 className="my-3">the top rated webseries</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-large-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.img}
                    alt="img"
                    className="img-fluid-animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default Common;
