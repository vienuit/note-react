import React from 'react';
import './App.css';
import 'firebase/database';
import * as firebase from 'firebase/app';

import {noteData} from './firebaseConnect'
import Nav from './nav'
import NoteList from './noteList';
import NoteForm from './noteForm';
import {connect} from 'react-redux';
import AlertInfo from './AlertInfo';
import AddForm from './addForm';

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
    }
}

  addData = (item) => {
    noteData.push(item);
  }
  removeData = () => {
    var connectData = firebase.database().ref('/');
    connectData.child('note1').remove();
    console.log('xoa');
  }

  showEditForm = () => {
    if(this.props.isEditForm){
      return(
        <NoteForm /> 
      )
    }
  }
  showAddForm = () => {
    if(this.props.isAddForm){
      return(
        <AddForm/>
      )
    }
  }
  render(){

    console.log(noteData.once('value').then(function(snapshot){
      console.log(snapshot.val());
    }));

    return (
      <div className="App">
        <Nav/>
        <AlertInfo/>
        <div class="container">
          <div class="row">
              <NoteList/>
              {/* <NoteForm getData={(item) => this.addData(item)} /> */}
              
               {/* dùng redux */}
               {this.showEditForm()}
               {this.showAddForm()}
              
          </div>
        </div>
      </div>
    );
  }
}

const  mapStateToProps = (state, ownProps) => {
  return {
      isEditForm : state.isEdit,
      isAddForm : state.isAdd
  }
}

//this.props.addDataStore()

export default connect(mapStateToProps)(App);
//export default App;
