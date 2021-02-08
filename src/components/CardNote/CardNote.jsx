import React, { Component } from 'react';
import "./style.css"

class CardNote extends Component {
    state = {  }
    render() { 
        return ( 
        <section className="card-nota">
          <header className="card-nota_cabecalho">
            <h5 className="card-nota_titulo">{this.props.title}</h5>
          </header>
          <p className="card-nota_texto">{this.props.text}</p>
        </section>
         );
    }
}
 
export default CardNote;