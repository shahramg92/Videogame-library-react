import Immutable from 'immutable';
// Here the constants file comes handy
import {
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_GAME,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAILURE
} from '../constants/games';


// The initial state is just an empty Map
const initialState = Immutable.Map();

// That's a very standard reducer function to return a new state given a dispatched action
export default (state = initialState, action) => {
  switch (action.type) {
  // GET_GAMES_SUCCESS case return a new state with the fetched games in the state
    case DELETE_GAME_SUCCESS:
    case GET_GAMES_SUCCESS: {
      console.log(action.games.data);
      return state.merge({ list: action.games.data });
    }
    case SET_SEARCH_BAR: {
      return state.merge({ searchBar: action.keyword });
    }
    case SHOW_SELECTED_GAME: {
      return state.merge({ selectedGame: action.game });
    }
    case DELETE_GAME_FAILURE:
  // In case of failure it simplies returned a new empty state
    case GET_GAMES_FAILURE: {
      return state.clear();
    }
    default:
      return state;
  }
}
