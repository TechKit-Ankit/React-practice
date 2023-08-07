import React from "react";
import contacts from "../contact";
import Card from "./card";

 function App() {
    return (
        <div className="cardcontainer">
      <h1 className="heading">My Contacts</h1>
      <Card img={contacts[0].imgURL}
        name={contacts[0].name}
        phone={contacts[0].phone}
        email={contacts[0].email}
        company={contacts[0].company}
      />
      <Card img={contacts[1].imgURL}
      name={contacts[1].name}
      phone={contacts[1].phone}
      email={contacts[1].email}
        company={contacts[1].company}
      />
      <Card img={contacts[2].imgURL}
        name={contacts[2].name}
        phone={contacts[2].phone}
        email={contacts[2].email}
        company={contacts[2].company}
      />
      <Card img={contacts[3].imgURL}
      name={contacts[3].name}
        phone={contacts[3].phone}
        email={contacts[3].email}
        
      />
      <Card img={contacts[4].imgURL}
      name={contacts[4].name}
        phone={contacts[4].phone}
        email={contacts[4].email}   
        company={contacts[4].company}
      />
      <Card img={contacts[5].imgURL}
      name={contacts[5].name}
        phone={contacts[5].phone}
        email={contacts[5].email}
        company={contacts[5].company}
      />
      </div>
    );
 }

 export default App;