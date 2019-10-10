import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchItems = () => dispatch => {
  let itemarray;

  dispatch({ type: START_FETCHING });
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://rsbuddy.com/exchange/summary.json"
    )
    .then(
      response => (
        (itemarray = Object.values(response.data)),
        console.log(itemarray),
        dispatch({ type: FETCH_SUCCESS, payload: itemarray })
      )
    )
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
};
