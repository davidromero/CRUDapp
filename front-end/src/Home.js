import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div className="stuff">
          <h2 >Car Data Analysis Guatemala</h2>
          <article>
              <p>Esta pagina brindara informacion relevante segun el vehiculo que se ingrese. Datos como
              precio promedio del mercado, volumen de carros en circulacion, año, modelos, etc. Se utilizara un sistema de
              web scrapping para recolectar informacion acerca del mercado de los carros.</p>
          </article>
        <h2>Datos relevantes</h2>
        <p>Usuario debera ingresar los siguientes datos como minimo para realizar la busqueda en la web de su vehiculo</p>
        <ol>
          <li>Tipo de Vehiculo</li>
          <li>Marca</li>
          <li>Modelo</li>
          <li>Año</li>
          <li>Precio estimado</li>
        </ol>
        <li><img src="https://i.redd.it/6jqyiwc3i8k11.png" alt="golf"/></li>
      </div>
    );
  }
}


export default Home;
