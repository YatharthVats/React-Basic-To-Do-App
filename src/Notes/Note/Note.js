import React,{Component} from 'react';
import styles from "./Note.module.css";

class Note extends Component{
    state={
        editNote:false,
        edited_note_content:this.props.note_content
    }

    startEditingHandler=()=>{
        this.setState({editNote:true});
    };

    handleEdit=(event)=>{
        this.setState({edited_note_content:event.target.value});
    };

    noteEditHandler=()=>{
 //       const editedNote=this.state.edited_note_content;
        console.log("Note edit fn");
        console.log(this.state.edited_note_content);
        console.log(this.props.id);
        this.props.edit(this.state.edited_note_content,this.props.id);
        
    }

    render(){
        let editArea=null;
        if(this.state.editNote===true)
        {
            editArea=(
                <form onSubmit={(e) => {this.noteEditHandler(); e.preventDefault();this.setState({editNote:false});}}> 
                <input id="EditNote" autoFocus={true} defaultValue={this.props.note_content} onChange={this.handleEdit}></input>
                <button id="UpdateNote" type="submit">
                    Submit
                </button>
                </form>
            );
        }

        return(
            <div className={styles.Note}>
                <div>{this.props.note_content}</div>
                <button className={styles.NoteEdit} onClick={this.startEditingHandler}> Edit</button>
                <button type="button" className="close" aria-label="Close" style={{backgroundColor:"red"}} onClick={this.props.delete}>
                        <span aria-hidden="true">&times;</span>
                </button>
                {editArea}
            </div>
        );
    }
}

export default Note;