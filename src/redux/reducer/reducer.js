import { GET_DATA } from "../actiontype/actiontype";

const initialState = {
    produitpost:[]
}

const reducerget= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_DATA:
    return { ...state, produitpost:payload }

  default:
    return state
  }
}
export default reducerget