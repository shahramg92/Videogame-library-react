import {takeLatest} from 'redux-saga';
import axios from 'axios';
import {
	put,
	select,
	call
} from 'redux-saga/effects';
import {
  GET_GAMES,
	DELETE_GAME,
  POST_GAME
} from '../constants/games';
import {
	getGamesSuccess,
	getGamesFailure,
	deleteGameSuccess,
	deleteGameFailure,
  postGameSuccess,
  postGameFailure
} from '../actions/games';

const selectedGames = (state) => {
  return state.getIn(['games', 'list']).toJS();
}

const selectedPicture = (state) => {
  return state.getIn(['filestack', 'url'], '');
}

const fetchGames = () => {
	return axios.get('http://localhost:8081/games');

	// var p = fetch('http://localhost:8081/games', {
	// 	mode: 'no-cors',
	// 	headers: new Headers({
  //     'Content-Type': 'application/json'
  //   })
  // })
	// .then(function (r) {
	// 	return r.narf()
	// });
  //
	// return p;
};

const deleteServerGame = (id) => {
  return fetch(`http://localhost:8081/games/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'DELETE',
  })
  .then(response => response.json());
}

const postServerGame = (game) => {
  return fetch('http://localhost:8081/games', {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify(game)
  })
  .then(response => response.json());
}

function* getGames () {
  try {
    const games = yield call(fetchGames);
    yield put(getGamesSuccess(games));
  } catch (err) {
    console.log(err);
    yield put(getGamesFailure());
  }
}

function* deleteGame (action) {
  const { id } = action;
  const games = yield select(selectedGames);
  try {
    yield call(deleteServerGame, id);
    yield put(deleteGameSuccess(games.filter(game => game._id !== id)));
  } catch (e) {
    yield put(deleteGameFailure());
  }
}

const getGameForm = (state) => {
  return state.getIn(['form', 'game']).toJS();
}

function* postGame () {
  const picture = yield select(selectedPicture);
  const game = yield select(getGameForm);
  const newGame = Object.assign({}, { picture }, game.values);
  try {
    yield call(postServerGame, newGame);
    yield put(postGameSuccess());
  } catch (e) {
    yield put(postGameFailure());
  }
}

function* watchGetGames () {
  yield takeLatest(GET_GAMES, getGames);
}

function* watchDeleteGame () {
	yield takeLatest(DELETE_GAME, deleteGame);
}

function* watchPostGame () {
  yield takeLatest(POST_GAME, postGame);
}

export {
	watchGetGames,
	watchDeleteGame,
  watchPostGame
};
