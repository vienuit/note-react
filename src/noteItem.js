import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {

    editItem = () => {

        
        this.props.changeEdit();
        if(this.props.isAddForm){
            this.props.changAddStatus();
        }
        
        console.log(this.props.getEditData(this.props.note));
        
    }
    deleteData = () => {
        console.log(this.props.note);
        
       this.props.getDeleteData(this.props.note.id)
       this.props.alertOn('Xóa thành công: ' + this.props.note.noteTitle, 'info');
    }

    render() {
        return (
                <div className="card">
                    <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={'#number' + this.props.i} aria-expanded="true" aria-controls="noteConten1">
                        {this.props.noteTitle}
                        </a>
                        <button class="btn btn-outline-info float-right ml-2" onClick = { () => this.editItem() }>
                                Sửa <span class="badge badge-primary"></span>
                        </button>
                        <button class="btn btn-outline-info float-right" onClick = { () => this.deleteData()}>
                                Xóa <span class="badge badge-primary"></span>
                        </button>
                    </h5>
                    </div>
                    <div id={"number" +  this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEdit: () =>{
            dispatch({type:"CHANGE_EDIT"})
        },
        changAddStatus: () => {
            dispatch({type:"CHANGE_ADD_STATUS"})
        },
        getEditData: (editObject) =>{
            dispatch({
                type:"GET_EDIT_DATA",
                editObject
            })
        },
        getDeleteData: (deleteId) =>{
            dispatch({
                type:"DELETE",
                deleteId
            })
        },
        alertOn: (alertContent, alertStyle) => {
            dispatch({type:"ALERT_ON",alertContent,alertStyle})
        },
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);

//export default NoteItem;