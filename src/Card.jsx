import React from 'react';
// import web from '../src/images/img1.jpg';

const Card = (props) => {
  return (
    <>
      <div className="col-md-2 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="card-img" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              please click the button to watch the series.
            </p>
            <a href={props.link} className="btn btn-primary">
              {' '}
              watch Now{' '}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
