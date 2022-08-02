/* eslint-disable prettier/prettier */
const initialState = {
  sidebarShow: true,
}

export default function theme(state = initialState, { type, ...rest }) {
  switch (type) {
    case 'set':
      return {
        ...state,
        ...rest,
      }

    default:
      return state
  }
}
