import React, { Component } from "react";
import PropTypes from "prop-types";

class EditMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //in case of new member, id will be generated randomly
      id: props.id || parseInt(Math.random() * 1000000, 10),
      avatar: props.avatar || null,
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      phoneNumber: props.phoneNumber || "",
      emailAddress: props.emailAddress || "",
      role: props.role || "regular"
    };
  }

  onSubmitForm = event => {
    event.preventDefault();
    this.props.onSave(
      {
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        emailAddress: this.state.emailAddress,
        role: this.state.role
      },
      event
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group">
            <label className="control-label">First Name</label>
            <input
              className="form-control"
              type="text"
              value={this.state.firstName}
              onChange={e => this.setState({ firstName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="control-label">Last Name</label>
            <input
              className="form-control"
              type="text"
              value={this.state.lastName}
              onChange={e => this.setState({ lastName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="control-label">Phone Number</label>
            <input
              className="form-control"
              type="text"
              value={this.state.phoneNumber}
              onChange={e => this.setState({ phoneNumber: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="control-label">Email Address</label>
            <input
              className="form-control"
              type="email"
              value={this.state.emailAddress}
              onChange={e => this.setState({ emailAddress: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="control-label">Role</label>
            <select
              className="form-control"
              type="text"
              value={this.state.role}
              onChange={e => this.setState({ role: e.target.value })}
            >
              <option value="admin">Admin - Can delete members </option>
              <option value="regular">Regular - Can't delete members </option>
            </select>
          </div>

          <div className="btns clearfix">
            {this.props.id && (
              <button
                onClick={e => this.props.onDelete(this.props.id)}
                type="button"
                className="btn btn-danger delete-btn pull-left"
              >
                Delete
              </button>
            )}

            <button
              type="submit"
              className="btn btn-primary save-btn pull-right"
            >
              Save Changes
            </button>
          </div>
        </form>
        <style jsx>{`
          form {
            padding: 20px;
          }

          .btns {
            margin-top: 40px;
          }
        `}</style>
      </div>
    );
  }
}

EditMember.propTypes = {
  onCancel: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  id: PropTypes.number,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  emailAddress: PropTypes.string,
  role: PropTypes.string
};

export default EditMember;
