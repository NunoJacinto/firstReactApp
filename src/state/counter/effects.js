import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const get = (what) => fetch(`http://localhost:3000/${what}`)
    .then((res) => res.json())

function* load(action) {
    try {
        
        const data = yield call(get, 'counter');
        //console.log(data)
        yield put({ type: "[COUNTER] LoadSucceded", value: data });
    } catch (e) {
        yield put({ type: "[COUNTER] LoadFailed" });
    }
}

export default [
    takeEvery("[COUNTER] LoadRequest", load)
];