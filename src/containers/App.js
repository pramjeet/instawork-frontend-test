import React, { Component } from "react";
import { connect } from "react-redux";
import MembersList from "../components/members-list";
import EditMember from "../components/edit-member";

const getMemberToEdit = state => {
  if (!state.memberIdToEdit) {
    return null;
  }

  for (let i = 0; i < state.members.length; i++) {
    if (state.members[i].id === state.memberIdToEdit) {
      return state.members[i];
    }
  }
};

const mapStateToProps = state => {
  return {
    members: state.members,
    memberIdToEdit: state.memberIdToEdit,
    isNewMemberFormOpen: state.isNewMemberFormOpen,
    memberToEdit: getMemberToEdit(state)
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
    },
    toggleNewMemberForm: () => {
      dispatch({
        type: "TOGGLE_NEW_MEMBER_FORM"
      });
    },
    saveMember: member => {
      dispatch({
        type: "SAVE_MEMBER",
        payload: {
          member: member
        }
      });
    },
    deleteMember: memberId => {
      dispatch({
        type: "DELETE_MEMBER",
        payload: {
          memberId: memberId
        }
      });
    },
    addMember: member => {
      dispatch({
        type: "ADD_NEW_MEMBER",
        payload: {
          member: member
        }
      });
    }
  };
};

class App extends Component {
  render() {
    return (
      <div className="app">
        {!this.props.memberIdToEdit &&
          !this.props.isNewMemberFormOpen && (
            <div className="members-list-container">
              <div className="list-header">
                <h1 className="list-title">
                  Team members
                  <p className="small text-muted">
                    You have {this.props.members.length} team members
                  </p>
                </h1>
                <button
                  onClick={this.props.toggleNewMemberForm}
                  className="btn btn-sm btn-primary"
                >
                  +
                </button>
              </div>
              <MembersList
                onItemClick={(id, e) => this.props.selectMemberIdToEdit(id)}
                members={this.props.members}
              />
            </div>
          )}
        {this.props.memberIdToEdit && (
          <div className="edit-member-container">
            <div className="list-header">
              <h1 className="list-title">
                Edit team member
                <p className="small text-muted">
                  Edit name, contact info and role
                </p>
              </h1>
              <button
                onClick={e => this.props.selectMemberIdToEdit(null)}
                className="btn btn-sm btn-danger"
              >
                X
              </button>
            </div>
            <EditMember
              onDelete={memberId => {
                this.props.deleteMember(memberId);
                this.props.selectMemberIdToEdit(null);
              }}
              onSave={member => {
                this.props.saveMember(member);
                this.props.selectMemberIdToEdit(null);
              }}
              {...this.props.memberToEdit}
            />
          </div>
        )}
        {this.props.isNewMemberFormOpen && (
          <div className="new-member-container">
            <div className="list-header">
              <h1 className="list-title">
                Add a team member
                <p className="small text-muted">
                  Set name, contact info and role
                </p>
              </h1>
              <button
                onClick={this.props.toggleNewMemberForm}
                className="btn btn-sm btn-danger"
              >
                X
              </button>
            </div>
            <EditMember
              onSave={member => {
                this.props.addMember(member);
                this.props.toggleNewMemberForm();
              }}
            />
          </div>
        )}
        <style jsx>{`
          .app {
            width: 100%;
            height: 100%;
            max-width: 400px;
            margin: 20px auto;
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
