import { call, put, takeLatest } from 'redux-saga/effects'
import { apiFetch } from '../api'
import * as types from "../constants/ChatFilter"
import { fetchUsersSuccess, fetchUsersFailed } from '../actions';

function* fetchUser() {
    try {
        const user = yield call(apiFetch);
        yield put({type: types.FETCH_USERS_SUCCESS, user});
    } catch (ex) {
        yield put({type: types.FETCH_USERS_FAILED})
    }
}

// watcher - de theo roi hanh dong
function* mySaga() {
    yield takeLatest(types.FETCH_USERS, fetchUser);
}

export default mySaga;
