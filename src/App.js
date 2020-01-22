import React,{Component} from 'react';
import Notes from './Notes/Notes';
import './App.css';

class App extends Component{
    state={
        notes: [
         { id:"1",note_content: "Testing 1"},
         { id:"2",note_content: "Testing 2"}
        ],
        numberOfNotes:2,
        totalNumberOfNotes:2,
        currentPoints:0,
        inputNewNote:'',
        cantStore:false,
        editNote:false
    }

    addButtonHandler=()=>{
        var updatedNotes=[...this.state.notes];
        if (this.state.inputNewNote.length===0)
        {
            this.setState({cantStore:true});
            return;
        }
        else{
        this.setState({cantStore:false});
        var newNote={
            id:this.state.totalNumberOfNotes+1,
            note_content:this.state.inputNewNote
        }
        updatedNotes.push(newNote);
        this.setState((prevState,props)=>{
            return{
                notes:updatedNotes,
                numberOfNotes:prevState.numberOfNotes+1,
                totalNumberOfNotes:prevState.totalNumberOfNotes+1,
                inputNewNote:''
            };
        });  
    }
    }

    noteEditHandler=(editedNote,id)=>{        
        console.log("App.js edit fn");
        console.log(editedNote);
        console.log(id);
        const noteIndex=this.state.notes.findIndex(n=>{
            return n.id===id;
          });
        var updatedNotes=[...this.state.notes];
        var note={ ...this.state.notes[noteIndex] };
        note.note_content=editedNote;
        updatedNotes[noteIndex]=note;
        this.setState( 
            {notes: updatedNotes});
    }

    noteDeleteHandler=(noteIndex)=>{
          const updatedNotes=[...this.state.notes];
          updatedNotes.splice(noteIndex,1);
          this.setState((prevState,props)=>{
            return{
                notes:updatedNotes,
                numberOfNotes:prevState.numberOfNotes-1,
                inputNewNote:''
            };
        });  
    };

    handleChange=(event)=> {
        this.setState({inputNewNote: event.target.value});
    }

    render()
    {
        let emptyNote=null;
    
    if (this.state.cantStore){
      emptyNote=(
          <div>
              Cant Store An Empty Note
              <button id="closeCantStore">Close</button>
          </div>  
      );
    }

        return(
            <div className="Base">
                <h1>Note Taking App</h1>
                <form onSubmit={(e) => {this.addButtonHandler(); e.preventDefault();}}> 
                <input id="NewNote" placeholder="Add new note..." autoFocus={true} value={this.state.inputNewNote} onChange={this.handleChange}></input>
                <button id="NewNoteAdd" type="submit">
                    Submit
                </button>
                </form>
            <div > Number Of notes: {this.state.numberOfNotes}</div>
            {emptyNote}
                <Notes notes={this.state.notes} delete={this.noteDeleteHandler} edit={this.noteEditHandler} editedNote={this.state.editedNote}></Notes>
            </div>
        );
    }
}

export default App;