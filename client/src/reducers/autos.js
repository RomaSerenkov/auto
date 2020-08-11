
export function autos(state = [], action){
  switch (action.type) {
    case "AUTOS_FETCH_DATA_SUCCESS":
      return action.payload
      break
    default:
    return state
  }
}
