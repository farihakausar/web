import React from "react";
import { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    number: "",
    messege: "",
  });
 
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `my name is ${data.fullname}.my mobile number is ${data.number} .my email address is ${data.email}. i want to deliver me messsge ${data.messege}`
    );
  };
  return (
    <div className="container">
      <form onSubmit={formSubmit}>
        <h1 className="text-center">CONTACT US</h1>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            full name
          </label>
          <input
            type="text"
            value={data.fullname}
            onChange={InputEvent}
            className="form-control"
            name="fullname"
            id="fullname"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={data.email}
            onChange={InputEvent}
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter uour email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            type="number"
            value={data.number}
            onChange={InputEvent}
            name="number"
            className="form-control"
            placeholder="Enter your number"
            id="number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            messege
          </label>
          <input
            type="text"
           
            onChange={InputEvent}
            name="messege"
            value={data.messege}
            className="form-control"
            placeholder="Enter your messge"
            id="messege"
          />
          <div className="btn">
            <button className="btn-primary"onSubmit={formSubmit}>SUBMIT NOW</button>
          </div>
        </div>
      </form>
    </div>
  );
}
