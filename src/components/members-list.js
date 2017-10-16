import React from "react";
import PropTypes from "prop-types";
import Member from "./members-listitem";

const MembersList = ({ onItemClick, members }) => (
  <ul>
    {members.map(member => (
      <Member
        onClick={(id, e) => onItemClick(id, e)}
        key={member.id}
        {...member}
      />
    ))}
    <style jsx>{`
      ul {
        padding: 0;
        list-style: none;
        margin: 0;
      }
    `}</style>
  </ul>
);

MembersList.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      emailAddress: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MembersList;
