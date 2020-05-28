import React, { Component } from 'react';
import {connect} from 'react-redux';

class Nav extends Component {

  handleAdd = (event) => {
    event.preventDefault();
    //this.props.changEditStatus();
    if(this.props.isEditForm){
      this.props.changEditStatus();
    }
    this.props.changAddStatus();
  }
    render() {
        return (
            <div>
         <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor: 'black'}}>
          <a className="navbar-brand" href="o">React-Redux-Firebase</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="collapse navbar-collapse  justify-content-end" id="collapsibleNavId">
            <ul className="navbar-nav  mt-2 mt-lg-0 float-right">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={(event) => this.handleAdd(event) }>Thêm ghi chú</a>
              </li>
 
            </ul>
          </div>
        </nav>

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

      changEditStatus: () => {
          dispatch({type:"CHANGE_EDIT"})
      },
      changAddStatus: () => {
        dispatch({type:"CHANGE_ADD_STATUS"})
    }

  }
}
//this.props.addDataStore()

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
//export default Nav;