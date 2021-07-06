import React, { useState } from 'react';
import Footer from './Footer';

const Contact = () => {
    const [data, setdata] = useState({
        fullname :'',
        number : '',
        email : '',
        message : ''
    })
    const formSubmit=(e)=>{
        e.preventDefault(); 
    }

    const inputEvent=(event)=>{
        const {name, value}= event.target;

        setdata((preVal) => {
            return{
                ...preVal,
                [name]: value,
            }
        })
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Full Name : </label>
                <div>
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  capture="form-control"
                  id="exampleFormControlInput1"
                />
                </div>
                
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Number : </label>
                <div><input
                  type="number"
                  onChange={inputEvent}
                  value={data.number}
                  name="number"
                  capture="form-control"
                  id="exampleFormControlTextarea1"
                /></div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Email address</label>
               <div> <input
                  type="email"
                  value={data.email}
                  onChange={inputEvent}
                  name="email"
                  capture="form-control"
                  id="exampleFormControlInput1"
                /></div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Write your message
                </label>
                <textarea
                name="message"
                value={data.message}
                onChange={inputEvent}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Contact;
