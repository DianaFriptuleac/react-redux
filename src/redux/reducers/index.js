const initialState = {
  // lo stato per le aziende preferite
  myList: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        myList: {
          ...state.myList,
          // Aggiorno myList.content
          content: [...state.myList.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        myList: {
          ...state.myList,
          content: state.myList.content.filter(
            (company) => company !== action.payload
          ), // Filtro myList.content
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
