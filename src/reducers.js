import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      const newState = {...state,favs: [...state.favs, action.payload]};
      writeFavsToLocalStorage(newState);
      return newState;

    case FAV_REMOVE:
      const removeFavState = {...state,
        favs: state.favs.filter((fav) => fav.id !== action.payload),
        };
        writeFavsToLocalStorage(removeFavState);
        return removeFavState;
      return 

    case FETCH_SUCCESS:
      return {
        ...state,
        current: action.payload,
        loading: false,
        error:null,
      };

    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
        current: null,
        error: null,
      };

    case FETCH_ERROR:
      return {
        ...state,
      error: action.payload,
      loading:false,
      current: null,
    };

    case GET_FAVS_FROM_LS:
      return state;

    default:
      return state;
  }
}
