import React from "react";
import PropTypes from "prop-types";
const userPlaceholderImage = require("../images/user-placeholder.svg");
const Member = ({
  id,
  avatar = null,
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  role,
  onClick
}) => (
  <li onClick={e => onClick(id, e)}>
    <div className="avatar">
      <img
        alt={firstName + " " + lastName}
        src={avatar || userPlaceholderImage}
      />
    </div>
    <div className="details">
      <p className="name">
        {firstName} {lastName} {role === "admin" && <span>(Admin)</span>}
      </p>
      <p className="text-muted phone-number">{phoneNumber}</p>
      <p className="text-muted email-address">{emailAddress}</p>
    </div>
    <style jsx>{`
      li {
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .avatar {
        flex-basis: 80px;
        padding: 10px;
      }

      .avatar img {
        width: 100%;
      }

      .details {
        flex: 1;
        padding: 10px;
      }

      .name {
        margin: 0;
        font-size: 16px;
      }

      .phone-number {
        margin: 0;
      }

      .email-address {
        margin: 0;
      }
    `}</style>
  </li>
);

Member.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default Member;
