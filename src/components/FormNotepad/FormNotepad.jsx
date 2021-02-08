import React, { Component } from 'react';
import "./style.css"

class FormNotepad extends Component { 
    constructor(props){
        super(props);
        this.title = "";
        this.text = "";
    }
    _handlerTitle(evento){
        evento.stopPropagation();
        this.title = evento.target.value
    }

    _handlerText(evento){
        evento.stopPropagation();
        this.text = evento.target.value
    }

    _createNote(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.createNote(this.title, this.text);
    }
    

    render(){
        return(
        <form className="form-cadastro"
            onSubmit={this._createNote.bind(this)}>
            <input 
                className="form-cadastro_input" 
                type="texte" 
                placeholder="Titulo"
                onChange={this._handlerTitle.bind(this)}/>
            <textarea 
                rows={15} 
                className="form-cadastro_input" 
                placeholder="Escreva sua nota"
                onChange={this._handlerText.bind(this)}>
            </textarea>
            <button className="form-cadastro_input form-cadastro_submit">Criar</button>
        </form>
        )
    }
}

export default FormNotepad;