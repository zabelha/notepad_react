import React, { Component } from 'react';
import ListNotepad from "./components/ListNotePad/ListNotepad"
import FormNotepad from './components/FormNotepad/FormNotepad';
import './assets/App.css'
import './assets/index.css'

class App extends Component{

  constructor(){
    super()
    this.state = {
      notes:[]
    }
  }

  createNote(title, text){
    const NewNote = {title, text}
    const NewArrayNotes = [...this.state.notes,NewNote]
    const NewState = {
      notes:NewArrayNotes
    }
    this.setState(NewState)
  }

  render(){
    return (
      <section className="conteudo">
        <FormNotepad createNote={this.createNote.bind(this)}/>
        <ListNotepad notes = {this.state.notes}/>
      </section>
      );
  }
  
}

export default App;

