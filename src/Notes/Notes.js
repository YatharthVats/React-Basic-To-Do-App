import React,{Component} from 'react';
import Note from './Note/Note';

class Notes extends Component{
  state={
    editNote:"",
    editedIndex:0
  }

  handleEditedNote=(note,index)=>{
    this.setState({
      editNote:note,
      editedIndex:index
    });
    console.log("Notes edit fn");
    console.log(note);
    console.log(index);
    this.props.edit(note,index);
  }

    render(){
        return this.props.notes.map((note,index) => {
          return (<Note
          delete={() =>this.props.delete(index)}
          edit={this.handleEditedNote}
          key={note.id}
          id={note.id}
          note_content={note.note_content}/>);
         });
        };
}

export default Notes;