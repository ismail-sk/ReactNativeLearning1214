import { useState } from "react";
//import ReactDOM from "react-dom";

var clr = "red", lst = "blue";
function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: clr
  });
  
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: clr }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

export default Car;