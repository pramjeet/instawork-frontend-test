import initialState from "./initial-state";

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TEAM_MEMBER":
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

    case "MEMBER_ID_TO_EDIT":
      return {
        ...state,
        memberIdToEdit: action.payload.memberIdToEdit
      };

    default:
      return state;
  }
}
