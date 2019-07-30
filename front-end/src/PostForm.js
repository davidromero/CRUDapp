import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const title = this.getTitle.value;
 const message = this.getMessage.value;
 const message2 = this.getMessage2.value;
 const message3 = this.getMessage3.value;
 const message4 = this.getMessage4.value;
 const data = {
  id: new Date(),
  title,
  message,
  message2,
  message3,
  message4,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getTitle.value = '';
 this.getMessage.value = '';
 this.getMessage2.value = '';
 this.getMessage3.value = '';
 this.getMessage4.value = '';
}
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Ingrese Vehiculo</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getTitle = input}
   placeholder="Ingrese Tipo de Vehiculo" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getMessage = input}
   cols="28" placeholder="Ingrese Marca Vehiculo " /><br /><br />
   <textarea required rows="5" ref={(input) => this.getMessage2 = input}
   cols="28" placeholder="Ingrese Modelo Vehiculo" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getMessage3 = input}
   cols="28" placeholder="Ingrese Año del Vehiculo" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getMessage4 = input}
   cols="28" placeholder="Ingrese Precio del Vehiculo" /><br /><br />
   <button>Agregar</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);