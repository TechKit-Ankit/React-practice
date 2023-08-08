import React from "react";
import Contactinfo from "./contactinfo";

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="rounded" src={props.img} alt="dummyalt" />
      </div>
      <div>
        <h2 className="name">{props.name}</h2>
        <Contactinfo itemlable="Contact" itemname={props.phone} />
        <Contactinfo itemlable="Email" itemname={props.email} />
        <Contactinfo itemlable="Company" itemname={props.company} />
      </div>
    </div>
  );
}
export default Card;
