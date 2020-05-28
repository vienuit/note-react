import React, { Component } from 'react';
import {connect} from 'react-redux';
class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: "",
            noteContent: '',
            id : ''
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        
        this.setState({
            [name]:value
        });
    }
    addData = (title, content) => {
        var item = {};
        item.noteTitle = title;
        item.notecontent = content;
        // // gửi  item len app để app xu li
        // console.log(item);
        // this.props.getData(item);

        // dùng redux nè
        //item = JSON.stringify(item);
        this.props.addDataStore(item);  // sử dụng  reducer trong store ,// dispaatch ADD_DATA
        this.props.alertOn("Thêm thành công",'success');
    }

    render() {
        return (
            <div className="col-4">
              <h3>Thêm Note</h3>
            <form>
            <div className="form-group">
                <input  onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
                <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
            </div>
            <h5>Nội dung Note</h5>
            <div className="form-group">
                <textarea   onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Nội dung note"/>
                <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
            </div>
            <button type="reset"  onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)}  className="btn btn-primary btn-block">Thêm</button>
            </form>
            </div>
        );
    }
}


const  mapStateToProps = (state, ownProps) => {
    return {
        infoItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        // editDataStore: (getItem) => {
        //     dispatch({type:"EDIT",getItem})
        // },
        // changEditStatus: () => {
        //     dispatch({type:"CHANGE_EDIT"})
        // },
        alertOn: (alertContent,alertStyle) => {
            dispatch({type:"ALERT_ON",alertContent,alertStyle})
        },
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
