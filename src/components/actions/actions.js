import { SET_CARDS } from "../types/types"

export const setCardsAction = (data) => {
  return {
    type: SET_CARDS,
    data
  }
}