import { Button } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Contador({ initialValue }) {
  const [contagem, setContagem] = useState(initialValue);

  const titulosPositivos = ["WOW!", "Parabens!", "Muito bem!", "Incrível!"];
  const titulosNegativos = [
    "Cuidado!",
    "Lado Errado!",
    "Preste Atenção!",
    "Não vá por aí",
  ];

  const incrementar = () => {
    if ((contagem + 1) % 10 === 0) {
      const titulo =
        titulosPositivos[Math.floor(Math.random() * titulosPositivos.length)];
      alerta(contagem + 1, titulo);
    }
    setContagem(contagem + 1);
  };

  const decrementar = () => {
    if ((contagem - 1) % 10 === 0) {
      const titulo =
        titulosNegativos[Math.floor(Math.random() * titulosNegativos.length)];
      alerta(contagem - 1, titulo);
    }
    setContagem(contagem - 1);
  };

  const alerta = (num, titulo) => {
    Swal.fire({
      icon: "info",
      title: titulo,
      text: `Você atingiu ${num}!`,
      position: "bottom-end",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      toast: true,
    });
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={incrementar}>
        Incrementar
      </Button>
      <p>{contagem}</p>
      <Button variant="contained" color="error" onClick={decrementar}>
        Decrementar
      </Button>
    </>
  );
}

export default Contador;
