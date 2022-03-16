const COUNTER = 'COUNTER'
const initialState = {
  value: 0
}

const TestReducer = (state = initialState, action) => {
  switch(action.type) {
    case COUNTER : {
      console.log(111);
      return state
    }
    default: {
      return state
    }
  }
}

export const updateCounter = () => {
  return {
    type: COUNTER
  }
}

export default TestReducer;