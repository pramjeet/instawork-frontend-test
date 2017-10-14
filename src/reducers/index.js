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
      const memberToChange = action.payload.member;
      let members = state.members.map(member => {
        if (member.id === memberToChange.id) {
          return memberToChange;
        } else {
          return member;
        }
      });

      return {
        ...state,
        members: members
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
