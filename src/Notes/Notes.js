import React,{Component} from 'react';
import Note from './Note/Note';

class Notes extends Component{
    render(){
        return this.props.notes.map((note,index) => {
          return (<Note
            key={note.id}
          note_content={note.note_content}/>);
         });
        };
}

export default Notes;