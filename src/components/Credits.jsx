import React from "react";
import { Container } from "react-bootstrap";

import '../style-sheets/Credits.css';

function Credits() {
  return (
    <footer className="footer">
      <Container>
        <center>
          <p>Banner background from <a href="https://www.freepik.es/vector-gratis/fondo-galaxia-rosa-azul-acuarela_21935015.htm">Freepik</a></p>
          <p><a href="https://www.freepik.es/vector-gratis/lindo-astronauta-tocando-estrella-ilustracion-icono-vector-dibujos-animados-espacio-ciencia-tecnologia-aislado_29314439.htm#page=2&query=astronaut&position=33&from_view=search&track=robertav1_2_sidr">Banner moving image from catalyststuff</a> in Freepik</p>
        </center>
      </Container>
    </footer>

  );

}

export default Credits;