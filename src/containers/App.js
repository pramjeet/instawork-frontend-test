import React, { Component } from "react";
import { connect } from "react-redux";
import MembersList from "../components/members-list";
import EditMember from "../components/edit-member";

const mapStateToProps = state => {
  return {
    members: state.members,
    memberIdToEdit: state.memberIdToEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectMemberIdToEdit: id => {
      dispatch({
        type: "MEMBER_ID_TO_EDIT",
        payload: {
          memberIdToEdit: id
        }
      });
    }
  };
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="members-list-container">
          <div className="list-header">
            <h1 className="list-title">
              Team Members
              <p className="small text-muted">Click an item to edit</p>
            </h1>
            <button className="btn btn-sm btn-primary">+</button>
          </div>
          <MembersList
            onItemClick={(id, e) => this.props.selectMemberIdToEdit(id)}
            members={this.props.members}
          />
          {this.props.memberIdToEdit && (
            <div className="edit-member-container">edit container</div>
          )}
        </div>
        <style jsx>{`
          .app {
            width: 100%;
            height: 100%;
            max-width: 400px;
            margin: auto;
            padding: 20px 10px;
          }

          .members-list-container {
            border-radius: 3px;
            background-color: #fff;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
          }

          .list-header {
            padding: 10px;
            display: flex;
            align-items: center;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
          }

          .list-title {
            flex: 1;
            margin: 0;
            font-size: 18px;
          }

          .list-title .small {
            margin: 5px 0;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
