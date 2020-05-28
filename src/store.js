import {noteData} from './firebaseConnect';

var redux = require('redux');


const noteInitialState = {
    testConnect :'test thoai',
    isEdit : false,
    editItem: {},
    isAdd: false,
    alertShow: false,
    alertContent: '',
    alertStyle:''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            console.log('them du lieu ' + action.getItem + ' thanh cong');
            return state
        case "CHANGE_EDIT":
            return {...state, isEdit: !state.isEdit}
        case "CHANGE_ADD_STATUS":
                return {...state, isAdd: !state.isAdd}
        case "GET_EDIT_DATA":
            return {...state, editItem: action.editObject}
        case "EDIT":
            // update du lieu len database
            
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                notecontent: action.getItem.noteContent
            })
            console.log('update '+ JSON.stringify(action.getItem) + ' thanh cong');
                return {...state, editItem: {}}
        case "DELETE":
            
            noteData.child(action.deleteId).remove();
            console.log('da xoa phan tu co id '+ action.deleteId);
            console.log('ehichioasdf');
                break;
        case "ALERT_ON":
                return {...state, alertShow: true, alertContent:action.alertContent,alertStyle: action.alertStyle}
        case "ALERT_OFF":
                return {...state, alertShow: false}
            //return state
        default:
            return state
    }
}


var store = redux.createStore( allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
    
})
export default store;