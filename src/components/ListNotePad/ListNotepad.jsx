import React, { Component } from 'react'
import CardNote from '../CardNote/CardNote'
import "./style.css"

class ListNotepad extends Component {
  render(){
    return(
      <ul className="lista-notas">
        {this.props.notes.map((note, index) => {
          return(
            <li className="lista-notas_item" key={index}>
              <CardNote title={note.title} text={note.text}/>
            </li>
          )
        })}
      </ul>
    )
  }   
}

export default ListNotepad;