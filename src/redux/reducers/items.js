const initialState = {
  title: [],
  content: [],
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload,
      }
    case 'SET_CONTENT':
      return {
        ...state,
        content: action.payload,
      }

    default:
      return state;
  }
}

export default items;