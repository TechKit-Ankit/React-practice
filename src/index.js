import React from 'react';
import ReactDOM from 'react-dom/client';

function Card(props) {
  return (
    <div>
  <h2>{props.name}</h2>
  <img src={props.img}></img>
  <p>{props.tel}</p>
  <p>{props.email}</p>
</div>
  );
}
const myelement = (<div>
  <h1>My Contacts</h1>

 <Card name="kelya Dumas" img="https://randomuser.me/api/portraits/women/95.jpg" tel="+123 1231 120"email="kelya.dumas@example.com"/>
 <Card name="Agostinho Mendes" img="https://randomuser.me/api/portraits/men/13.jpg" tel="+790 615 7091"email="marvin.carpenter@example.com"/>
 <Card name="Elfriede Born" img="https://randomuser.me/api/portraits/women/18.jpg" tel="+0172-7452479"email="elfriede.born@example.com"/>
</div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myelement);