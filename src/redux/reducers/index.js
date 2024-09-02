// qui dentro scrivo il reducer per la mia app

//redux ha bisogn di un valore  iniziale per lo stato
const initialState = {
  //organizzo in sotto-oggetti
  listOfJobs: {
    content: [],
  },
  //scrivo un nuovo stato per le aziende preferite
  myList: [],
};

//initialState- il valore di defaul di state
const mainReducer = (state = initialState, action) => {
  //state- stato corrente dii redux
  //action-azione che e stata appena dispachata

  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        //ritorno il nuovo stato di redux
        //ritorno un nuovo oggetto
        ...state,
       myList: [...state.myList, action.payload],
        },

        case 'REMOVE_FROM_FAVOURITES':
            return {
                ...state,
                favouriteCompanies: state.favouriteCompanies.filter(
                    (company) => company !== action.payload
                )
            }

        default:
            return state 
    }
}

export default mainReducer;
