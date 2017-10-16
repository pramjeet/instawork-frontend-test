import initialState from "./initial-state";

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_MEMBER":
      const member = action.payload.member;
      let newMembers = [...state.members];
      newMembers.push({
        id: member.id,
        firstName: member.firstName,
        lastName: member.lastName,
        phoneNumber: member.phoneNumber,
        emailAddress: member.emailAddress,
        role: member.role
      });
      return {
        ...state,
        members: newMembers
      };

    case "SAVE_MEMBER":
      return {
        ...state,
        members: state.members.map(member => {
          if (member.id === action.payload.member.id) {
            return action.payload.member;
          } else {
            return member;
          }
        })
      };

    case "DELETE_MEMBER":
      return {
        ...state,
        members: state.members.filter(member => {
          if (member.id === action.payload.memberId) {
            return false;
          } else {
            return true;
          }
        })
      };

    case "MEMBER_ID_TO_EDIT":
      return {
        ...state,
        memberIdToEdit: action.payload.memberIdToEdit
      };

    case "TOGGLE_NEW_MEMBER_FORM":
      return {
        ...state,
        isNewMemberFormOpen: !state.isNewMemberFormOpen
      };

    default:
      return state;
  }
}
