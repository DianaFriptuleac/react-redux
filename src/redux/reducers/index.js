const initialState = {
    listOfJobs: {
        content: [],
    },
    // lo stato per le aziende preferite
    myList: []  
}

const mainReducer = (state = initialState, action) => {
    switch(action.type)  {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                 // aggiorno myList
                myList: [...state.myList, action.payload],
            }

        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                myList: state.myList.filter(
                    // aggiorno myList
                    (company) => company !== action.payload 
                )
            }

        default:
            return state 
    }
}

export default mainReducer;

