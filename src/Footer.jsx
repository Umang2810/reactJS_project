import React from 'react';

const Footer = ()=>{
    return(
        <>
        <footer className="text-righ text-lg- bg-light text-muted">
        
        <div className="text-left p-5">
          <p>
            <i className="fas fa-home me-3"></i> Ahmedabad, India
          </p>
          <p>
            <i className="fas fa-envelope me-3">            
            <a href="people@seriesfriendly.com"> people@seriesfriendly.com </a> </i>
           
          </p>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://seriesfriendly.com/">
            seriesfriendly.com
          </a>
        </div>
      </footer>
      </>

    )
}
export default Footer;