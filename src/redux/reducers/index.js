const initialState = {
    listOfJobs: {
        content: [],
    },
    myList: []  // Nuovo stato per le aziende preferite
}

const mainReducer = (state = initialState, action) => {
    switch(action.type)  {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                favouriteCompanies: [...state.myList, action.payload],
            }

        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                favouriteCompanies: state.myList.filter(
                    (company) => company !== action.payload
                )
            }

        default:
            return state 
    }
}

export default mainReducer;

