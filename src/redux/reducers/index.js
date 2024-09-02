// qui dentro scrivo il reducer per la mia app

//redux ha bisogn di un valore  iniziale per lo stato
const initialState = {
    //rganizzo in sotto-oggetti
    listOfJobs: {
        content: [],
    }
}

//initialState- il valore di defaul di state
const mainReducer = (state = initialState, action) =>{
//state- stato corrente dii redux
//action-azione che e stata appena dispachata

   switch(action.type)  {

    case 'ADD_TO_FAVOURITES':
        return{
            //ritorno il nuovo stato di redux
            //ritorno un nuovo oggetto
            ...state,
            listOfJobs: {
                ...state.listOfJobs,
                content: [...state.listOfJobs.content, action.payload],
            }
        }

        case 'REMOVE_FROM_FAVOURITES':
            return{
                ...state,
                listOfJobs: {
                    ...state.listOfJobs,
                    content: state.listOfJobs.content.filter((jobData, _id) => _id !== action.payload)
                }
            }
    default:
        return state 
   }
}
export default mainReducer