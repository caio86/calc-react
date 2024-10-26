import { Button } from "@mui/material";
import React, { useState } from "react";

function Contador({ initialValue }) {
  let [contagem, setContagem] = useState(initialValue);

  const incrementar = () => {
    setContagem(contagem + 1);
  };

  const decrementar = () => {
    setContagem(contagem - 1);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={incrementar}>
        Incrementar
      </Button>
      <p>{contagem}</p>
      <Button variant="contained" color="secondary" onClick={decrementar}>
        Decrementar
      </Button>
    </>
  );
}

export default Contador;
