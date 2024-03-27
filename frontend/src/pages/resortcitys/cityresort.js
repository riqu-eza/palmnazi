import React from "react";
import "./resort.css";
import anim1 from "../../img/coast5.jpg";

const images = [
  anim1,anim1,anim1,anim1,anim1,anim1
];

const names =[
    "Nairobi",
    "Coastal",
    "Riftvalley",
    "Nyanza",
    "Northrift",
    "Mt kenya",
]

function importAll(r) {
    let image = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return image;
  }
  
  const image = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));
  
const Resortcity = () => {

  return (
    <div className="container">
      <div className="row">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundImage: `url(${image})` }}
          >
            <a href="#" className="link"> {names[index]}</a>
          </div>
        ))}
      </div>
      <div className="row">
        {images.slice(3, 6).map((image, index) => (
          <div
            key={index + 3}
            className="box"
            style={{ backgroundImage: `url(${image})` }}
          >
            <a href="#" className="link"> {names[index + 3 ]}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resortcity;
