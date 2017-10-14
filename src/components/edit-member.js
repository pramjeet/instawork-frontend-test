import React, { Component } from "react";
import PropTypes from "prop-types";

const Member = ({
  id,
  avatar = null,
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  role
}) => (
  <li>
    <div className="avatar">
      <img alt={firstName + " " + lastName} src={avatar} />
    </div>
    <div className="details">
      <p className="name">
        {firstName} {lastName} {role === "admin" && <span>(Admin)</span>}
      </p>
      <p className="phoneNumber">{phoneNumber}</p>
      <p className="emailAddress">{emailAddress}</p>
    </div>
    <style jsx>{`
      li {
        border-bottom: 1px solid #eee;
        display: flex;
      }

      .avatar {
        flex-basis: 100px;
      }

      .details {
        flex: 1;
      }
    `}</style>
  </li>
);

Member.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default Member;
