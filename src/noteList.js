import React, { Component } from 'react';
import {noteData} from './firebaseConnect';
import NoteItem from './noteItem';


class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase :[]
        }
    }
    
    UNSAFE_componentWillMount() {  // thực hiện trước render
        noteData.on('value', (notes) => {
            var arrayData = [];
            notes.forEach(element => {
                const key = element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().notecontent;
                arrayData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })
            }) 
            this.setState({
                dataFirebase : arrayData
            });
            
        })
    }
    
    getData = () => {
        if(this.state.dataFirebase){
           return  this.state.dataFirebase.map( (value,key) => {
                return (
                    <NoteItem
                        key={key}
                        i = {key}
                        noteTitle={value.noteTitle}
                        noteContent={value.noteContent}
                        note = {value}
                    />
                )
            })
        }
        console.log(this.state.dataFirebase);
    }
    render() {
       
        return (
            <div class="col">
            <div id="noteList" role="tablist" aria-multiselectable="true">
            {this.getData()}
            </div>
        </div>
        );
    }
}

export default NoteList;