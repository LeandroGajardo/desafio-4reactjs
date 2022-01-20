import React, { useState } from "react";
import './ItemCount.css'

const ItemCount = () => {
  const [contador, setContador] = useState(0);
  const suma = () => {
    return setContador(contador + 1);
  };
  const resta = () => {
    if (contador == 0) {
      return contador;
    } else {
      return setContador(contador - 1);
    }
  };
  return (
    <>
      <div className="ItemCounter">
        <button className="boton1" onClick={suma}>+</button>
        <p className="contador">{contador}</p>
        <button className="boton2" onClick={resta}>-</button>
      </div>
    </>
  );
};

export default ItemCount;