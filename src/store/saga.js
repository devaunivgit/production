// import { delay } from 'redux-saga';
import { delay, put, takeEvery } from 'redux-saga/effects';
function* asyncAgeUP() {
  yield delay(4000);
  yield put({ type: 'ASYNC_AGE_UP', value: 1 });
}

export function* watchAgeUp() {
  yield takeEvery('AGE_UP', asyncAgeUP);
}
