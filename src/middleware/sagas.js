import { call, put, takeLatest } from 'redux-saga/effects'
import { apiFetch } from '../api'
import * as types from "../constants/ChatFilter"
import { fetchUsersSuccess, fetchUsersFailed } from '../actions';

function* fetchUser(action) {
    try {
        const user = yield call(apiFetch);
        yield put(fetchUsersSuccess);
    } catch (ex) {
        yield put(fetchUsersFailed)
    }
}

// watcher - de theo roi hanh dong
function* mySaga() {
    yield takeLatest(types.FETCH_USERS, fetchUser);
}

export default mySaga;
