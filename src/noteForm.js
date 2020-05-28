import React, { Component } from 'react';
import {connect} from 'react-redux';

// Đây là Form Sửa

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // state để lấy dữ liệu nhập vào và gửi lên hàm sửa
            // state to get input data and send it to the edit function
            noteTitle: "",
            noteContent: '',
            id : ''
        }
    }
    
    UNSAFE_componentWillMount() {
        if(this.props.infoItem){
            this.setState({   // edit case, thì có id
                noteTitle: this.props.infoItem.noteTitle,
                noteContent: this.props.infoItem.noteContent,
                id: this.props.infoItem.id
            });
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

        // ở đây chỉ sửa, ko có add

        if(this.state.id){ // edit case
            console.log('dang sua du lieu');
            var editObject = {};
            editObject.id = this.state.id;
            editObject.noteTitle = this.state.noteTitle ;
            editObject.noteContent = this.state.noteContent;

            this.props.editDataStore(editObject);
            this.props.changEditStatus(); // tắt form
            this.props.alertOn("sửa thành công", 'success');
            
        }
        // else{ //add case
        //     var item = {};
        //     item.noteTitle = title;
        //     item.notecontent = content;
        //     // // gửi  item len app để app xu li
        //     // console.log(item);
        //     // this.props.getData(item);
    
        //     // dùng redux nè
        //     //item = JSON.stringify(item);
        //     this.props.addDataStore(item);  // sử dụng  reducer trong store ,// dispaatch ADD_DATA
        //     this.props.alertOn("Thêm thành công",'success');
        // }
   
    }
    // printTitle = () => {
    //     if(this.props.addStatus){
    //         // true = add case
    //         return <h4>Thêm Note</h4>
    //     }
    //     else{
    //         return <h4>Sửa Note</h4>
    //     }
    // }
    render() {
        console.log('edittt ' + JSON.stringify( this.props.infoItem));
        
        
        
        return (
            <div className="col-4">
             <h3>Sửa Note</h3>
            <form>
            <div className="form-group">
                <input defaultValue={this.props.infoItem.noteTitle} onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
            </div>
            <h5>Nội dung Note</h5>
            <div className="form-group">
                <textarea defaultValue={this.props.infoItem.noteContent}  onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Nội dung note"/>
            </div>
            <button type="reset"  onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)}  className="btn btn-primary btn-block">Lưu</button>
            </form>
            </div>
        );
    }
}


const  mapStateToProps = (state, ownProps) => {
    return {
        testThoi: state.testConnect,
        infoItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT",getItem})
        },
        changEditStatus: () => {
            dispatch({type:"CHANGE_EDIT"})
        },
        alertOn: (alertContent,alertStyle) => {
            dispatch({type:"ALERT_ON",alertContent,alertStyle})
        },
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}
//this.props.addDataStore()
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
//export default NoteForm;