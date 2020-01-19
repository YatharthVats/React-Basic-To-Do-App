import React,{Component} from 'react';
import styles from "./Note.module.css";

class Note extends Component{
    render(){
        return(
            <div className={styles.Note}>
                <div>{this.props.note_content}</div>
                <button className={styles.NoteEdit}> Edit</button>
                <button type="button" className="close" aria-label="Close" style={{backgroundColor:"red"}}>
                        <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default Note;