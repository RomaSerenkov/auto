export function autoFetchDataSuccess(autos) {
  return {
    type: "AUTOS_FETCH_DATA_SUCCESS",
    payload: autos
  }
}

export function autoFetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then(response => {
        if(!response.ok){
          throw new Error(response.statusText)
        }
        return response
      })
      .then(response => response.json())
      .then(autos => dispatch(autoFetchDataSuccess(autos)))
  }
}
