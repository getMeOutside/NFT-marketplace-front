import { SET_CARDS } from "../components/types/types";

const initialState = {
  cards: []
}

const CardsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CARDS: {
      return {
        ...state,
        cards: action.data
      }
    } 
    default:
      return {...state};
  }
}

export default CardsReducer;
