import React from "react";
import contacts from "../contact";
import Card from "./card";

 function App() {
    return (
        <div className="cardcontainer">
      <h1 className="heading">My Contacts</h1>
      
      {contacts.map((contact) => (
        <Card name={contact.name} 
        img={contact.imgURL} 
        phone={contact.phone} 
        email={contact.email} 
        company={contact.company}
        />))}
      </div>
    )
 }

 export default App;